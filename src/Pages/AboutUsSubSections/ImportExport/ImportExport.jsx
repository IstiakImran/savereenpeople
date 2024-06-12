
import React from 'react';
import "./ImportExport.css";
import PersonPlaceholder from '/PersonPlaceholder.png';
import eight from '/Others/8.jpg'

const ImportExport = () => {

    return (
        <div className='about-us'>

            <div className='about-us-content'>
                <h1>Import Export</h1>

                <div className='about-us-content'>
                    <h1> Department Head</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={PersonPlaceholder} alt="" />
                            <p>
                                মোঃ সুলতান আহমেদ
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default ImportExport;