import React from 'react'
import {Link ,NavLink} from 'react-router-dom'


export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 w-screen">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center ">
                        <p className='bg-orange-700 text-white rounded-md '>
                            <p className='p-2'>
                               NITYAM KUMAR
                            </p>
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
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to='/'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? 'text-orange-700' : 'text-slate-300'}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/What'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? 'text-orange-700' : 'text-slate-300'}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    What i did ?
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to='/Whoweare'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? 'text-orange-700' : 'text-slate-300'}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Who am i ?
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/Contect'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? 'text-orange-700' : 'text-slate-300'}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contect_me
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

