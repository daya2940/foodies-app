import Link from 'next/link'
import React from 'react'
import styles from './main-header.module.css';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="#d97706" strokeWidth="2"/>
          <path d="M20 10 C 15 10 12 15 12 20 C 12 28 20 35 20 35 C 20 35 28 28 28 20 C 28 15 25 10 20 10 Z" fill="#d97706" opacity="0.2"/>
          <circle cx="20" cy="20" r="4" fill="#d97706"/>
          <path d="M 14 20 Q 20 15 26 20" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M 14 24 Q 20 28 26 24" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
        Foodies App
      </Link>
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/meals" className={styles.navLink}>Browse Meals</Link></li>
          <li><Link href="/community" className={styles.navLink}>Foodies Community</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader