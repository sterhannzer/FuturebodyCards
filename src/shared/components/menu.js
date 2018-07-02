import React from 'react';
import {Link} from 'react-router-dom';
import 'shared/styles/menu.css';


const Menu = () => (
    <div className="nav">
        <p className="">FUTUREBODY</p>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About me</Link>
        <Link to="/contact">Contact</Link>
    </div>
)

export default Menu;