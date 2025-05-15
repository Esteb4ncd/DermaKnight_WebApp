"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';

export default function Header() {
    const router = useRouter();

    return (
        // Add the Header here
        <div className="authContainer">
            <header>
                <h1>Header</h1>
            </header>

            <div>
                
                {/* Toggled Section */}
                <section  className="padding-md">
                    <ToggleDropdown />
                </section>

            </div>
        </div>
    );
}
