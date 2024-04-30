import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from 'react-tooltip';
import { getSavedTheme, setLocalTheme } from "../../Utility/LocalStorage";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [emailLink, setEmailLink] = useState("");
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (user) {
            setEmailLink(`/list/email/${user.email}`);
        }
        else {
            setEmailLink("/login");
        }
    }, [user]);

    const toggleDarkMode = () => {

        // const defaultTheme = document.querySelector('html').getAttribute('data-theme');
        // console.log(defaultTheme);

        // const newMode = getSavedTheme();
        // if (newMode === "light") {
        //     const newModeData = "synthwave";
        //     setLocalTheme(newModeData);
        //     document.querySelector('html').setAttribute('data-theme', newModeData);
        // } else if (newMode === "synthwave") {
        //     const newModeData = "light";
        //     setLocalTheme(newModeData);
        //     document.querySelector('html').setAttribute('data-theme', newModeData);
        // } else {
        //     const newModeData = "light";
        //     setLocalTheme(newModeData);
        //     document.querySelector('html').setAttribute('data-theme', newModeData);
        // }
        // console.log(newMode);



        const newMode = !isDarkMode;
        setDarkMode(newMode);
        document.querySelector('html').setAttribute('data-theme', newMode ? "synthwave" : "light");
    };


    const navPart = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all">Art & craft Items</NavLink></li>
        <li><NavLink to="/add">Add craft</NavLink></li>
        <li><NavLink to={emailLink}>Art & CraftList</NavLink></li>
    </>;

    const handleLogout = () => {
        logout().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    };

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navPart}
                    </ul>
                </div>
                <div className="flex items-center gap-0">
                    <Link className="w-20 hidden md:inline" to="/"><img className="" src="https://i.postimg.cc/6QSjdTz0/mokeup-removebg-preview.png" alt="" /></Link>
                    <Link className="text-xl font-bold " to="/">Art&Craft</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navPart}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    ((
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
                    )
                }
                <div className="" onClick={toggleDarkMode}>
                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                {/* <div className="" onClick={toggleDarkMode}>
                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox" value={isDarkMode ? "synthwave" : "light"} className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div> */}

            </div>
        </div>
    );
};

export default Navbar;
