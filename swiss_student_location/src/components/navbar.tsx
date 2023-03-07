import '/src/assets/style/navbar.css';

import {Link} from "react-router-dom";
import {Button} from 'primereact/button';

export default function Navbar() {
    return (
        <div className={'navbar_container'}>

            <div>
                <Link to={'/'} className={'navbar_link'}>
                    <img src={'/src/assets/images/logo.png'} alt={'logo'} className={'navbar_logo'}/>
                </Link>

                <Link to={'/'} className={'navbar_link'}>
                    <Button label="Home" className="p-button-rounded p-button-text p-button-lg"/>
                </Link>

                <Link to={'/Client'} className={'navbar_link'}>
                    <Button label="Client" className="p-button-rounded p-button-text p-button-lg"/>
                </Link>

                <Link to={'/Feature'} className={'navbar_link'}>
                    <Button label="Feature" className="p-button-rounded p-button-text p-button-lg"/>
                </Link>

                <Link to={'/Gallery'} className={'navbar_link'}>
                    <Button label="Gallery" className="p-button-rounded p-button-text p-button-lg"/>
                </Link>

                <Link to={'/Pricing'} className={'navbar_link'}>
                    <Button label="Pricing" className="p-button-rounded p-button-text p-button-lg"/>
                </Link>

                <Link to={'/Contact'} className={'navbar_link'}>
                    <Button label="Contact" className="p-button-rounded p-button-text p-button-lg"/>
                </Link>
            </div>

            <nav className="hidden md:flex md:grow">

                {/* Desktop sign in links */}
                <ul className="flex grow justify-end flex-wrap items-center">
                    <li>
                        <Link to={'/Signin'} className={'navbar_link'}>
                            <Button label="Sign in"
                                    className="p-button-rounded p-button-text p-button-lg px-4 py-3 flex items-center transition duration-150 ease-in-out"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Signup'} className={'navbar_link'}>
                            <Button label="Sign up"
                                    className="p-button-rounded p-button-text p-button-lg flex items-center transition duration-150 ease-in-out"/>
                        </Link>
                    </li>
                </ul>

            </nav>

        </div>

    )
        ;
}