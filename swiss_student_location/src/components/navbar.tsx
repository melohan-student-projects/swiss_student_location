import '/src/assets/style/navbar.css';

import {Link} from "react-router-dom";
import {Button} from 'primereact/button';

export default function Navbar() {
    return (
        <div className={'navbar_container bg-primaryColor py-2'}>

            <div>
                <Link to={'/'} className="navbar_link flex flex-row align-items-center gap-1 text white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-20 h-20 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"/>
                    </svg>

                    <p className="text-base font-bold text-white">Swiss <br/> Student <br/> Location</p>
                </Link>

                <Link to={'/'} className={'navbar_link'}>
                    <Button label="Home" className="p-button-rounded text-white bg-primaryColor hover:bg-blue-700 border-0 border-0 p-button-lg"/>
                </Link>
            </div>

            <nav className="hidden md:flex md:grow">

                {/* Desktop sign in links */}
                <ul className="flex grow justify-end flex-wrap items-center gap-2">
                    <li>
                        <Link to={'/signin'} className={'navbar_link'}>
                            <Button label="Sign in"
                                    className="p-button-rounded text-white bg-primaryColor hover:bg-blue-700 border-0 p-button-lg px-4 py-3 flex items-center transition duration-150 ease-in-out"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/signup'} className={'navbar_link'}>
                            <Button label="Sign up"
                                    className="p-button-rounded text-white bg-primaryColor hover:bg-blue-700 p-button-lg px-4 py-3 flex items-center transition duration-150 ease-in-out"/>
                        </Link>
                    </li>
                </ul>

            </nav>

        </div>

    )
}