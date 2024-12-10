import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/products/login', {
                email,
                pass
            });

            const mockResponse = {
                token: "auth-token",
                role: email === "admin@example.com" ? "admin" : "user",
            };

            console.log('Success:', response);
            localStorage.setItem('token', mockResponse.token);
            localStorage.setItem('role', mockResponse.role);
            if (mockResponse.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/product");
            }
            setEmail('');
            setPass('');
        } catch (error) {
            alert('Login failed, please check your credentials');
            console.error('Error:', error);
            alert('An error occurred during login');
        }
    };


    return (
        <div className="font-[sans-serif]">
            <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[160px] sm:p-6 p-4">
                <h4 className="sm:text-3xl text-2xl font-bold text-white">Login to your account</h4>
            </div>

            <div className="mx-4 mb-4 -mt-16">
                <form className="max-w-4xl mx-auto bg-white shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] sm:p-8 p-4 rounded-md">
                    {/* {error && <p className="text-red-500">{error}</p>} Display error message */}

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <input
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all"
                                placeholder="Enter email"
                            />
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <input
                                name="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                type="password"
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                        >
                            Sign In
                        </button>
                    </div>
                    <Link className="text-sm mt-6 text-gray-800 flex" to={'/register'}>
                        I don't have an account?
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
