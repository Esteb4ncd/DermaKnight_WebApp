"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

import ToggleDropdown from '@app/ui/toggleDropdown/toggleDropdown.js';

export default function Header() {
    const router = useRouter();

    return (
        // Add the Header here
        <div className="authContainer headerContainer">
            <header>
                <h1>Header</h1>
            </header>

            <div className="">
                
                {/* Toggled Section */}
                <section  className="padding-md">
                    <ToggleDropdown />
                </section>

            </div>
        </div>
    );
}
