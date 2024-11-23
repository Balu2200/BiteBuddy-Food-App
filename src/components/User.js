import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { USER_API } from "../utils/constants";

const User = ({userID}) =>{

    const [userData, setuserData] = useState(null);
    useEffect(() =>{
        getUserData(userID);
    },[userID])

    async function getUserData(userID) {
        const data = await fetch(USER_API+userID);
        const json = await data.json();
        setuserData(json);
    }

    if (userData == null){
        return(
            <Shimmer/>
        )
    }

    const {name,company,blog,avatar_url}= userData;
    
    return (
        <div className="user-card bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
            <img 
                src={avatar_url} 
                alt="User_Image" 
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">
                Name: <span className="font-normal">{name}</span>
            </h3>
            <h3 className="text-lg font-bold text-gray-800">
                Company: <span className="font-normal">{company}</span>
            </h3>
            <h3 className="text-lg font-bold text-gray-800">
                Blog: <span className="font-normal text-blue-600 underline">{blog}</span>
            </h3>
        </div>
    );
    
};

export default User;