import { NavLink } from "react-router-dom";
import '../styles/navbar.css'
import Logo from "../assest/Logo.png";
const Navbar = () => {
    return (
        <header>
            <>
            <nav>
            <div className="nav-content">
                <div>
                    <img src={Logo}/>
                    </div>
                    <div className="nav-links">
          <NavLink to='/'>
            Home 
            </NavLink>
            <NavLink to='/about'>
                About
            </NavLink>
            <NavLink to='/service'>
                Service
            </NavLink>
            <NavLink to='/'>
                Portfolio
            </NavLink>
            <NavLink to='/'>
                Blog
            </NavLink>
        <NavLink to ='/'>
            Contact
        </NavLink>
        </div>
        </div>
            </nav>
            </>
        </header>
    );
};
export default Navbar

