import React, { useContext } from 'react';
import { IoPawSharp } from 'react-icons/io5';
import { LuLogIn } from 'react-icons/lu';


import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import {  MoonLoader } from 'react-spinners';
import 'animate.css';
const Navbar = () => {
  const {user, setUser, loading} = useContext(AuthContext);

  const handleSignout = () =>{
    signOut(auth)
    .then(() =>{
      setUser(null);
      toast.success("👋 Successfully Signed Out!");
    })
    .catch((error) =>{
      toast.error(`Sign Out Failed: ${error.message}`);
    });
  };
    return (
        <div className="navbar bg-base-100 shadow-sm bg-orange-50 rounded-4xl sticky top-0 h-fit animate__animated animate__fadeInDown">
  <div className='w-11/12 mx-auto flex'>
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to={"/"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`
      }>Home</NavLink>
        <NavLink to={"/services"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`
      }>Services</NavLink>
        <NavLink to={"/myprofile"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`
      }>My Profile</NavLink>
      </ul>
    </div >
    <Link to={"/"}><img className='h-9  hover:scale-110 transition ease-in-out' src="../../assets/logo.png" alt="" /></Link>
    <Link to={"/"} className='flex items-center gap-1 '><IoPawSharp className='text-orange-500 text-4xl animate__animated animate__fadeInTopLeft animate__delay-1s' /><p className="text-xl bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text font-bold animate__animated animate__fadeInTopLeft animate__delay-1s">WarmPaws</p></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10 font-semibold">
      <NavLink to={"/"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out animate__animated animate__fadeInLeft animate__delay-1s ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`
      }>Home</NavLink>
      <NavLink to={"/services"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out animate__animated animate__fadeInDown animate__delay-1s ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`
      }>Services</NavLink>
      <NavLink to={"/myprofile"} className={({ isActive }) =>
        `hover:scale-105 transition ease-in-out animate__animated animate__fadeInRight animate__delay-1s ${
          isActive ? 'text-orange-500 font-bold' : 'hover:text-orange-400'
        }`
      }>My Profile</NavLink>
    </ul>
  </div>
  <div data-aos="fade-left" className="navbar-end">
    {loading ? <MoonLoader size={30} /> :  user? 
    <div className='flex items-center gap-1 md:gap-4'>
      
      <div className="dropdown dropdown-hover">
  <div tabIndex={0}><img
      src={user.photoURL ? user.photoURL : "https://via.placeholder.com/88"}
      alt='avatar'
      className='h-12 w-12 rounded-full hover:scale-105 transition ease-in-out duration-500'
      /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-orange-50 rounded-box z-1 w-52 p-2 shadow-sm">
    <Link to={"/myprofile"}><li className='bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text font-bold text-center'>{user.displayName}</li></Link>
  </ul>
</div>
      <button onClick={handleSignout} className="btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl ">
      <LuLogIn />
        LogOut
        </button>
    </div> : <Link to={"/login"}>
    <button className="btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl">
      <LuLogIn />
        Login / Register
        </button></Link> }
  </div>
  </div>
  <Toaster/>
</div>
    );
};

export default Navbar;