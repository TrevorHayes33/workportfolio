'use client';

import Link from "next/link";
import styles from "./Navigation.module.css";
import { useTheme } from "../contexts/ThemeContext";

export default function Navigation() {
  const { theme } = useTheme();

  return (
    <nav className={styles.navigation} data-theme={theme || 'cyberpunk'}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <h3>TH</h3>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects/site-scorecard" className={styles.navLink}>
              Site Scorecard
            </Link>
          </li>
          {/* Add more project links here as you create them */}
        </ul>
      </div>
    </nav>
  );
} 