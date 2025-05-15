"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';


// import styles from "./page.module.css";
import Ingredients from '@app/ui/ingredientCard/ingredientCard.js';
import ToggleDropdown from '@app/ui/toggleDropdown/toggleDropdown.js';

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
                <h1>Niacinamide</h1>
            </header>

            <main>
                
                
                {/* Toggled Section */}
                <section  className="padding-md">
                    <ToggleDropdown />
                </section>

            </main>
        </div>
    );
}
