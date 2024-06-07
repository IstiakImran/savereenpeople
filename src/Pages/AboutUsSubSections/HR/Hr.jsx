
import React from 'react';
import "./Hr.css";

import five from '/Others/5.jpg'

const Hr = () => {

    return (
        <div className='about-us'>

                <div className='about-us-content'>
                    <h1> Human Resource</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={five} alt="" />
                            <p>
                            মোহাম্মদ খালেদ
                            </p>
                        </div>

                    </div>
                </div>

            </div>
    );
};

export default Hr;