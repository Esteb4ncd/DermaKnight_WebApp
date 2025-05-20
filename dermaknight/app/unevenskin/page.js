// "use client";
// import React, { useState } from "react";
'use client'
// import Image from "next/image";
// import styles from "./page.module.css";
import Ingredients from "@app//ui/ingredientCard/ingredientCard";
import {useRouter} from 'next/navigation';

// import styles from "./page.module.css";
import Ingredients from "@/app/ui/ingredientCard/ingredientCard";
import ToggleDropdown from "@/app/ui/toggleDropdown/toggleDropdown";


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
        description: "A vitamin A derivative that speeds up skin cell turnover.",
    }, 
];


export default function Home() {
    const router = useRouter();


    return (
//             <div>
//                 <header>
//                     <Header />
//                 </header>
//             <div className="authContainer">
    <div className={'auth-container'}>
        <header>
            <h1>Uneven Skin Tone</h1>
        </header>

            <h2>Uneven Skin Tone</h2>
    <main>
        <section>
            <h3 style={{ "text-align": "left" }}>Overview</h3>
            <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
            <p style={{ "text-align": "left" }}>Uneven skin tone means parts of your face may look darker, redder, or more dull than others. This can show up as patches, redness, or shadowy areas and is common in all skin types.</p>
        </section>

        <section>
            <h3 style={{ "text-align": "left" }}>Causes</h3>
            <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
            <ul style={{ "text-align": "left"}}>
                <li>
                    Sun damage from not wearing sunscreen
                </li>
                <li>
                    Skin inflammation (from irritation or over-exfoliation)
                </li>
                <li>
                    Hormonal changes or stress
                </li>
                <li>
                    Past acne marks or dark spots
                </li>
                <li>
                Natural differences in melanin production
                </li>
            </ul>
        </section>



//             <section >
//                 <h3 style={{ "text-align": "left" }}>Recommended Ingredients</h3>
            <section className={'auth-container'}>
                <h2 style={{ "text-align": "left" }}>Recommended Ingredients</h2>
                <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />

                {["Niacinamide", "Vitamin C", "Ceramides"].map((key) => {
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
)
}