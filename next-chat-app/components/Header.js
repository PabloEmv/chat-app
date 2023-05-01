import Image from 'next/image'
import logo from '../public/logo.png'
import styles from './header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header () {
  const router = useRouter()
    return (
        <header className={styles.header_nav}>
        <nav className={styles.main_navbar}>
          <div>
            <Image src={logo} alt='Imagen de un logo, con un gato negro' height={100} width={100}/>
          </div>
          <div className={styles.menu}>
            <Link href='/' className={router.pathname === "/" ? styles.active_link : ""}>Inicio</Link>
            <Link href='/product' className={router.pathname === "/product" ? styles.active_link : ""}>Producto</Link>
            <Link href='/contact' className={router.pathname === "/contact" ? styles.active_link : ""}>Contáctanos</Link>
          </div>
      </nav>
      </header>
    )

}