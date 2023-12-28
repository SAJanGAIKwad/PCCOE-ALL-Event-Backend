import React from 'react'
import { Link } from 'react-router-dom'
// import {UserContext} from "./UserContext";

const Navbar = () => {
    // const {user} = useContext(UserContext);
    return (
        <>
            <header className='p-4 flex justify-between'>
                <a href='' className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>
                    <span className='font-bold text-xl'>Evento</span>
                </a>
                <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
                    <Link exact to="/">
                        <div>Home</div>
                    </Link>
                    <div className="border-l border-gray-300"></div>
                    <Link exact to="/about">
                        <div>About</div>
                    </Link>
                    <div className="border-l border-gray-300"></div>
                    <Link exact to="/event">
                        <div>Event</div>
                    </Link>
                    <div className="border-l border-gray-300"></div>
                    <Link exact to="/contact">
                        <div>Contact</div>
                    </Link>
                    <button className="bg-primary text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                <Link to='/login' className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <Link to='/login' className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </Link>
                    {/* {!!user && (
                        <div>
                            {user.name}
                        </div>
                    )} */}
            </header>
        </>
    )
}

export default Navbar