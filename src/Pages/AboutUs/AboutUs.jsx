import React from 'react';
import "./AboutUs.css";
import aboutUs from "/aboutUs.jpg";
import mofazzal from '/Directors/Mofazzal.png'
import ikbal from '/Directors/Ikbal.png'
import salimullah from '/Directors/Salimullah.png'
import akhtar from '/Directors/Akhtar.png'
import five from '/Others/5.jpg'
import six from '/Others/6.jpg'
import seven from '/Others/7.jpg'
import eight from '/Others/8.jpg'
import nine from '/Others/9.jpg'
import ten from '/Others/10.jpg'
import eleven from '/Others/11.jpg'
import twelve from '/Others/12.jpg'
import thirteen from '/Others/13.jpg'
import fourteen from '/Others/14.jpg'
import fifteen from '/Others/15.jpg'
import sixteen from '/Others/16.png'
import seventeen from '/Others/17.png'
import eighteen from '/Others/18.png'




const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='about-us-content'>
                <h1>Directors</h1>
                <div className='about-us-directors'>
                    <div className='about-us-grid'>
                        <img src={mofazzal} alt="" />
                        <p>
                            Mofazzal Hossain
                        </p>
                    </div>
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
            <div className='about-us-content'>

                <h1>Share Holders</h1>
                <div className='about-us-shareholders'>
                    <div className='about-us-grid'>
                        <img src={five} alt="" />
                        <p>
                            মোহাম্মদ খালেদ
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={nine} alt="" />
                        <p>
                            মোহাম্মদ রফিকুল ইসলাম
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={twelve} alt="" />
                        <p>
                            হারুনুর রশিদ
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={ten} alt="" />
                        <p>
                            হাফিজুর রহমান
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={eight} alt="" />
                        <p>
                            সুলতান
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={eleven} alt="" />
                        <p>
                            মোহাম্মদ আলমাস
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={thirteen} alt="" />
                        <p>
                            অসীম কুমার বিশ্বাস
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={fourteen} alt="" />
                        <p>
                            মোঃ নুরুন্নবী সামদানী
                        </p>
                    </div>

                </div>
            </div>

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
            <div className='about-us-content'>
                <h1>Employees</h1>
                <div className='about-us-landholders'>
                    <div className='about-us-grid'>
                        <img src={six} alt="" />
                        <p>
                            মোহাম্মদ মাফিকুল ইসলাম
                        </p>
                    </div>
                    <div className='about-us-grid'>
                        <img src={sixteen} alt="" />
                        <p>
                            মোহাম্মদ ইউনুস হাসান
                        </p>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default AboutUs;