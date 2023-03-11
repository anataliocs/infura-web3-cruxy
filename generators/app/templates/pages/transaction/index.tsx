import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Card from '@components/Card';
import HomePage from '@components/HomePage';
import {
  TransactionNavbar,
  TransactionSettingsModal,
} from '@/components/transaction';
import Link from '@components/Link';
import ChevronRight from '@components/icons/ChevronRight';

import styles from '@styles/modules/Intro.module.css';

const Home: NextPage = () => {
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Infura - Send Transaction</title>
        <meta name="description" content="Infura Tutorial - Send Transaction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage>
        <TransactionNavbar setSettingsModalIsOpen={setSettingsModalIsOpen} />
        <main className={styles.main}>
          <Card containerClassName={styles.card}>
            <div className={styles.card__content}>
              <h1>Send Transaction</h1>
              <Link href="/transaction/connect" className={styles.card__link}>
                <span>CONNECT</span>
                <ChevronRight />
              </Link>
            </div>
          </Card>
          <TransactionSettingsModal
            settingsModalIsOpen={settingsModalIsOpen}
            setSettingsModalIsOpen={setSettingsModalIsOpen}
          />
        </main>
      </HomePage>
    </div>
  );
};

export default Home;
