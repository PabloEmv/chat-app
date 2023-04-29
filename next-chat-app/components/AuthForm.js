import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./authform.module.css";

export default function AuthForm({
  title,
  linkAuth,
  buttonText,
  redirectText,
  linkAuthText,
}) {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });



  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <main className={styles.auth_form}>
      <div>
        <div style={{ textAlign: "center" }}>
          <Link href="/">
            <Image src={logo} alt="logo de chagt" width={120} height={120} />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className={styles.form_container}>
          <h1 style={{ textAlign: "center", margin: "0" }}>{title}</h1>
          <p style={{ textAlign: "center", margin: "0 0 25px 0" }}>
            {redirectText}{" "}
            <Link href={`/${linkAuth}`} className="text-link">
              {linkAuthText}
            </Link>
          </p>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={email}
            id="email"
            placeholder="E-mail"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            value={password}
            id="password"
            placeholder="contraseña"
            onChange={handleChange}
            required
          />
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </main>
  );
}
