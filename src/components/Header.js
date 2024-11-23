import {LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";


const Header = () => {

    const [btnName,setbtnName] = useState("Login");
    const navigate = useNavigate();

    const onlineStatus = useonlineStatus();

    const handleLoginClick = () =>{
        if(btnName === "Login"){
            navigate("/login");
            setbtnName("Logout");
        }
        else{
            navigate('/');
            setbtnName("Logout");
        }
    }

    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        onlineStatus:{onlineStatus? "✅" : "❌"}
                    </li>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/About">About</Link>
                    </li>
                    <li>
                        <Link to = "/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to = "/grocery">Grocery</Link>
                    </li>
                    <li>
                        Cart
                    </li>
                    <li>
                        <Link to = "/login"></Link>
                    </li>
                    <button className="login-btn" onClick={handleLoginClick}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;