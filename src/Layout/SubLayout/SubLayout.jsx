import React from 'react';
import { Outlet } from 'react-router-dom';

const SubLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default SubLayout;