import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './Layout/Main/Main';
import About from './Pages/About/About';
import AboutUs from './Pages/AboutUs/AboutUs';
import Projects from './Pages/Projects/Projects';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <App />,
                },
                {
                    path: "/about",
                    element: <About></About>
                },
                {
                    path: "/aboutus",
                    element: <AboutUs></AboutUs>
                },
                {
                    path: "/ourprojects",
                    element: <Projects></Projects>
                }
            ]
        }
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default Route;