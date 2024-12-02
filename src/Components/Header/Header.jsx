import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0 w-full">
      <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 w-full hidden lg:block">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl w-full">
          <Link to="/" className="flex items-center">
            <p className="bg-orange-700 text-white rounded-md">
              <p className="p-2">NITYAM KUMAR</p>
            </p>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="https://github.com/NityamMishra1234"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              GitHub
            </Link>
          </div>
          <div className="hidden lg:flex lg:order-1" id="desktop-menu">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-slate-300'
                    } hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/What"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-slate-300'
                    } hover:text-orange-700 lg:p-0`
                  }
                >
                  What I did?
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Whoweare"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-slate-300'
                    } hover:text-orange-700 lg:p-0`
                  }
                >
                  Who am I?
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contect"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-slate-300'
                    } hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-900 w-full text-white md:hidden">
        <div className="max-w-screen-sm mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-lg font-bold">
            <img className="h-12 w-12 rounded-3xl" src="/LOGO.jpg" alt="" />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} bg-gray-900 text-sm`}>
          <ul className="space-y-2 px-4 py-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-1 hover:text-blue-300 ${
                    isActive ? 'text-orange-700' : 'text-slate-300'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/What"
                className={({ isActive }) =>
                  `block py-1 hover:text-blue-300 ${
                    isActive ? 'text-orange-700' : 'text-slate-300'
                  }`
                }
              >
                What I did?
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/Whoweare"
                className={({ isActive }) =>
                  `block py-1 hover:text-blue-300 ${
                    isActive ? 'text-orange-700' : 'text-slate-300'
                  }`
                }
              >
                Who am I?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contect"
                className={({ isActive }) =>
                  `block py-1 hover:text-blue-300 ${
                    isActive ? 'text-orange-700' : 'text-slate-300'
                  }`
                }
              >
                Contact Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Todo"
                className={({ isActive }) =>
                  `block py-1 hover:text-blue-300 ${
                    isActive ? 'text-orange-700' : 'text-slate-300'
                  }`
                }
              >
                Todo List
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
