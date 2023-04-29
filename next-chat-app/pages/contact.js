import Header from "@/components/Header";
import styles from "@/styles/contact.module.css";
import call from '@/public/call.svg'
import email from '@/public/email.svg'
import Image from "next/image";

export default function Contact () {
    return (
        <>
        <Header />
        <main className={styles.main_contact}>
      <section>
        <h2>Discutamos sobre algo <span>genial</span> juntos</h2>
        <div className={styles.text_inline}>
          <Image src={email} alt="email" className={styles.icon} height={50} width={50} />
          <span>chagt@gmail.com</span>
        </div>
        <div className={styles.text_inline}>
            <Image src={call} alt="telefono" className={styles.icon} height={50} width={50} />
          <span>+123 456 789</span>
        </div>
      </section>
      <form action="#">
        <label for="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder=" Tu nombre"
          className={styles.input_contact}
          required
        />
        <span id="name_error" className={styles.error_text}></span>

        <label for="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder=" Tu teléfono"
          className={styles.input_contact}
          required
        />
        <span id="phone_error" className={styles.error_text}></span>

        <label for="rut">RUT</label>
        <input
          type="text"
          id="rut"
          name="rut"
          placeholder="12345678-9"
          className={styles.input_contact}
          required
        />
        <span id="rut_error" className={styles.error_text}></span>

        <label for="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" E-mail"
          className={styles.input_contact}
          required
        />
        <span id="email_error" className={styles.error_text}></span>

        <label for="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder=" Mensaje"
          className={styles.input_contact}

          required
        ></textarea>
        <span id="message_error" className={styles.error_text}></span>

        <button type="submit" className={styles.send_button}>Enviar mensaje</button>
      </form>
    </main>
        </>
    )

}