import Header from '@/components/Header'
import styles from '@/styles/product.module.css'
import about from '@/public/about.svg'
import Image from 'next/image'

export default function Product () {
    return (
        <>
        <Header />
        <main className={styles.main_product}>
      <section>
        <h2>
          En nuestra aplicación de chat, ofrecemos una variedad de servicios
          para que puedas disfrutar al máximo de tu experiencia de chat. Estos
          son algunos de los servicios que ofrecemos:
        </h2>
        <ul>
          <li>
            Chat en vivo: Nuestra plataforma de chat en vivo te permite
            conectarte con personas de todo el mundo y tener conversaciones
            interesantes sobre una variedad de temas.
          </li>
          <li>
            Agregar amigos: Si te gusta chatear con alguien en particular,
            puedes agregarlo como amigo para mantener el contacto y tener más
            conversaciones en el futuro. También puedes ver la lista de amigos
            en línea y conectarte con ellos de manera fácil y rápida.
          </li>
          <li>
            Personalización de perfil: Puedes personalizar tu perfil con
            información sobre ti mismo, fotos y más. Esto te ayuda a conectarte
            con personas que tienen intereses y aficiones similares a las tuyas.
          </li>
        </ul>
      </section>
      <figure>
        <Image src={about} alt="imagen de una persona con un computador" height={500} width={500} />
      </figure>
    </main>
        </>
    )
}