import React, { useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";

const Cryptobot = ({ id, image }) => {
  //   useEffect(() => {
  //     window.location.href = `https://cryptocodeschool.in/tezos/cryptobot/${id}`;
  //   }, []);
  return (
    <>
      <Head>
        <title>Cryptobot #{id}</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="title" content={`Cryptobot #${id}`} />
        <meta
          name="description"
          content="Take a look at this awesome Cryptobot NFT ⚡️. Grab your unique Cryptobot today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptocodeschool.in/tezos" />
        <meta property="og:title" content={`Cryptobot #${id}`} />
        <meta
          property="og:description"
          content="Take a look at this awesome Cryptobot NFT ⚡️. Grab your unique Cryptobot today!"
        />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://cryptocodeschool.in/tezos"
        />
        <meta property="twitter:title" content={`Cryptobot #${id}`} />
        <meta
          property="twitter:description"
          content="Take a look at this awesome Cryptobot NFT ⚡️. Grab your unique Cryptobot today!"
        />
        <meta property="twitter:image" content={image} />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Redirecting to{" "}
          <a href={`https://cryptocodeschool.in/tezos/cryptobot/${id}`}>
            Cryptobot #{id}
          </a>
        </h1>
        <img src={image} className={styles.image} />
      </div>
    </>
  );
};

function sanitizeJsonUri(origin) {
  if (origin.startsWith("ipfs://")) {
    return `https://cloudflare-ipfs.com/ipfs/${origin.substring(7)}/`;
  }
  return null;
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://cryptoverse-wars-backend-pr-16.onrender.com/cryptobot?id=${context.params.id}`
  );

  const bot = await res.json();
  return {
    props: {
      id: bot.token_id,
      image: sanitizeJsonUri(bot.imageURI),
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://cryptoverse-wars-backend-pr-16.onrender.com/cryptobot/all`
  );

  const bots = await res.json();

  const ids = bots.map((bot) => bot.token_id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Cryptobot;
