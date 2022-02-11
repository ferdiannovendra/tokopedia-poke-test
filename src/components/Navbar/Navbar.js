import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/" className='item'>Home</Link>
            <Link to="/my" className='item'>My Pokemon</Link>
        </div>
    );
}

export default Navbar;
