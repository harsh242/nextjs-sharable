import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = `https://cryptocodeschool.in/tezos/marketplace`;
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>share.cryptocodeschool.in</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="title" content={`Cryptoverse Wars | cryptocodeschool.in`} />
        <meta
          name="description"
          content="Learn to code on the Tezos blockchain, the fun way"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptocodeschool.in/tezos" />
        <meta
          property="og:title"
          content={`Cryptoverse Wars | cryptocodeschool.in`}
        />
        <meta
          property="og:description"
          content="Learn to code on the Tezos blockchain, the fun way"
        />
        <meta property="og:image" content="/cover.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://cryptocodeschool.in/tezos/"
        />
        <meta
          property="twitter:title"
          content={`Cryptoverse Wars | cryptocodeschool.in`}
        />
        <meta
          property="twitter:description"
          content="Learn to code on the Tezos blockchain, the fun way"
        />
        <meta property="twitter:image" content="/cover.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Redirecting to <br />
          <a href="https://cryptocodeschool.in/tezos/marketplace">
            Cryptoverse Wars
          </a>{" "}
        </h1>
      </main>
    </div>
  );
}
