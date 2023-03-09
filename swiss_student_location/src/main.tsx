import React from 'react'
import ReactDOM from 'react-dom/client'

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@assets/style/index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@pages/home";
import SignUp from "@pages/users/signUp";
import SignIn from "@pages/users/signIn";
import NotFound404 from "@pages/notFound404";
import Layout from "@pages/layout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='*' element={<NotFound404/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container!);
root.render(<App/>);

