'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css';

export default function SignupPage() {
const router = useRouter();

const [form, setForm] = useState({ name: '', email: '', password: '' });

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User signed up:', form);


