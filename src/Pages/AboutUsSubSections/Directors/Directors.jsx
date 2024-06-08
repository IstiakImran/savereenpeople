import React from 'react';
import "./Directors.css";

import mofazzal from '/Directors/Mofazzal.png'
import ikbal from '/Directors/Ikbal.png'
import salimullah from '/Directors/Salimullah.png'
import akhtar from '/Directors/Akhtar.png'
import rowson from '/Directors/Rowson.jpg'
import ashraful from '/Directors/Ashraful.jpg'
import PersonPlaceholder from '/PersonPlaceholder.png';

const Directors = () => {
    return (
        <div className='about-us'>

            <div className='about-us-content'>
                <h1>Board of Directors</h1>
                <div className='about-us-directors'>
                    <div className='about-us-grid'>
                        <img src={PersonPlaceholder} alt="" />
                        <p>
                            M M Hossain
                        </p>
                        <p>
                            <small>
                                Chairperson
                            </small>
                        </p>
                    </div>

                    <div className='about-us-grid'>
                        <img src={ashraful} alt="" />
                        <p>
                            MD. Ashraful Islam
                        </p>
                        <p>
                            <small>
                                Managing Director
                            </small>
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={salimullah} alt="" />
                        <p>
                            Mohammed Salimullah
                        </p>
                        <p>
                            <small>
                                Finance Director
                            </small>
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={ikbal} alt="" />
                        <p>
                            MD. Ikbal Hussain
                        </p>
                    </div>




                </div>
            </div>

        </div>
    );
};

export default Directors;