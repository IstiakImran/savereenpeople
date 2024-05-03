import React from 'react';
import "./AboutUs.css";
import { Link } from 'react-router-dom';




const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='about-us-content'>

                <div className='about-us-directors'>
                    <Link to="/aboutus/directors">
                        <div className='about-us-grid'>
                            <p>
                                Board Of Directors
                            </p>
                        </div>
                    </Link>
                    <Link to="/aboutus/foreignofficers">
                        <div className='about-us-grid'>

                            <p>
                                Foreign Officers
                            </p>
                        </div>
                    </Link>
                    <Link to="/aboutus/shareholders">
                        <div className='about-us-grid'>

                            <p>
                                Share Holders
                            </p>
                        </div>
                    </Link>
                    <Link to="/aboutus/landholders">
                        <div className='about-us-grid'>

                            <p>
                                Land Holders
                            </p>
                        </div>
                    </Link>
                    <Link to="/aboutus/employees">
                        <div className='about-us-grid'>

                            <p>
                                Employees
                            </p>
                        </div>
                    </Link>
                    <Link to="/aboutus/gms">
                        <div className='about-us-grid'>

                            <p>
                                GM
                            </p>
                        </div>
                    </Link>


                </div>
            </div>

        </div>
    );
};

export default AboutUs;