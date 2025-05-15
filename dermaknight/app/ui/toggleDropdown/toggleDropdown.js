'use client';
import React, { useState } from 'react';
import './toggleDropdown.module.css'; // Make sure to create this file or use module.css

export default function ToggleDropdown() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

return (
    <div className="dropdown-container">
        <button className="toggle-button" onClick={handleToggle}>
            <span style={{ "font-weight": "bold" }}>{open ? 'Read Less' : 'Read More'}</span>
            <span className={`arrow ${open ? 'rotated' : ''}`}>{open ? '▼' : '▶'}</span>
        </button>

    {open && (
        <div className="dropdown-content">
            <br></br>
            <h3 style={{ "text-align": "left"}}>Additional Information</h3>
            <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
                <ul style={{ "text-align": "left"}}>
                    <li>It's water-soluble and found in both food and topical skincare.</li>
                    <li>In the body, it plays a role in energy production and DNA repair.</li>
                </ul>
        <br></br>


            <h4 style={{ "text-align": "left"}}>It plays a role in:</h4>
            <ul style={{ "text-align": "left"}}>
                <li>Reducing inflammation</li>
                <li>Improving skin barrier function</li>
                <li>Regulating oil (sebum) production</li>
                <li>Reducing hyperpigmentation and redness</li>
            </ul>
            <br></br>


            <h4 style={{ "text-align": "left"}}>What it is:</h4>
            <ul style={{ "text-align": "left"}}>
                <li>A water-soluble form of Vitamin B3 (niacin)</li>
                <li>Found in foods like meat, eggs, green vegetables, and grains</li>
                <li>Used in skincare for its multi-functional benefits</li>
                <li>Suitable for most skin types, including sensitive and acne-prone</li>
            </ul>
            <br></br>

            <h4 style={{ "text-align": "left"}}>Why it is Used:</h4>
            <ul style={{ "text-align": "left"}}>
                <li>Strengthens the skin barrier by boosting ceramide production</li>
                <li>Helps reduce inflammation, redness, and irritation</li>
                <li>Balances oil production, ideal for oily/acne-prone skin</li>
                <li>Minimizes the appearance of pores over time</li>
                <li>Fades dark spots and evens out skin tone</li>
            </ul>

        </div>
        )}
    </div>
);
}
