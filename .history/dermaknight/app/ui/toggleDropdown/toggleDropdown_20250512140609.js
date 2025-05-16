'use client';
import React, { useState } from 'react';
import './toggleDropdown.css'; // Make sure to create this file or use module.css

export default function ToggleDropdown() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

return (
    <div className="dropdown-container">
        <button className="toggle-button" onClick={handleToggle}>
            <span>{open ? 'Read less' : 'Read more'}</span>
            <span className={`arrow ${open ? 'rotated' : ''}`}>{open ? '▼' : '▶'}</span>
        </button>

    {open && (
        <div className="dropdown-content">
            <h3>Additional Information</h3>
                <ul>
                    <li>It’s water-soluble and found in both food and topical skincare.</li>
                    <li>In the body, it plays a role in energy production and DNA repair.</li>
                </ul>

            <strong>It plays a role in:</strong>
            <ul>
                <li>Reducing inflammation</li>
                <li>Improving skin barrier function</li>
                <li>Regulating oil (sebum) production</li>
                <li>Reducing hyperpigmentation and redness</li>
            </ul>

            <strong>What it is:</strong>
            <ul>
                <li>A water-soluble form of Vitamin B3 (niacin)</li>
                <li>Found in foods like meat, eggs, green vegetables, and grains</li>
                <li>Used in skincare for its multi-functional benefits</li>
                <li>Suitable for most skin types, including sensitive and acne-prone</li>
            </ul>

            <strong>Why Niacinamide Is Used:</strong>
            <ul>
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
