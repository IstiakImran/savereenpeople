import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Main.css'
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='main'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
   
        </div>
    );
};

export default Main;