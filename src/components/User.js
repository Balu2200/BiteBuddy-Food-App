import { useState } from "react";

const User = (props) =>{
    
    return (
        <div className="user-card">
            <h3> Name     : {props.name}</h3>
            <h3> Location : Visakhapatnam</h3>
            <h3> Contact  : balupasumarthi1@gmail.com</h3>
        </div>
    );
};

export default User;