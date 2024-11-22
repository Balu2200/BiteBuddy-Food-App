import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            count : 0,
        }
    };

    render(){

        const {name, location} = this.props;
        const { count }  = this.state;

        return(
            <div className="contact">
                <h2> Count    : {count}</h2>
                <button onClick={() =>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Count Increase</button>
                <h2>Name      : {name}</h2>
                <h2>Location  : {location}</h2>
                <h3>Mail      : balupasumarthi1@gmail.com </h3>
            </div>
        );
    };
};

export default UserClass;

