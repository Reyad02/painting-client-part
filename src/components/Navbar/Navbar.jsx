import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from 'react-tooltip'


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
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navPart}
                    </ul>
                </div>
                <div className="flex items-center gap-0">
                    <Link className="w-20" to="/"><img src="https://i.postimg.cc/6QSjdTz0/mokeup-removebg-preview.png" alt="" /></Link>
                    <Link className="text-xl font-bold " to="/">Art&Craft</Link>
                </div>
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
                            <div tabIndex={0} role="button" className="z-10 btn btn-ghost btn-circle avatar ">
                                <div className="w-10 rounded-full " >
                                    <img className="my-anchor-element" src={user.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}></img>
                                    <Tooltip anchorSelect=".my-anchor-element" place="top">
                                        {user.displayName || user.email}
                                    </Tooltip>
                                </div>

                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="" onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div>
                    )
                    ||
                    <> <Link className="btn rounded-none mr-4" to="/login">Login</Link>
                        <Link className="btn  rounded-none	" to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;