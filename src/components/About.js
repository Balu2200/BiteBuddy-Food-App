import User from "./User";
import UserClass from "./UserClass";


const About = () =>{
    return(
        <div className="about">
            <h1>About</h1>
            <h2>This is about my  React Food app</h2>
            <User name={"Balu Pasumarthi"}/>


            <UserClass name={"Balu Pasumarthi"} location ={"Visakhapatnam"}/>
        </div>
    )
};

export default About;