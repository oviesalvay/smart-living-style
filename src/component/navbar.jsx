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
                    <div>
          <NavLink to='/Home'>
            Home 
            </NavLink>
            <NavLink to='/About'>
                About
            </NavLink>
            <NavLink to='/Service'>
                Service
            </NavLink>
            <NavLink to='/Portfolio'>
                Portfolio
            </NavLink>
            <NavLink to='/blog'>
                Blog
            </NavLink>
        <NavLink to ='/contact'>
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

