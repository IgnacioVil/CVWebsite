import React from 'react';
import { NavLink } from 'react-router-dom'
import "./style/Navbar.scss"

const Navbar = () => (
    <div className={"navbar"}>
        <ul className="navlist">
            <NavLink to='/' className={"navitem"} activeClassName="isActive" exact> <li> Home </li> </NavLink>
            <NavLink to='/abilities' className={"navitem"} activeClassName="isActive"> <li> Abilities </li> </NavLink>
            <NavLink to='/experience' className={"navitem"} activeClassName="isActive"> <li> Experience </li> </NavLink>
            <NavLink to='/hobbies' className={"navitem"} activeClassName="isActive"> <li> Hobbies </li> </NavLink>
            <li className={"slider"} />
        </ul>
    </div>
);

export default Navbar;