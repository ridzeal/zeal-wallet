"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <button className={styles.closeSidebarButton} onClick={toggleSidebar}>
          <X />
        </button>
        <nav className={styles.nav}>
          <Link href="/app" className={styles.navItem}>Dashboard</Link>
          <Link href="/app/settings" className={styles.navItem}>Settings</Link>
        </nav>
        <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            <Menu />
          </button>
          <h1>Dashboard</h1>
        </header>

        <section className={styles.balanceSection}>
          <h2>Current Balance</h2>
          <p className={styles.balanceAmount}>$10,000.00</p>
        </section>

        <section className={styles.billsSection}>
          <h2>Incoming Bills</h2>
          <ul className={styles.billsList}>
            <li>Rent - $1,500 (Due in 5 days)</li>
            <li>Electricity - $80 (Due in 12 days)</li>
            <li>Internet - $60 (Due in 15 days)</li>
          </ul>
        </section>

        <section className={styles.walletsSection}>
          <h2>Your Wallets</h2>
          <ul className={styles.walletsList}>
            <li>Cash - $500</li>
            <li>Bank Account - $8,500</li>
            <li>Savings Account - $1,000</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;