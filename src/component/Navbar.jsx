import "../index.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="flex text-center py-7 k5">
                <div className="navbar-logo mx-28"></div>
                
                <div className="flex justify-evenly h-[50px] bg-black w-[500px] py-5 text-3xl rounded-full text-white mx-40">

                    <NavLink to="/" className="navlink">
                        Home
                    </NavLink>
                    <NavLink to="/about" className='navlink'>
                        About
                    </NavLink>
                    <NavLink to="/policies" className='navlink'>
                        Policies
                    </NavLink>
                </div>

            </nav>
        </>
    );
}


export default NavBar;