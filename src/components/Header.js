import {LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName,setbtnName] = useState("Login");

    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/About">About</Link>
                    </li>
                    <li>
                        <Link to = "/Contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        btnName === "Login"? setbtnName("Logout"): setbtnName("Login");
                    }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;