import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WebDev Newz</title>
        <meta name='description' content='Recent web development news.'/>
        <meta name="author" content="Ryan Roat"/>
      </Head>
      <h1>Boo!</h1>
    </div>
  )
}
