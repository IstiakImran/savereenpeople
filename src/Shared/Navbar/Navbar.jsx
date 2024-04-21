import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const logo = '/logo.png';

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>
        <Link className="home-link" href="index.html">
          <img className='logo' src={logo} alt="" />
        </Link>
        <Link to="/">হোম</Link>
        <Link to="/aboutus"> আমাদের সম্পর্কে</Link>
        <Link to="/about">আমাদের লক্ষ</Link>
        <Link to="/ourprojects">আমাদের প্রকল্প সমূহ</Link>
        {/* <Link href="blog.html">Blog</Link> */}
        <Link href="login.html">লগ ইন</Link>
      </div>
    </nav>

  );
};

export default Navbar;