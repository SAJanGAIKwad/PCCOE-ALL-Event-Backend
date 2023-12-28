import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const UserMenu = () => {


    return (
        <div className="App">
            <div className='menu-container'>
                <div className="dropdown-menu">
                    <ul>
                        <li className="dropdown-item">
                            <Link exact to="/user-login" className="nav-links">User Login</Link>
                        </li>
                        <li className="dropdown-item">
                            <Link exact to="/admin-login" className="nav-links">Admin Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default UserMenu