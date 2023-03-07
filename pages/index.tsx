import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={'video__fullscreen'}>
            <video autoPlay loop playsInline muted>
              <source src="/static/welcome-c165f933145333af57bec5377ebd402b.mp4" type="video/mp4" sizes="1080"></source>
              <source src="https://player.vimeo.com/external/367853827.hd.mp4?s=14d52988ba245932614cfe16bf3778ec72f720b3&amp;profile_id=174" type="video/mp4" sizes="720"></source>
              <source src="https://player.vimeo.com/external/367853827.sd.mp4?s=31bbc714deea5c007440274cf54a6b66b9f415f5&amp;profile_id=165" type="video/mp4" sizes="576"></source>
              <source src="https://player.vimeo.com/external/367853827.sd.mp4?s=31bbc714deea5c007440274cf54a6b66b9f415f5&amp;profile_id=164" type="video/mp4" sizes="360"></source>
            </video>
        </div>

        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>



      </main>
    </>
  )
}
