import logoImg from "../public/logo.png";
import inboxImg from "../public/inbox.svg";
import contactsImg from "../public/contacts.svg";
import configImg from "../public/config.svg";
import logOutImg from "../public/logout.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import { useAuth } from "@/contexts/authContext";

export default function Navbar() {
  const router = useRouter();
  const { logout} = useAuth()
  const handleLogout = async () =>  {
    try {
      await logout()
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <nav className={styles.sidebar}>
      <section>
        <Link href="/">
          <Image src={logoImg} alt="logo de chagt" className={styles.logo_chagt} width={80} height={80} />
        </Link>
        <ul>
          <Link href="/chat">
            <li
              className={router.pathname === "/chat" ? styles.active_page : ""}
            >
              <Image src={inboxImg} alt="inbox" width={30} height={30} />
            </li>
          </Link>
          <li
            className={
              router.pathname === "/contacts" ? styles.active_page : ""
            }
          >
            <Link href="/contacts">
              <Image src={contactsImg} alt="contactos" width={30} height={30} />
            </Link>
          </li>
          <li
            className={router.pathname === "/config" ? styles.active_page : ""}
          >
            <Link href="/config">
              <Image
                src={configImg}
                alt="configuración"
                width={30}
                height={30}
              />
            </Link>
          </li>
        </ul>
      </section>
      <button className={styles.logout_button} onClick={handleLogout}>
        <Image src={logOutImg} alt="cerrar sesion" width={30} height={30} />
      </button>
    </nav>
  );
}
