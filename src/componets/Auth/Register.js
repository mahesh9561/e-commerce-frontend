import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addregister } from '../../store/RegisterSlice';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (pass === confirmpass) {
            try {
                const response = await axios.post('http://localhost:8000/api/products/register', {
                    name,
                    email,
                    mobile,
                    pass,
                })
                console.log('Success:', response);

                // Reset form fields after successful submission
                setName('');
                setEmail('');
                setMobile('');
                setPass('');
                setConfirmPass('');
                alert(`Register Successfull ${email}`)
                navigate('/login')
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className="font-sans-serif">
            <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-160px sm:p-6 p-4">
                <h4 className="sm:text-3xl text-2xl font-bold text-white mb-20">Create your account</h4>
            </div>

            <div className="mx-4 mb-4 -mt-16">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-md sm:p-8 p-4 rounded-md">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Name</label>
                            <input name="lname" value={name} onChange={(e) => setName(e.target.value)} type="text" className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" placeholder="Enter last name" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" placeholder="Enter email" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
                            <input name="number" value={mobile} onChange={(e) => setMobile(e.target.value)} type="number" className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" placeholder="Enter mobile number" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <input name="password" value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" placeholder="Enter password" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                            <input name="cpassword" value={confirmpass} onChange={(e) => setConfirmPass(e.target.value)} type="password" className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" placeholder="Enter confirm password" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
