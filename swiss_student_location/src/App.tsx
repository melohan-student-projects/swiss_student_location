import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "@pages/Home";
import Register from "@pages/users/Register";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App;
