import React from 'react'
import ReactDOM from 'react-dom/client'

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@pages/Home";
import Layout from "@pages/layout";
import Register from "@pages/users/Register";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path={"/"} element={<Layout/>}>
                    <Route path='/register' element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container!);
root.render(<App/>);

