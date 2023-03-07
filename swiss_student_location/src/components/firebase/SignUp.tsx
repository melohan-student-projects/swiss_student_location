import {auth} from "@config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"
import {useState} from "react";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>
        </div>
    );
};
