'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Make sure this is here
import '../globals.css';

export default function SignupPage() {
  const router = useRouter(); // ✅ this must be inside the component

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User signed up:', form);

    // Redirect to homepage
    router.push('/');
  };


    // Optional: save form to localStorage or do something with it
    // localStorage.setItem('user', JSON.stringify(form));

    // Redirect to home
    router.push('/');
    };

    return (
        <div className="auth-container">
        <img src="x" alt="DermaKnight mascot" className="x" />
        <h1 className="auth-subtitle">Create your Account</h1>

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

            <button type="submit" className="auth-btn primary">Sign Up</button>
            <button
            type="button"
            className="auth-btn secondary"
            onClick={() => window.location.href = '/login'}
            >
            Log in
            </button>
        </form>
        </div>
    );
    