import {auth} from "@config/firebase";
import {signInWithEmailAndPassword} from "firebase/auth"
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";


interface Values {
    email: string;
    password: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("*Ce champ est obligatoire."),
    password: Yup.string().required("Ce champ est obligatoire."),
});

/**
 * Application default signIn
 * @constructor
 */
export const SignIn = () => {
    const [errorMessage, setErrorMessage] = useState("");
    let navigate = useNavigate();

    const formik = useFormik<Values>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                await signInWithEmailAndPassword(auth, values.email, values.password);
                navigate("/");
            } catch (error) {
                setErrorMessage("Ce compte n'existe pas ou le mot de passe est incorrecte.");
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h1 className="text-2xl text-gray-900 font-bold">Connexion</h1>
            <div>
                <span className="text-sm">Pas encore de compte?&nbsp;</span>
                <Link to="/signup" className="transition duration-150 ease-in-out">
                    Inscription
                </Link>
            </div>
            <div className="mb-4 mt-3">
                <label htmlFor="email" className="block text-gray-900 text-sm font-semibold mb-2">
                    Email
                </label>
                <input
                    className={`text-sm appearance-none rounded w-full py-2  px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10 ${
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
                <label htmlFor="password" className="block text-gray-900 text-sm font-semibold mb-2">
                    Mot de passe
                </label>
                <input
                    className={`text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10 ${
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
            {errorMessage && <div className="text-red-800 font-bold text-sm mt-1">{errorMessage}</div>}
            <div className="flex w-full">
                <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10 mt-0"
                    type="submit"
                    disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
                >
                    {formik.isSubmitting ? "Chargement..." : "Connexion"}
                </button>
            </div>
        </form>
    )
};