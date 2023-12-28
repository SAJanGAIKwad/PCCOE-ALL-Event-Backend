import React, { useState } from 'react'
import '../../App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Userlogin = () => {
    function showError() {
        toast.error('Please Check Email and Password Again');
    }
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/')
                }
                else {
                    showError()
                }
            })
            .catch(err =>
                console.log(err),
            )
    }
    return (
        <>
            <ToastContainer />
            <div className="mt-4 grow flex items-center justify-around ">
                <div className="mb-64 shadow-2xl rounded-lg p-10">
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <input type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <input type="password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        <button className="primary">Login</button>
                        <GoogleOAuthProvider className='m-10 bg-danger' clientId="446061591121-opbuk29t8r85tdq2uia6am4m54ioqleh.apps.googleusercontent.com">
                            <div className='m-5 flex justify-center'>
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        var decoded = jwt_decode(credentialResponse.credential);
                                        console.log(decoded);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed')
                                    }}
                                />
                            </div>
                        </GoogleOAuthProvider>
                        <div className="text-center py-2 text-gray-500">
                            Don't have an account yet? <Link className="underline text-black" to={'/user-register'}>Register now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Userlogin