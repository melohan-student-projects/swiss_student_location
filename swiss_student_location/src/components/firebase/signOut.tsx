import {auth} from "@config/firebase";
import { signOut } from "firebase/auth"

export const SignOut = () => {
    const logOut = async () => {
        await signOut(auth);
    };

    return (
        <div>
            <button onClick={logOut}>Sign Out</button>
        </div>
    );
};
