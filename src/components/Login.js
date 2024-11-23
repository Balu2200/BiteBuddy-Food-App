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
        <div className="login-form">
            <h2>Enter Email</h2>
            <input 
                type="email" 
                className="Email-box" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
            />

            <h2>Enter Password</h2>
            <input 
                type="password" 
                className="Password-box" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
            />

            <button 
                className="login-btn" 
                onClick={handleLogin}>
                Submit
            </button>

        </div>
    );
};

export default Login;
