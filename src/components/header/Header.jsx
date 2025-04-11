import { NavLink, Link } from "react-router-dom";
import "./header.css";

function Header() {
    const navLinks = (
        <>
            <li>
                <NavLink className='py-[0.88rem] px-[1.25rem]' to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className='py-[0.88rem] px-[1.25rem]'
                    to='/listed-books'>
                    Listed Books
                </NavLink>
            </li>
            <li>
                <NavLink
                    className='py-[0.88rem] px-[1.25rem]'
                    to='/pages-to-read'>
                    Pages to Read
                </NavLink>
            </li>
            <li>
                <NavLink className='py-[0.88rem] px-[1.25rem]' to='/contact-us'>
                    Contact Us
                </NavLink>
            </li>
            <li>
                <NavLink className='py-[0.88rem] px-[1.25rem]' to='/about-us'>
                    About Us
                </NavLink>
            </li>
        </>
    );

    return (
        <>
            <div className='navbar bg-base-100 mt-8'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='px-4 py-1 btn-ghost lg:hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                            {navLinks}
                        </ul>
                    </div>
                    <Link className=' text-3xl font-bold' to='/'>
                        Book Vibe
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className=' menu-horizontal px-1 font-normal text-lg gap-4'>
                        {navLinks}
                    </ul>
                </div>
                <div className='navbar-end gap-4 max-sm:hidden'>
                    <a className='btn-primary'>Sign In</a>
                    <a className='btn-secondary'>Sign Up</a>
                </div>
            </div>
        </>
    );
}

export default Header;
