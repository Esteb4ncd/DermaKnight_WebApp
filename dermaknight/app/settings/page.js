'use client';
import styles from "@/app/page.module.css";
import Ingredients from "@/app/ui/ingredientCard/ingredientCard";
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

            <main className="authContainer">
                <div className="settings-container">
                    <div className="settings-card">
                        <MenuItem icon="fas fa-clipboard-list" label="Privacy Policy" />
                        <MenuItem icon="fas fa-shield-alt" label="Terms of Services" />
                        <MenuItem icon="fas fa-info-circle" label="About Us" />
                    </div>
                    <div className="settings-card">
                        <MenuItem icon="fas fa-heart" label="Rate Us" />
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
                <span>{label}</span>
            </div>
            <i className="fas fa-chevron-right"></i>
        </div>
    );
}
