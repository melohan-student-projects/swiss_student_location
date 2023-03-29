import {auth} from "@config/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Link, useNavigate} from "react-router-dom";

interface Values {
    email: string;
    password: string;
    passwordConfirm: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("*Ce champ est obligatoire"),
    password: Yup.string().required("*Ce champ est obligatoire").min(6, "Le mot de passe doit contenir au moins 6 caractères."),
    passwordConfirm: Yup.string()
        .required("*Ce champ est obligatoire")
        .oneOf([Yup.ref("password"), ''], "Les mots de passe ne correspondent pas."),
});

export const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    let navigate = useNavigate();

    const formik = useFormik<Values>({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                await createUserWithEmailAndPassword(auth, values.email, values.password);
                navigate("/");
            } catch (error) {
                setErrorMessage("Cette adresse mail est déjà utilisée.");
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h1 className="text-2xl text-gray-900 font-bold">Inscription</h1>
            <div>
                <span className="text-gray-600 text-sm">Vous avez déjà un compte?&nbsp;</span>
                <Link to="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" style={{ color: '#595959' }}>
                    Connexion
                </Link>
            </div>
            <div className="mb-4 mt-3">

                {errorMessage && <div className="text-red-800 font-bold text-sm mt-1">{errorMessage}</div>}
                <label htmlFor="email" className="block text-gray-900 text-sm font-semibold mb-2">
                    Email
                </label>
                <input
                    className={`text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10 ${
                        formik.touched.email && formik.errors.email ? "border-red-800" : ""
                    }`}
                    id="email"
                    aria-describedby="email-help"
                    type="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="text-red-800 font-bold text-sm mt-1">{formik.errors.email}</div>
                )}
            </div>
            <div className="mb-4 mt-3">
                <label htmlFor="password" className="block text-sm text-gray-900 font-semibold mb-2">
                    Mot de passe
                </label>
                <input
                    className={`text-sm bg-white appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10 ${
                        formik.touched.password && formik.errors.password ? "border-red-800" : ""
                    }`}
                    id="password"
                    aria-describedby="password-help"
                    type="password"
                    placeholder="Mot de passe"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className="text-red-800 font-bold text-sm mt-1">{formik.errors.password}</div>
                )}
            </div>
            <div className="mb-4 mt-3">
                <label htmlFor="passwordConfirm" className="block text-sm font-semibold mb-2" style={{ color: "#262626" }}>
                    Répétez votre mot de passe
                </label>
                <input
                    className={`text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline h-10 ${
                        formik.touched.passwordConfirm && formik.errors.passwordConfirm ? "border-red-800" : ""
                    }`}
                    id="passwordConfirm"
                    aria-describedby="password-confirm-help"
                    type="password"
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Mot de passe"
                />
                {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
                    <div className="text-red-800 font-bold text-sm mt-1">{formik.errors.passwordConfirm}</div>
                )}
            </div>
            <div className="flex w-full">
                <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10 mt-0"
                    type="submit"
                    disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
                    style={{ backgroundColor: '#1f95bd' }}
                >
                    {formik.isSubmitting ? "Chargement..." : "Inscription"}
                </button>
            </div>
        </form>
    )};