'use client';

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import styles from '../styles/Dashboard.module.scss';
import {ClipLoader} from "react-spinners";

function Dashboard() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const phone = localStorage.getItem('phone');
        const password = localStorage.getItem('password');

        if (!email || !phone || !password) {
            router.push('/auth');
        } else {
            setIsAuthorized(true);
        }
    }, [router]);

    if (isAuthorized === null) {
        return (
            <div
                className={styles.spinner}
            >
                <ClipLoader
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.dashboard_content}>
                Welcome to the dashboard!
            </div>
        </div>
    );
}

export default Dashboard;
