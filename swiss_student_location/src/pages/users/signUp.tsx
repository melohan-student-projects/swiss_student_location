import {SignUp} from "@components/firebase/SignUp";

export default function SignIn() {
    return (
        <div className="container max-w-md mx-auto xl:max-w-3xl h-full flex overflow-hidden">
            <div className="w-full xl:w-1/2 p-8">
                <SignUp/>
            </div>
        </div>
    );
};
