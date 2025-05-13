"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';


// import styles from "./page.module.css";
import Ingredients from "../ui/ingredientCard/ingredientCard";
import ToggleDropdown from "../ui/toggleDropdown/toggleDropdown";

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
        <div className="authContainer">
            <header>
                <h1>Retinol</h1>
            </header>

            <main>
                {/* Chips Section */}
                <div className="chip-container">
                    <span className="chip chip-blue">Hydration</span>
                    {/* <span className="chip chip-yellow">Eczema</span> */}
                    <span className="chip chip-green">Skin Barrier</span>
                </div>
                
                {/* Overview Section */}
                <section className="padding-md">
                    <h2 style={{ "text-align": "left" }}>Overview</h2>
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
                            A vitamin A derivative that speeds up skin cell turnover and stimulates the production of new skin cells.   
                        </li>
                    </ul>
                    <br></br>
                    <p style={{ "text-align": "left", "font-weight": "bold" }}>
                        Why are They Used:
                    </p>
                    <ul style={{ "text-align": "left" }}>
                        <li>
                            Speeds up the skin's natural exfoliation process by increasing the rate at which skin cells shed and regenerate.
                        </li>
                        <li>
                            Increases collagen production
                        </li>
                        <li>
                            It helps your skin absorb other product better
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
                    <h2 style={{ "text-align": "left", margin: "0.7rem 0 0.7rem 0" }}>How it Works</h2>
                    <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0", }}/>
                    <img src='/ingredients/niacinamide.png'></img>
                    <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0", }}/>
                </section>

                {/* Not Recommended Section */}
                <section className="authContainer padding-sm">
                    <h2 style={{ "text-align": "left" }}>Do Not Combine With</h2>
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
                <section className="authContainer padding-md">
                    <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }}/>
                    <h2>Recommended Ingredients</h2>
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
    );
}
