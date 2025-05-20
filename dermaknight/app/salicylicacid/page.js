// KEEP THESE LINES FOR THE HEADER TO WORK
// import the header component
import Sidebar from "@app/ui/Sidebar/Sidebar.js";
import Header from "@app/ui/header/header.js";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
// ^^^^ KEEP THESE LINES FOR THE HEADER TO WORK ^^^^


export default function NiacinamidePage() {
    return (
        <div className="authContainer">
            <header>
                <Header />
            </header>
                <div style={{ padding: "2rem" }}>
                    <h1>Salicylic Acid</h1>
                    <p>Helps brighten skin and fade dark marks gently.</p>
                </div>
        </div>
    );
}