"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

// import 
import Header from "@app/ui/header/header.js";

return function Header() {
    const router = useRouter();

    return (
        // Add the Header here
        <div className="authContainer">
            <Header />
        </div>
    );
}