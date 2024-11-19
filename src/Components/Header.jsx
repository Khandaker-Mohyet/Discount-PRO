import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  const {user, singInOut} = useContext(AuthContext)
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-[#570DF8]' : 'hover:text-[#570DF8]'}`} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-[#570DF8]' : 'hover:text-[#570DF8]'}`} to="/brand">Brands</NavLink>
        <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-[#570DF8]' : 'hover:text-[#570DF8]'}`} to="/about">About</NavLink>
      </ul>
    </div>
    <a className="flex"><img className='w-20 h-20 items-center' src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-sm font-bold px-1 space-x-5">
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-[#570DF8]' : 'hover:text-[#570DF8]'}`} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-[#570DF8]' : 'hover:text-[#570DF8]'}`} to="/brand">Brands</NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-[#570DF8]' : 'hover:text-[#570DF8]'}`} to="/about">About</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
        {
          user && user?.email?<button onClick={singInOut} className="btn btn-primary font-bold">Log out</button> : <Link to="/auth/Login" className="btn btn-primary font-bold">Login</Link>
        }
  </div>
    </div>
  )
};

export default Header;