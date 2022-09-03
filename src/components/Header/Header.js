import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import './logo/blood.png';

const Header = () => {
    return (
        <div>
            <div><img src="./logo/blood.png" alt="" /></div>
            <nav id='navbar'>
                <Link to="/">Home</Link>
                <Link to="/Bloodrequest">Blood Request</Link>
                <Link to="/Newsfeed">Newsfeed</Link>
                <Link to="/Blddonarlist">Blood Donar List</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/About">About us</Link>
                
            </nav>
        </div>
    );
};

export default Header;