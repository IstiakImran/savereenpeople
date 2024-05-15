
import React from 'react';
import "./ForeignOfficers.css";
import nineteen from '/Others/19.jpg'
import twenty from '/Others/20.jpg'
import twentyone from '/Others/21.jpg'
import twentythree from '/Others/23.jpg'
import twentyfour from '/Others/24.jpg'
import twentyfive from '/Others/25.jpg'
import twentysix from '/Others/26.jpg'
import thrity from '/Others/30.jpg'


const ForeignOfficers = () => {
    return (
        <div className='about-us'>

            <div className='about-us-content'>
                <h1>বিদেশে কর্মরত</h1>
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
                            <img src={twentyone} alt="" />
                            <p>
                                তাজুল ইসলাম
                            </p>
                            <p>
                                <small style={{ fontSize: "14px", fontWeight: "400", margin: "0" }}>কান্ট্রি ডিরেক্টর অফ বুলগেরিয়া</small>
                            </p>
                        </div>
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
                            <img src={thrity} alt="" />
                            <p>
                            মোহাম্মদ ইয়াসিন
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