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
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Ingredients</a>
              <a href="#">Skin Concerns</a>
            </nav>

            <button className="quiz-btn">Skin Quiz</button>
          </div>
        </div>
      </>
  );
}