import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 | Page not Found</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <h1>404 | Page not Found</h1>
      <h1 className={styles.title}>
        Back to{" "}
        <a href="https://cryptocodeschool.in/tezos/marketplace">
          Cryptoverse Wars
        </a>{" "}
      </h1>
    </div>
  );
}
