import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <div className={styles.item}>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <div className={styles.item}>Blog</div>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <div className={styles.item}>Users</div>
          </Link>
        </li>
      </ul>
    </header>
  );
}
