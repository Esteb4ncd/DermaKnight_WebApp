'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css';
import Image from 'next/image';

export default function LoginPage() {
const router = useRouter();

const [form, setForm] = useState({ email: '', password: '' });

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User logged in:', form);


// input home page later
    router.push('homePage');
};

return (
    <div className="auth-container">
    
    <img src="images/logo_name.png" alt="DermaKnight mascot" className="auth-logo" />

    <h1 className="auth-title body-bold">Log into Your Account</h1>

    <form onSubmit={handleSubmit} className="auth-form">
        <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        />
        <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        />
        <button type="button" className="auth-forgot" onClick={() => alert('Oops! I don\'t know your password either!')}>
            Forgot your password?
        </button>
        <div className="auth-btns">
        <button type="submit" className="auth-btn primary">Log in</button>
        <button type="button" className="auth-btn secondary" onClick={() => router.push('/signup')}>Create an account</button>
        <div className="auth-links">

        </div>
        </div>
    </form>
    </div>
);
}
