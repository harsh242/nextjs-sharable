import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useMemo, useState, useEffect } from "react";
import { fetchAllNfts } from "../lib/indexer";
import { useAsync } from "react-use";
import Link from "next/link";

export default function Home() {
  const [nftList, updateNftList] = useState([]);

  const allNFTS = useAsync(async () => {
    try {
      const combined = await fetchAllNfts();
      console.log("combined", combined);

      updateNftList(combined);
      return combined;
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    //get all the nft tokens
    const all = allNFTS.value ? allNFTS.value : [];
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Redirecting... </h1>
        <div className={styles.grid}>
          {nftList.length > 0 &&
            nftList.map((el) => {
              return (
                <div key={el.tokenId} className={styles.card}>
                  <Link
                    href="/tezos/cryptobot/[id]"
                    as={`/tezos/cryptobot/${el.tokenId}`}
                  >
                    <a>Cryptobot {el.tokenId}</a>
                  </Link>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
