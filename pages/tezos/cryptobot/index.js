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
        <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
        <meta
          name="description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="og:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="twitter:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cryptobot{bot.tokenId}</h1>
        <img src={base64.value} />
      </main>
    </div>
  );
}
