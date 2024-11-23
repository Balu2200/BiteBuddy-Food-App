import React from "react";
import { USER_API } from "../utils/constants";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            useInfo :{
                name : "Dummy",
                company :"Default",
                blog :'dummy'
            }
        }
    };

    async componentDidMount(){
        const data = await fetch(USER_API + "Balu2200");
        const json = await data.json();
        
        this.setState({
            useInfo : json
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Updated");
    }

    componentWillUnmount(){
        console.log("component unmounted");
    }

    render(){

        const { name, company, blog,avatar_url}  = this.state.useInfo;


        return(
            <div className="contact">
                <h2>Name      : {name}</h2>
                <h2>Company  : {company}</h2>
                <h3>Website     : {blog}</h3>
            </div>
        );
    };
};

export default UserClass;

