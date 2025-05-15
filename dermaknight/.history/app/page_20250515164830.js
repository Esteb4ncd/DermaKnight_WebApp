"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

// import the header component
import Header from "@app/ui/header/header";

return function Header() {
    const router = useRouter();

    return (
        <div className="authContainer">
            <Header />
        </div>
    );
}