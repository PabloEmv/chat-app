import Image from 'next/image'
import logo from '../public/logo.png'
import styles from './header.module.css'
import Link from 'next/link'

export default function Header () {
    return (
        <header className={styles.header_nav}>
        <nav className={styles.main_navbar}>
          <div>
            <Image src={logo} alt='Imagen de un logo, con un gato negro' height={100} width={100}/>
          </div>
          <div className={styles.menu}>
            <Link href='/' className={styles.active_link}>Inicio</Link>
            <Link href='/product'>Producto</Link>
            <Link href='/contact'>Contáctanos</Link>
          </div>
      </nav>
      </header>
    )

}