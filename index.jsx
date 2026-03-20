import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import logo from "./images/logo.png";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import RestaurantCard from "./components/RestaurantCard.jsx";
import "./style.css";
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ],
        errorElement: <Error/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);