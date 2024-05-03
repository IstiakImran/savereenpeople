
import React from 'react';
import "./GMS.css";
import twentytwo from '/Others/22.jpg'


const GMs = () => {
    return (
        <div className='about-us'>

            <div className='about-us-content'>
                <h1>GM</h1>
                <div className='about-us-content'>
                    <h1>খুলনা</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={twentytwo} alt="" />
                            <p>
                                মোহাম্মদ সাহাজি কামাল টিপু
                            </p>
                        </div>



                    </div>
                </div>

            </div>

        </div>
    );
};

export default GMs;