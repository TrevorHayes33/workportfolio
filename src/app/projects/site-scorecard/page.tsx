import Image from "next/image";
import styles from "../../page.module.css";

export default function SiteScorecard() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Shipping Site Scorecard</h1>
          <p className={styles.subtitle}>
            A comprehensive PowerBI dashboard for monitoring shipping site performance and KPIs.
          </p>
        </section>
        <section className={styles.projects}>
          <Image
            src="/Scorecard%20Example%20(1).png"
            alt="Site Scorecard PowerBI Dashboard"
            width={700}
            height={395}
            style={{ borderRadius: '12px', marginBottom: '32px', width: '100%', height: 'auto', maxWidth: '700px' }}
          />
          <div className={styles.projectContent}>
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <p>
              The Shipping Site Scorecard is an interactive dashboard designed to provide real-time visibility into key performance indicators (KPIs) for shipping operations. It enables users to:
            </p>
            <ul style={{ margin: '24px 0', paddingLeft: '24px', color: '#222B45', fontSize: '1.1rem' }}>
              <li>Monitor on-time delivery and pickup rates</li>
              <li>Track premium freight spend and cost deviations</li>
              <li>Analyze carrier choice and service level compliance</li>
              <li>Drill down by plant, SBU, and date range</li>
              <li>Identify trends and areas for operational improvement</li>
            </ul>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <ul style={{ margin: '24px 0', paddingLeft: '24px', color: '#222B45', fontSize: '1.1rem' }}>
              <li>Dynamic filtering by city, SBU, and date</li>
              <li>Visual KPIs with color-coded gauges and charts</li>
              <li>Clear breakdown of costs and compliance metrics</li>
              <li>Designed for business leaders and operations teams</li>
            </ul>
            <p style={{ marginTop: '32px' }}>
              <strong>Tools Used:</strong> PowerBI, DAX, SQL
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 