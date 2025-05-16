"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

// Styles import
import styles from '@/app/ui/header/header.module.css';

// Component imports
import sideBar from '@/app/ui/Sidebar/Sidebar.js';
import ToggleDropdown from '@/app/ui/toggleDropdown/toggleDropdown.js';
import Sidebar from "@/app/ui/Sidebar/Sidebar.js";

export default function Header() {
    const router = useRouter();

    return (
        <header className="header">
                <div className="header-left">
                    <div>
                        <Sidebar />
                    </div>
                    <img src="/images/dermaKnightLogoAndName.svg" alt="logo" className="logo" />
                </div>

                <div className="header-right">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-user-circle"></i>
                </div>
        </header>

    //         {/* <div className="">
    //             <section  className="padding-md">
    //                 <ToggleDropdown />
    //             </section>
    //         </div> */}

)
}
