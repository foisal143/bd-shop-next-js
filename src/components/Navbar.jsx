'use client';
import { afterLoginNavlinks, beforeLoginNavlinks } from '@/data/getNavlinks';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Navlink from './Navlink';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { AuthContext } from '@/context/AuthProvaider/AuthProvaider';
import changedTheme from '@/utilits/changedTheme';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [navToggle, setNavToggle] = useState(false);
  const themeFromDB = localStorage.getItem('bd-shop-theme');

  const navlinks = user ? afterLoginNavlinks : beforeLoginNavlinks;
  // hander logout action
  const handlerLogut = async () => {
    const result = await logout();
    console.log(result);
  };

  // handler theme toggler
  const hanbdlerThemeToggler = e => {
    const isChecked = e.target.checked;
    let updatetheme = '';
    if (isChecked) {
      updatetheme = 'dark';
    } else {
      updatetheme = 'light';
    }
    localStorage.setItem('bd-shop-theme', updatetheme);
    changedTheme();
  };

  return (
    <>
      <div className="navbar shadow-md sticky top-0 z-20 bg-base-100">
        <div className="flex-1">
          <Link href="/" className=" font-bold upparcase text-xl">
            Bd Shop
          </Link>
        </div>

        <div
          className={`navbar-center bg-transparent transition-all duration-200  w-full p-10 lg:p-0   lg:w-fit lg:block me-5 lg:static absolute top-0 left-0 ${
            navToggle ? 'left-[-500%]' : 'left-0 bg-white'
          }`}
        >
          <ul className="lg:flex text-center space-y-8 lg:space-y-0 w-full justify-center items-center gap-10">
            {navlinks.map(link => (
              <li onClick={() => setNavToggle(true)} key={link.title}>
                <Navlink path={link.path} title={link.title}></Navlink>
              </li>
            ))}
          </ul>
        </div>
        {/* nav toggle button */}
        <div className="lg:hidden z-10">
          <button onClick={() => setNavToggle(!navToggle)}>
            {!navToggle ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        {/* theme toggler here */}
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={hanbdlerThemeToggler}
            type="checkbox"
            value="synthwave"
            defaultChecked={themeFromDB === 'dark'}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {/* profile dropdown here */}
        <div className="flex-none">
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user && user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handlerLogut}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
