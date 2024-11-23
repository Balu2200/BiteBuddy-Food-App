import React, { lazy , Suspense} from "react";	
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restrauntmenu from "./components/RestrauntMenu";
import Login from "./components/Login";

import Header from "./components/Header";
import Body from "./components/body";
import { Suspense } from "react";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";


const Grocery = lazy( () => import("./components/Grocery") );

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};


const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>,
                errorElement:<Error/>
            },
            {
                path:'/about',
                element:<About/>,
                errorElement:<Error/>
            },
            {
                path:'/contact',
                element:<Contact/>,
                errorElement:<Error/>
            },
            {
                path:"/restaurants/:resId",
                element:<Restrauntmenu/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
