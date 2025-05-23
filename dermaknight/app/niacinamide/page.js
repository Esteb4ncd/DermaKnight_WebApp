"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

// import styles from "./page.module.css";
import Ingredients from '@app/ui/ingredientCard/ingredientCard.js';
import ToggleDropdown from '@app/ui/toggleDropdown/toggleDropdown.js';


// KEEP THESE LINES FOR THE HEADER TO WORK
// import the header component
import Sidebar from "@app/ui/Sidebar/Sidebar.js";
import Header from "@app/ui/header/header.js";
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
        <div>
            <header>
                <Header />
            </header>
        <div className="authContainer">

                <h2>Niacinamide</h2>
            <main>
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
                        <li>A form of Vitamin B3 used in skincare.</li>
                        <li>
                            Water-soluble and works wwell for most skin types.
                        </li>
                        <li>Known for being gentle yet effective.</li>
                    </ul>
                    <br></br>
                    <p style={{ "text-align": "left", "font-weight": "bold" }}>
                        Why are They Used:
                    </p>
                    <ul style={{ "text-align": "left" }}>
                        <li>
                            Strengthens the skin barrier to retain moisture.
                        </li>
                        <li>Helps reduce redness and inflammation.</li>
                        <li>
                            Regulates oil production, making it great for oily
                            or acne-prone skin.
                        </li>
                        <li>Minimizes the appearance of pores over time.</li>
                        <li>Fades dark spots and improves uneven skin tone.</li>
                        <li>
                            Provides antioxidant protection against
                            environmental stress.
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
                    <img src='/ingredients/niacinamide.png'></img>
                    <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0", }}/>
                </section>

                {/* Not Recommended Section */}
                <section className="authContainer padding-sm">
                    <h3 style={{ "text-align": "left" }}>Do Not Combine With</h3>
                    <br></br>

                    {["Vitamin C"].map((key) => {
                        const item = ingredients.find((i) =>
                            i.name.startsWith(key)
                        );
                        return (
                            <Ingredients
                                key={key}
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                onClick={() =>
                                    router.push(
                                        `/${key
                                            .toLowerCase()
                                            .replace(/\s/g, "")}`
                                    )
                                }
                            />
                        );
                    })}
                </section>

                {/* Recommended Section */}
                <section className="padding-md">
                    <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }}/>
                    <h3 style={{ textAlign: "left" }}>Recommended Ingredients</h3>
                    <br></br>

                    {["Ceramides"].map((key) => {
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
