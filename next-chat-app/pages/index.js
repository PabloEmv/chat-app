import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.css'
import Link from 'next/link'
import saly from '../public/saly.png'
import { useRouter } from 'next/router'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>chat-app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
      <Header />
      <main className={styles.main_page}>
      <figure>
        <Image src={saly} alt="ilustración 3d" height={400} width={400} />
      </figure>
      <section>
        <h1>
          En Chagt puedes conectarte con personas de todo el mundo y tener
          conversaciones interesantes sobre una variedad de temas.
        </h1>
        <h2>
          Nuestra plataforma es fácil de usar y completamente gratuita.
          Simplemente crea una cuenta y comienza a chatear con personas de ideas
          afines.
        </h2>
        <div className={styles.buttons_auth}>
            <button className={styles.button_login} onClick={() => router.push('/login')}>Iniciar Sesion</button>
            <button className={styles.button_register} onClick={() => router.push('/register')}>Registrarse</button>
        </div>
      </section>
    </main>
    </div>
    </>
  )
}
