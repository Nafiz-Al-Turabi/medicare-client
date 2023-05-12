import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Service</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <img src="https://i.ibb.co/0qxdfqF/medicare-logo-color.png" alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='#'><button  className='bg-[#0cb8b6] py-3 px-5 text-white font-semibold rounded-lg hover:bg-[#017c7a] duration-100 active:scale-95'>Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;