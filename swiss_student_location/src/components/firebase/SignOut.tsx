import {auth} from "@config/firebase";
import { signOut } from "firebase/auth"

/**
 * Sign out button
 * @constructor
 */
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
