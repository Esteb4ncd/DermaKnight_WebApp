"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

import styles from '@/app/ui/header/header.module.css';

// Dopdown import
import ToggleDropdown from '@/app/ui/toggleDropdown/toggleDropdown.js';

export default function Header() {
    const router = useRouter();

    return (
        <div className="authContainer">
            <header className="header">
                <div className="header-left">
                    <i className="fas fa-bars"></i>
                    <img src="/logo_basic_1.png" alt="logo" className="logo" />
                    <span className="brand">DermaKnight</span>
                </div>
                <div className="header-right">
                    <i className="fas fa-search"></i>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-user-circle"></i>
                </div>
            </header>

            {/* <div className="">
                <section  className="padding-md">
                    <ToggleDropdown />
                </section>
            </div> */}
        </div>
    );
}
