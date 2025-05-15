'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css';
import Image from 'next/image';

export default function SignupPage() {
const router = useRouter();

const [form, setForm] = useState({ name: '', email: '', password: '' });

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User signed up:', form);


// input home page later
    router.push('/');
};

return (
    <div className="auth-container">
    
    <img src="/images/logoname.png" alt="DermaKnight mascot" className="/" />

    <h1 className="auth-title body-bold">Create your Account</h1>

    <form onSubmit={handleSubmit} className="auth-form">
        <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        />
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
        <div className="auth-btns">
        <button type="submit" className="auth-btn primary">Sign Up!</button>
        <button type="button" className="auth-btn secondary" onClick={() => router.push('/login')}>Log in</button>
        </div>
    </form>
    </div>
);
}


