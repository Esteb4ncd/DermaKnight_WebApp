"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';


// KEEP THESE LINES FOR THE HEADER TO WORK
// import the header component
import Sidebar from "@/app/ui/Sidebar/Sidebar.js";
import Header from "@/app/ui/header/header.js";

import "@fortawesome/fontawesome-free/css/all.min.css"; 
// ^^^^ KEEP THESE LINES FOR THE HEADER TO WORK ^^^^


export default function Page() {
    const router = useRouter();

    return (
        <>
            <header>
                <Header />
            </header>
            {/* <div className="authContainer">
                <Sidebar />
            </div> */}
        </>
    );
}