import User from "./User";
import UserClass from "./UserClass";


const About = () =>{
    
    return(
        <div className="about">
            <h1>About</h1>
            <h2>This is about my  React Food app</h2>
            <h3>Creator profile</h3>
            <User userID="Balu2200"/>

            <UserClass/>
        </div>
    )
};

export default About;