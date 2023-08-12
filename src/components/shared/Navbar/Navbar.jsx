import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <h1>Navbar</h1>
        <ul>
            <li>
                <NavLink to={"/"} >
                    This way Home
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;
