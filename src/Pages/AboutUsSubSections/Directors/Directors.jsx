import React from 'react';
import "./Directors.css";

import mofazzal from '/Directors/Mofazzal.png'
import ikbal from '/Directors/Ikbal.png'
import salimullah from '/Directors/Salimullah.png'
import akhtar from '/Directors/Akhtar.png'
import twenty from '/Others/20.jpg'





const Directors = () => {
    return (
        <div className='about-us'>
            <div className='about-us-content'>
                <h1>Head of Foreign Affairs</h1>
                <div className='about-us-directors'>
                    <div className='about-us-grid'>
                        <img src={twenty} alt="" />
                        <p>
                            Abdul Kader Khan (Babu)
                        </p>
                        <p>
                            <small style={{ fontSize: "14px", fontWeight: "400", margin: "0" }}>Bangladesh Association International recruiting agencies(BAIRA)
                                <br />
                                Name of Agency:Sunway Overseas.
                                <br />
                                Recruiting Licence: 2323</small>
                        </p>
                    </div>

                </div>
            </div>

            <div className='about-us-content'>
                <h1>Chairperson</h1>
                <div className='about-us-directors'>
                    <div className='about-us-grid'>
                        <img src={mofazzal} alt="" />
                        <p>
                            Mofazzal Hossain
                        </p>
                    </div>

                </div>
            </div>
            <div className='about-us-content'>
                <h1>Directors</h1>
                <div className='about-us-directors'>

                    <div className='about-us-grid'>
                        <img src={akhtar} alt="" />
                        <p>
                            Akhtar Rizwan
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={ikbal} alt="" />
                        <p>
                            MD. Ikbal Hussain
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={salimullah} alt="" />
                        <p>
                            Mohammed Salimullah
                        </p>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Directors;