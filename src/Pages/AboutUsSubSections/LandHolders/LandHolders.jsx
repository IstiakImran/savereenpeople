import React from 'react';
import "./LandHolders.css";

import seven from '/Others/7.jpg'
import fifteen from '/Others/15.jpg'
import seventeen from '/Others/17.png'
import eighteen from '/Others/18.png'

const LandHolders = () => {
    return (
        <div className='about-us'>

            <div className='about-us-content'>
                <h1>Land Holders</h1>
                <div className='about-us-landholders'>
                    <div className='about-us-grid'>
                        <img src={seven} alt="" />
                        <p>
                            সাবিকুন্নাহার বিথি
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={fifteen} alt="" />
                        <p>
                            মোহাম্মদ শাহ জালাল
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={seventeen} alt="" />
                        <p>
                            মোহাম্মদ রফিকুল ইসলাম
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={eighteen} alt="" />
                        <p>
                            মোছাম্মাদ সালমা আক্তার
                        </p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default LandHolders;