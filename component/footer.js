import Link from "next/link";
import React from "react";
import styles from "../styles/topbar.module.css";

export default function footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <span> © Created by&nbsp; </span>
        <Link href="https://github.com/pwn0x80"> Aditya</Link>
      </div>
    </footer>
  );
}
