import React from 'react';
import "./ShareHolders.css";

import five from '/Others/5.jpg'
import eight from '/Others/8.jpg'
import nine from '/Others/9.jpg'
import ten from '/Others/10.jpg'
import eleven from '/Others/11.jpg'
import twelve from '/Others/12.jpg'
import thirteen from '/Others/13.jpg'
import fourteen from '/Others/14.jpg'
import sixteen from '/Others/16.png'





const ShareHolders = () => {
    return (
        <div className='about-us'>

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

export default ShareHolders;