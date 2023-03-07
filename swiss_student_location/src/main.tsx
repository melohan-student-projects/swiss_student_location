import React from 'react'
import ReactDOM from 'react-dom/client'
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
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container!);
root.render(<App/>);

