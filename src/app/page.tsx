'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./contexts/ThemeContext";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Theme Selector */}
        <div className={styles.themeSelectorContainer}>
          <ThemeSelector 
            currentTheme={theme} 
            onThemeChange={setTheme} 
          />
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Trevor Hayes | Business Data Analyst</h1>
          <p className={styles.subtitle}>
            Welcome to my portfolio! I specialize in transforming data into actionable insights using PowerBI and modern analytics tools.
          </p>
        </section>

        {/* Projects Section */}
        <section className={styles.projects}>
          <h2 className={styles.sectionTitle}>PowerBI Projects</h2>
          <div className={styles.projectGrid}>
            {/* Sample Project Card 1 */}
            <div className={styles.projectCard}>
              <Link href="/projects/site-scorecard" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Image
                  src="/Scorecard%20Example%20(1).png"
                  alt="Site Scorecard PowerBI Dashboard"
                  width={400}
                  height={225}
                  className={styles.projectImage}
                />
                <div className={styles.projectContent}>
                  <h3>Shipping Site Scorecard</h3>
                  <p>
                    An interactive dashboard visualizing KPIs, trends, and site performance. Built with PowerBI for near real-time business insights.
                  </p>
                </div>
              </Link>
            </div>
            {/* Sample Project Card 2 (Video) */}
            <div className={styles.projectCard}>
              <video className={styles.projectImage} width="400" height="225" controls poster="/sample-powerbi-dashboard.png">
                <source src="/sample-powerbi-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.projectContent}>
                <h3>Customer Segmentation Analysis</h3>
                <p>
                  A PowerBI report demonstrating customer segmentation and behavior analysis, featuring dynamic filtering and drill-downs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About/Contact Section */}
        <section className={styles.about}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p>
            I am passionate about leveraging data to drive business decisions. With expertise in PowerBI, SQL, and data visualization, I help organizations unlock the full potential of their data.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:Hayes.Trevor33@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://www.linkedin.com/in/trevorhayes3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
