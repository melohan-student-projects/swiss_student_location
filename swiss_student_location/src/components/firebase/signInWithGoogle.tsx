import {auth, googleProvider} from "@config/firebase";
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom";

export const SignInWithGoogle = () => {
    let navigate = useNavigate();


    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (error) {
            // nothing..
        }
    };
    return (
        <button
            className="w-full bg-red-900 hover:bg-red-800 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10 mt-2"
            onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    );
};