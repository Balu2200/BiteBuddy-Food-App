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
        <div className="user-card">
            <img src ={avatar_url} alt="User_Image" />
            <h3> Name   : {name}</h3>
            <h3> Company: {company}</h3>
            <h3> Blog   : {blog}</h3>
        </div>
    );
};

export default User;