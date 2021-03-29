/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import styles from './app.module.css';

const Header = () => (
  <div className={styles.header}>
    <Link href="/">
      <div className={styles.logo} />
    </Link>
    <div className={(styles.upload, styles.container)}>
      <div className={styles.section}>
        <Link href="/upload">
          <div className={styles.upload} />
        </Link>
        <img
          className={styles.personal}
          src="https://i.imgur.com/831YZBO.png"
        />
      </div>
    </div>
  </div>
);

export default Header;
