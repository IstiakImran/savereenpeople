
import React from 'react';
import "./GMS.css";

import twentyeight from '/Others/28.jpg'
import twentynine from '/Others/29.jpg'
import six from '/Others/6.jpg'


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
                        <div className='about-us-grid'>
                            <img src={twentynine} alt="" />
                            <p>
                            মোঃ সহিদুল ইসলাম 
                            </p>
                        </div>



                    </div>
                </div>
                <div className='about-us-content'>
                    <h1>খুলনা</h1>
                    <div className='about-us-directors'>
                    <div className='about-us-grid'>
                        <img src={six} alt="" />
                        <p>
                            মোহাম্মদ মাফিকুল ইসলাম
                        </p>
                    </div>

                    </div>
                </div>
                <div className='about-us-content'>
                    <h1>ময়মনসিংহ</h1>
                    <div className='about-us-directors'>
                    <div className='about-us-grid'>
                            <img src={twentyeight} alt="" />
                            <p>
                                মোহাম্মদ মকবুল হোসেন
                            </p>
                        </div>
                        <div className='about-us-grid'>
                            <img src={twentynine} alt="" />
                            <p>
                            মোঃ সহিদুল ইসলাম 
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default GMs;