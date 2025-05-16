"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

// import the header component
import Header from "@/app/ui/header/header.js";
// KEEP THIS LINE 
import "@fortawesome/fontawesome-free/css/all.min.css"; 

export default function Page() {
    const router = useRouter();

    return (
        <div className="authContainer">
            <Header />
        </div>
    );
}