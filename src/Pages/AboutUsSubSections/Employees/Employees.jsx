import React from 'react';
import "./Employees.css";


import sixteen from '/Others/16.png'

const Employees = () => {
    return (
        <div className='about-us'>
            <div className='about-us-content'>
                <h1>Employees</h1>
                <div className='about-us-landholders'>
                    
                    <div className='about-us-grid'>
                        <img src={sixteen} alt="" />
                        <p>
                            মোহাম্মদ ইউনুস হাসান
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Employees;