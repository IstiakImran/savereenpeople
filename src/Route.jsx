import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './Layout/Main/Main';
import About from './Pages/About/About';
import AboutUs from './Pages/AboutUs/AboutUs';
import Projects from './Pages/Projects/Projects';
import Directors from './Pages/AboutUsSubSections/Directors/Directors';
import SubLayout from './Layout/SubLayout/SubLayout';
import Employees from './Pages/AboutUsSubSections/Employees/Employees';
import LandHolders from './Pages/AboutUsSubSections/LandHolders/LandHolders';
import ShareHolders from './Pages/AboutUsSubSections/ShareHolders/ShareHolders';
import GMs from './Pages/AboutUsSubSections/GMS/GMS';
import ForeignOfficers from './Pages/AboutUsSubSections/ForeignOfficers/ForeignOfficers';
import ImportExport from './Pages/AboutUsSubSections/ImportExport/ImportExport';
import Administration from './Pages/AboutUsSubSections/Administration/Administration';
import Hr from './Pages/AboutUsSubSections/HR/Hr';
import AppointedDirectors from './Pages/AboutUsSubSections/AppointedDirectors/AppointedDirectors';

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
                    element: <SubLayout></SubLayout>,
                    children: [
                        {
                            path: "/aboutus",
                            element: <AboutUs></AboutUs>
                        },
                        {
                            path: "/aboutus/directors",
                            element: <Directors></Directors>
                        },
                        {
                            path: "/aboutus/appointeddirectors",
                            element: <AppointedDirectors></AppointedDirectors>
                        },
                        {
                            path: "/aboutus/employees",
                            element: <Employees></Employees>
                        },
                        {
                            path: "/aboutus/landholders",
                            element: <LandHolders></LandHolders>
                        },
                        {
                            path: "/aboutus/shareholders",
                            element: <ShareHolders></ShareHolders>
                        },
                        {
                            path: "/aboutus/gms",
                            element: <GMs></GMs>
                        },
                        {
                            path: "/aboutus/foreignofficers",
                            element: <ForeignOfficers></ForeignOfficers>
                        },
                        {
                            path: "/aboutus/importexport",
                            element: <ImportExport></ImportExport>
                        },
                        {
                            path: "/aboutus/administration",
                            element: <Administration></Administration>
                        },
                        {
                            path: "/aboutus/hr",
                            element: <Hr></Hr>
                        },
                    ]
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