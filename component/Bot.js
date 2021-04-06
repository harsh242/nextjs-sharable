import styles from "../styles/Home.module.css";
import { useAsync } from "react-use";
import Link from "next/link";

export default function HomeBot({ botInfo }) {
  const base64 = useAsync(async () => {
    const response = await fetch(
      `https://cloudflare-ipfs.com/ipfs/${botInfo ? botInfo.image : ""}`
    );
    return response.text();
  }, [botInfo]);

  console.log("base64", base64);
  return (
    <div>
      <main>
        <h1>Cryptobot{botInfo.tokenId}</h1>
        <Link
          href="/tezos/cryptobot/[id]"
          as={`/tezos/cryptobot/${botInfo.tokenId}`}
        >
          <img className={styles.image} src={base64.value} />
        </Link>
      </main>
    </div>
  );
}
