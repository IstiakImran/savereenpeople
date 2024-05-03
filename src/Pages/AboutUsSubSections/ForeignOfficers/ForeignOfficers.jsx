
import React from 'react';
import "./ForeignOfficers.css";
import nineteen from '/Others/19.jpg'
import twentyone from '/Others/21.jpg'
import twentythree from '/Others/23.jpg'
import twentyfour from '/Others/24.jpg'
import twentyfive from '/Others/25.jpg'
import twentysix from '/Others/26.jpg'


const ForeignOfficers = () => {
    return (
        <div className='about-us'>

            <div className='about-us-content'>
                <h1>বিদেশে কর্মরত</h1>
                <div className='about-us-content'>
                    <h1>দুবাই</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={nineteen} alt="" />
                            <p>
                                মোহাম্মদ হাবিবুল্লাহ
                            </p>
                        </div>



                    </div>
                </div>
                <div className='about-us-content'>
                    <h1>কাতার</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={twentyfour} alt="" />
                            <p>
                                মোহাম্মদ নওশাদ
                            </p>
                        </div>



                    </div>
                </div>
                <div className='about-us-content'>
                    <h1>বুলগেরিয়া</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={twentysix} alt="" />
                            <p>
                                নাসিরুদ্দিন
                            </p>
                        </div>

                        <div className='about-us-grid'>
                            <img src={twentyfive} alt="" />
                            <p>
                                জারিফ
                            </p>
                        </div>
                        <div className='about-us-grid'>
                            <img src={twentyone} alt="" />
                            <p>
                                তাজুল ইসলাম
                            </p>
                        </div>


                    </div>
                </div>

                <div className='about-us-content'>
                    <h1>মিশর</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={twentythree} alt="" />
                            <p>
                                মোঃ আলোম
                            </p>
                        </div>



                    </div>
                </div>


            </div>




        </div>
    );
};

export default ForeignOfficers;