'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';

// Header + Sidebar + FontAwesome
import Sidebar from "@/app/ui/Sidebar/Sidebar.js";
import Header from "@/app/ui/header/header.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function SettingsMenu() {
    const router = useRouter();

    return (
        <div>
            <header>
                <Header />
            </header>

            <main>
                <div className="settings-container">
                    <div className="settings-card">
                        <a href="/privacyPolicy"><MenuItem icon="fas fa-clipboard-list" label="Privacy Policy" /></a>
                        <a href="/termsOfService"><MenuItem icon="fas fa-shield-alt" label="Terms of Service"  /></a>
                        <a  href="/aboutUs"><MenuItem icon="fas fa-info-circle" label="About Us" /></a>
                    </div>
                    <div className="settings-card">
                        <a  href="https://ca.trustpilot.com/"><MenuItem icon="fas fa-heart" label="Rate Us" /></a>
                    </div>
                </div>
            </main>
        </div>
    );
}

function MenuItem({ icon, label }) {
    return (
        <div className="menu-item">
            <div className="left">
                <i className={icon}></i>
                <span style={{ "font": "Lexend", fontWeight: "500", color: "#444752" }}>{label}</span>
            </div>
            <i className="fas fa-chevron-right"></i>
        </div>
    );
}

