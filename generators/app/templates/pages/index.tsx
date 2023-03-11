import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '@components/Card';
import HomePage from '@components/HomePage';
import ChevronRight from '@components/icons/ChevronRight';
import Link from '@components/Link';
import styles from '@styles/modules/Intro.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title><%= projectName %></title>
        <meta
          name="description"
          content="Get started learning how to build web3 applications with Infura"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage>
        <main className={styles.main}>
          <Card containerClassName={styles.card}>
            <div className={styles.card__content}>
              <h1><%= projectName %></h1>
              <p>
                Build the next web3 dApp using Infura, MetaMask and IPFS.
              </p>
              <h2>Send Transaction</h2>
              <p>
                Use MetaMask to transfer ETH, and
                review transactions using the Infura API.
              </p>
              <Link href="/transaction/connect" className={styles.card__link}>
                <span>SEND TRANSACTION</span>
                <ChevronRight />
              </Link>

              <h2>Mint an NFT</h2>
              <p>
                Mint a NFT with Truffle, upload to IPFS, then mint your NFT using Infura.
              </p>
              <Link href="/mint/upload" className={styles.card__link}>
                <span>MINT</span>
                <ChevronRight />
              </Link>
            </div>
          </Card>
        </main>
      </HomePage>
    </div>
  );
};

export default Home;
