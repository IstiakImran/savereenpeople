
import React from 'react';
import "./GMS.css";

import twentyeight from '/Others/28.jpg'
import twentynine from '/Others/29.jpg'
import six from '/Others/6.jpg'
import thirtyone from '/Others/31.jpg'
import thirtytwo from '/Others/32.jpg'
import thirtythree from '/Others/33.jpg'
import thirtyfive from '/Others/35.jpg'
import thirtysix from '/Others/36.jpg'
import thirtyseven from '/Others/37.jpg'


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
                    <h1>রাজশাহী-১</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={thirtytwo} alt="" />
                            <p>
                            মোহাম্মদ সিরাজুল ইসলাম
                            </p>
                        </div>

                    </div>
                </div>

                <div className='about-us-content'>
                    <h1>রাজশাহী-২</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={thirtysix} alt="" />
                            <p>
                            মোঃ সোহেল রানা
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

                <div className='about-us-content'>
                    <h1>বগুড়া</h1>
                    <div className='about-us-directors'>
                    <div className='about-us-grid'>
                            <img src={thirtyone} alt="" />
                            <p>
                            মোহাম্মদ রবিউল ইসলাম 
                            </p>
                        </div>
                    </div>
                </div>

                <div className='about-us-content'>
                    <h1>ফরিয়াদপুর</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={thirtyfive} alt="" />
                            <p>
                            মোহাম্মদ আবুল কালাম আজাদ
                            </p>
                        </div>

                    </div>
                </div>

                <div className='about-us-content'>
                    <h1>রংপুর</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={thirtythree} alt="" />
                            <p>
                            মোহাম্মদ বাইজিদ আলম 
                            </p>
                        </div>

                    </div>
                </div>

                <div className='about-us-content'>
                    <h1>চট্টগ্রাম</h1>
                    <div className='about-us-directors'>
                        <div className='about-us-grid'>
                            <img src={thirtyseven} alt="" />
                            <p>
                            এ.বি.এম. নাদিম আলম 
                            </p>
                        </div>

                    </div>
                </div>
               

            </div>

        </div>
    );
};

export default GMs;