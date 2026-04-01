import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ carts }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm w-10/12 mx-auto sticky top-0 z-50 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li> <a>Features</a> </li>
                        <li><a>Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2] bg-clip-text text-transparent">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>

            <div className="navbar-end space-x-4 relative">
                <div className="indicator">
                    <span className="indicator-item badge badge-secondary">{carts.length}</span>
                    <div className=" grid h-7 w-7 place-items-center"><FiShoppingCart /></div>
                </div>
                
                <a href="">Login</a>
                <a className="btn bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2] rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;