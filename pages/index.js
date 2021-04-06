import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useMemo, useState, useEffect } from "react";
import { fetchAllNfts } from "../lib/indexer";
import { useAsync } from "react-use";
import Link from "next/link";
import HomeBot from "../component/Bot";

export default function Home({ combined }) {
  const [nftList, updateNftList] = useState([]);
  console.log("combined inside fn", combined);
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

  // useEffect(() => {
  //   const all = combined ? combined : [];
  //   updateNftList(all);
  // }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Loading... </h1>
        <div className={styles.grid}>
          {nftList.length > 0 &&
            nftList.map((el) => {
              return (
                <div key={el.tokenId} className={styles.card}>
                  <HomeBot botInfo={el} />
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const combined = await fetchAllNfts();
//   console.log("combined inside get props", combined);

//   return {
//     props: {
//       json,
//     },
//   };
// };
