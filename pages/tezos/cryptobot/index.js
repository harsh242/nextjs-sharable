import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import React, { useMemo, useState, useEffect } from "react";
import { fetchOneNFT } from "../../../lib/indexer";
import { useAsync } from "react-use";

export default function Cryptobot() {
  const [bot, setBot] = useState({});
  const tokenId = 2;

  const NFT = useAsync(async () => {
    if (!tokenId) return;
    const nft = await fetchOneNFT(tokenId);
    console.log("🔥", nft);
    return nft;
  }, [tokenId, typeof window]);

  useEffect(() => {
    const { value: bot } = NFT;
    if (!NFT.loading) {
      setBot(bot);
      console.log(bot);
      console.log("loaded 🔥");
    }
  }, [NFT.loading]);

  const base64 = useAsync(async () => {
    const response = await fetch(
      `https://cloudflare-ipfs.com/ipfs/${bot ? bot.image : ""}`
    );
    return response.text();
  }, [NFT]);
  console.log("base64", base64);
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptobot #{bot.tokenId}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={`Cryptobot #${bot.tokenId}`} />
        <meta
          name="description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content={`Cryptobot #${bot.tokenId}`} />
        <meta
          property="og:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta property="og:image" content={base64.value} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content={`Cryptobot #${bot.tokenId}`} />
        <meta
          property="twitter:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta property="twitter:image" content={base64.value} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cryptobot{bot.tokenId}</h1>
        <img src={base64.value} />
      </main>
    </div>
  );
}
