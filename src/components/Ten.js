import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from '../forRouter/Contact.jsx';
import About from '../forRouter/About.jsx';
import Home from '../forRouter/Home.jsx';

function Ten() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Ten