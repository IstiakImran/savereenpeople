
import React from 'react';
import "./GMS.css";
import twentytwo from '/Others/22.jpg'
import twentyeight from '/Others/28.jpg'


const GMs = () => {
    return (
        <div className='about-us'>

            <div className='about-us-content'>
                <h1>AGM</h1>
                <div className='about-us-content'>
                    <h1>ঢাকা</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={twentyeight} alt="" />
                            <p>
                                মোহাম্মদ মকবুল হোসেন
                            </p>
                        </div>



                    </div>
                </div>
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