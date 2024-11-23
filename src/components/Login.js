import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();   

    const handleLogin = () => {
        if (email && password) {
            alert("Login Successful!");
            navigate('/');  
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="login-form p-8 bg-white shadow-lg rounded-lg max-w-sm mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Email</h2>
            <input 
                type="email" 
                className="Email-box w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
            />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Password</h2>
            <input 
                type="password" 
                className="Password-box w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
            />

            <button 
                className="login-btn w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleLogin}>
                Submit
            </button>
        </div>
    );
};

export default Login;
