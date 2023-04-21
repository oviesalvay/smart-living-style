import { NavLink } from "react-router-dom";
import '../styles/navbar.css'
import Logo from "../assest/Logo.png";
import { useState } from "react";

const Navbar = () => {

    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }
    
    return (
        <header>
                <nav>
                            <img src={Logo} />
                        <div className={active ? 'nav-links active' : 'nav-links'}>
                            <NavLink to='/' onClick={handleClick}>
                                Home
                            </NavLink>
                            <NavLink to='/about' onClick={handleClick}>
                                About
                            </NavLink>
                            <NavLink to='/service' onClick={handleClick}>
                                Service
                            </NavLink>
                            <NavLink to='/'>
                                Portfolio
                            </NavLink>
                            <NavLink to='/'>
                                Blog
                            </NavLink>
                            <NavLink to='/'>
                                Contact
                            </NavLink>
                        </div>
                    <div className="hamburger" id='contents' onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="#242D52" fill-rule="evenodd"><path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" /></g></svg>
                        </div>
                </nav>
        </header>
    );
};

export default Navbar

