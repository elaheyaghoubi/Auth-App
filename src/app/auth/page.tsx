'use client';
import { useState, useEffect, FormEvent } from "react";
import styles from '../styles/Auth.module.scss';
import { useRouter } from "next/navigation";
import axios from 'axios';

function Auth() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
      localStorage.clear()
    }, []);

    const authHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !phone || !password) {
            setError("Please fill out all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{11}$/;
        const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

        if (!emailRegex.test(email)) {
            setError("Invalid email address");
            return;
        }

        if (!phoneRegex.test(phone)) {
            setError("Invalid phone number (must be 11 digits)");
            return;
        }

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters and contain an uppercase letter");
            return;
        }

        setError('');
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('password', password);
        router.push('/dashboard');

        axios.get('https://randomuser.me/api/?results=1&nat=us')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Login</h1>
                <form onSubmit={authHandler}>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        autoComplete="username"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                        className={styles.error}
                    >
                        {error}
                    </div>
                    <button className={styles.login_button}>Login</button>
                </form>
            </div>

            <div className={styles.login_image}>

            </div>
        </div>
    );
}

export default Auth;
