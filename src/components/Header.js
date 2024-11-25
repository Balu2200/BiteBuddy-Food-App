import {LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";


const Header = () => {

    const [btnName,setbtnName] = useState("Login");
    const navigate = useNavigate();

    const onlineStatus = useonlineStatus();

    const {loggedInUser} = useContext(userContext);

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
        <div className="flex justify-between bg-pink-100 shadow-md m-2 mt-2 pr-3">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-6 m-6 ">
                    <li className="px-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className="px-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                        <Link to = "/About">About</Link>
                    </li>
                    <li className="px-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                        <Link to = "/Contact">Contact</Link>
                    </li>
                    <li className="px-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                        <Link to = "/grocery">Grocery</Link>
                    </li>
                    <li className="px-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                        Cart
                    </li>
                    <li className="px-6 ">
                        <Link to = "/login"></Link>
                    </li>
                    
                    <button className="px-2  border border-solid shadow-md transition-transform duration-300 ease-in-out hover:scale-105 bg-red-500 rounded-md" onClick={handleLoginClick}>{btnName}</button>

                    <li className="px-4">User : {loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};
export default Header;