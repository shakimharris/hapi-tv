import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <title>Hapi TV</title>
        <h1>Here</h1>
        <Image src="/hapi.png" alt="Hapi Logo" width={72} height={160} />
        <meta name="description" content="Hapi is an free speech open platform" />
    </div>
  )
}
