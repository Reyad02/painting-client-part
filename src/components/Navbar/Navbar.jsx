import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navPart = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all">Art & craft Items</NavLink></li>
        <li><NavLink to="/add">Add craft</NavLink></li>
        <li><NavLink to="/list">Art & CraftList</NavLink></li>
    </>

    const handleLogout = () => {
        logout().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navPart}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Art&Craft</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navPart}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    (
                        user
                        &&
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip="Reyad ">
                                <div className="w-10 rounded-full" >
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="" onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div>
                    )
                    ||
                    <> <Link className="btn" to="/login">Login</Link>
                        <Link className="btn" to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;