
import React from 'react';
import "./Administration.css";

import salimullah from '/Directors/Salimullah.png'

const Administration = () => {

    return (
        <div className='about-us'>

            <div className='about-us-content'>
                <h1>Administration</h1>

                <div className='about-us-content'>
                    <h1> Head of Administration</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={salimullah} alt="" />
                            <p>
                            Mohammed Salimullah
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Administration;