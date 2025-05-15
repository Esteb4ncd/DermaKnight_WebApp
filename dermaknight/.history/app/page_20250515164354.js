"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';
import Header from "@app/ui/header/header.js";

return function Header() {
    const router = useRouter();

    return (
        // Add the Header here
        <div className="authContainer">
            <Header />

            <main>
                {/* Toggled Section */}
                <section  className="padding-md">
                    <ToggleDropdown />
                </section>
            </main>
        </div>
    );
}