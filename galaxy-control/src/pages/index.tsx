import Head from 'next/head'
import GalaxyForm from '../components/GalaxyForm'
import styles from '../styles/GalaxyControl.module.css';

export default function Home() {
    return (
      <div className={styles.container}>
        <div className={styles.stars}></div>
        <div className={styles.nebula}></div>
        <Head>
          <title>Galaxy Control</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <h1 className={styles.title}>Galaxy Control Panel</h1>
        <div className={styles.formContainer}>
          <GalaxyForm />
        </div>
      </div>
    )
  }