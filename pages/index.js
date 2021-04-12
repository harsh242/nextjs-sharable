import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useMemo, useState, useEffect } from "react";

export default function Home({}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>share.cryptocodeschool.in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Redirecting </h1>
      </main>
    </div>
  );
}
