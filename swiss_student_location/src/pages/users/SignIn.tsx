import {Link} from 'react-router-dom';
import {SignInWithGoogle} from "@components/firebase/SignInWithGoogle";
import {SignIn as SignInComponent} from "@components/firebase/SignIn";

export default function SignIn() {
    return (
        <div className="container max-w-md mx-auto xl:max-w-3xl h-full flex overflow-hidden">
            <div className="w-full xl:w-1/2 p-8">
                <SignInComponent/>
                <SignInWithGoogle/>
            </div>
        </div>
    );
};

