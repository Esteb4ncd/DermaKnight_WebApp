'use client';
import React, { useState } from 'react';


export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
      <>
        {/* Toggle Button */}
        <button className='menu-btn auth-container' onClick={() => setOpen(true)}>
          <i className="fas fa-bars"></i>
        </button>

        {/* Overlay Sidebar */}
        <div className={`overlay ${open ? 'open' : ''}`}>
          <div className="sidebar">
            <div className="header-row">
            <button className="close-btn" onClick={() => setOpen(false)}>
              <i className="fas fa-times"></i>
            </button>

              <img src="/images/dermaKnightLogoAndName.svg" alt="logo" className="logo brand logo-row" />
            </div>
            {/* <div className="logo-row">
            </div> */}


            <nav className="nav-links">
              <a href="homePage">Home</a>
              <a href="homePage">Saved</a>
              <a href="profile">Profile</a>
              <a href="aboutUs">About Us</a>

            </nav>

            <a href="quizStart"><button className="quiz-btn">Skin Quiz</button></a>
          </div>
        </div>
      </>
  );
}