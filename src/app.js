import React, { lazy , Suspense, useEffect, useState} from "react";	
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



const Grocery = lazy( () => import("./components/Grocery") );

const AppLayout = () => {

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow p-4 md:p-8">
                <Outlet />
            </main>
            <footer className="bg-blue-600 text-white text-center py-4">
                <p>&copy; 2024 BiteBuddy. All rights reserved.</p>
            </footer>
        </div>
    );
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
                element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
