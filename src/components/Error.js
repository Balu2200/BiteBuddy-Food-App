import { useRouteError } from "react-router-dom";


const Error= () =>{
    const err = useRouteError();
    console.log(err);

    return(
        <div>
            <h1>Oops!</h1>
            <h2>Something Gone Wrong!</h2>
            <h3>{err.status}: {err.statusText}</h3>
            <h4>Please the URL and enter the correct the URL</h4>
        </div>
    );
};

export default Error;