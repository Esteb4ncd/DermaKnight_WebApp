"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

import ToggleDropdown from '@/app/ui/toggleDropdown/toggleDropdown.js';

export default function Header() {
    const router = useRouter();

    return (
        // Add the Header here
        <div className="authContainer headerContainer">
            <header className="header">
            <div className="header-left">
                <i className="fas fa-bars"></i>
                <img src="/logo.png" alt="logo" className="logo" />
                <span className="brand">DermaKnight</span>
            </div>
            <div className="header-right">
                <i className="fas fa-search"></i>
                <i className="far fa-heart"></i>
                <i className="fas fa-user-circle"></i>
            </div>
<       /header>

            <div className="">
                
                {/* Toggled Section */}
                <section  className="padding-md">
                    <ToggleDropdown />
                </section>

            </div>
        </div>
    );
}
