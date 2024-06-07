import React from 'react';
import "./AppointedDirectors.css";


import akhtar from '/Directors/Akhtar.png'
import rowson from '/Directors/Rowson.jpg'

const AppointedDirectors = () => {
    return (
        <div className='about-us'>

            <div className='about-us-content'>
                <h1>Appointed Director</h1>
                <div className='about-us-directors'>
                <div className='about-us-grid'>
                        <img src={akhtar} alt="" />
                        <p>
                            Akhtar Rizwan
                        </p>
                    </div>
                <div className='about-us-grid'>
                        <img src={rowson} alt="" />
                        <p>
                            MD. Rowson Alom
                        </p>
                        <p>
                            <small style={{ fontSize: "14px", fontWeight: "400", margin: "0" }}>Former Officer in-charge (Retd.)
                                <br />
                                Sub-regional center,Jamalpur.
                                <br />
                                Bangladesh Open University.</small>
                        </p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AppointedDirectors;