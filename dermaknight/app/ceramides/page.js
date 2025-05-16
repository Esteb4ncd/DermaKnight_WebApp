"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

// import styles from "./page.module.css";
import Ingredients from '@/app/ui/ingredientCard/ingredientCard.js';
import ToggleDropdown from '@/app/ui/toggleDropdown/toggleDropdown.js';


// KEEP THESE LINES FOR THE HEADER TO WORK
// import the header component
import Sidebar from "@/app/ui/Sidebar/Sidebar.js";
import Header from "@/app/ui/header/header.js";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
// ^^^^ KEEP THESE LINES FOR THE HEADER TO WORK ^^^^

const ingredients = [
    {
        key: 1,
        name: "Niacinamide:",
        image: "/ingredients/image_1.png",
        description: "Helps brighten skin and fade dark marks gently.",
    },
    {
        key: 2,
        name: "Vitamin C:",
        image: "/ingredients/image_2.png",
        description: "Antioxidant that evens out skin tone.",
    },
    {
        key: 3,
        name: "Ceramides:",
        image: "/ingredients/image_1.png",
        description: "Calms irritation and fades post-acne spots.",
    },
    {
        key: 4,
        name: "Retinol:",
        image: "/ingredients/image_2.png",
        description:
            "A vitamin A derivative that speeds up skin cell turnover.",
    },
    {
        key: 5,
        name: "Salicylic Acid:",
        image: "/ingredients/image_2.png",
        description: "Helps brighten skin and fade dark marks gently.",
    },
    {
        key: 6,
        name: "Azelaic Acid:",
        image: "/ingredients/image_1.png",
        description: "Calms irritation and fades post-acne spots.",
    },
];

export default function Home() {
    const router = useRouter();

    return (
        // Add the Header here
        <div>
            <header>
                <Header />
            </header>
        <div className="authContainer">

            <main>
                <h2>Ceramides</h2>
                {/* Chips Section */}
                <div className="chip-container">
                    <span className="chip chip-blue">Hydration</span>
                    <span className="chip chip-yellow">Eczema</span>
                    <span className="chip chip-green">Skin Barrier</span>
                </div>
                
                {/* Overview Section */}
                <section className="padding-md">
                    <h3 style={{ "text-align": "left" }}>Overview</h3>
                    <hr
                        style={{
                            border: "none",
                            borderTop: "1px solid black",
                            margin: "0.4rem 0",
                        }}
                    />
                    <p style={{ "text-align": "left", "font-weight": "bold" }}>
                        What it is:
                    </p>
                    <ul style={{ "text-align": "left" }}>
                        <li>
                            Natural fats found in your skin that help hold it together, keep moisture in.
                            </li>
                        <li>
                            They make up about half of the outermost layer of your skin.
                        </li>
                    </ul>
                    <br></br>
                    <p style={{ "text-align": "left", "font-weight": "bold" }}>
                        Why are They Used:
                    </p>
                    <ul style={{ "text-align": "left" }}>
                        <li>
                            Strengthen the skin barrier, protecting against environmental damage.
                        </li>
                        <li>
                            Useful for conditions like eczema, dry skin, and aging skin.
                        </li>
                        <li>
                            Supports healthy, plump, and smooth-looking skin.
                        </li>
                    </ul>
                </section>

                {/* Toggled Section */}
                <section  className="padding-md">
                    <ToggleDropdown />
                </section>

            {/* How It Works Section */}
                <section className="padding-sm">
                    <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0", }}/>
                    <h3 style={{ "text-align": "left", margin: "0.7rem 0 0.7rem 0" }}>How it Works</h3>
                    <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0", }}/>
                    <img src='/ingredients/ceramides.png'></img>
                    <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0", }}/>
                </section>

            {/* Recommended Section */}
                <section className="authContainer padding-md">
                    <h3>Recommended Ingredients</h3>
                    <br></br>

                    {["Retinol", "Niacinamide", "Vitamin C"].map((key) => {
                        const item = ingredients.find((i) => i.name.startsWith(key));
                        return (
                            <Ingredients
                            key={key}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            onClick={() => router.push(`/${key.toLowerCase().replace(/\s/g, '')}`)}
                            />
                            );
                        })}
                </section>
            </main>
        </div>
    </div>
    );
}
