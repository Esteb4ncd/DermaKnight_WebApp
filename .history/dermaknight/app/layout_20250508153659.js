import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


.auth-btn.secondary {
  background: transparent;
  border: 1px solid #ccc;
  color: var(--color-text);
  outline: none;             /* Just in case */
}

.auth-btn.secondary:focus,
.auth-btn.secondary:focus-visible {
  outline: none !important;  /* Force it off */
  box-shadow: none !important;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DermaKnight",
  description: "Skincare made easy for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
