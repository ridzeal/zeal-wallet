import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome to Zeal Wallet
        </h1>
        <p className={styles.description}>
          Take control of your finances with our smart budgeting and expense tracking app.
        </p>
        <div className={styles.ctaContainer}>
          <Link href="/login" className={`${styles.button} ${styles.primaryButton}`}>
            Get Started
            <ArrowRightIcon className={styles.icon} />
          </Link>
          <Link href="#features" className={`${styles.button} ${styles.secondaryButton}`}>
            Learn More
          </Link>
        </div>
      </div>

      <div id="features" className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Key Features</h2>
        <div className={styles.featureGrid}>
          {[
            { title: 'Expense Tracking', description: 'Easily log and categorize your expenses.' },
            { title: 'Budget Management', description: 'Set and manage budgets for different categories.' },
            { title: 'Financial Insights', description: 'Gain valuable insights into your spending habits.' },
          ].map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;