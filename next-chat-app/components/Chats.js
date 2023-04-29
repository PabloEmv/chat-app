import Image from "next/image";
import ChatUser from "./ChatUser";
import newChatImg from "../public/plus-circle.svg";
import styles from "./chats.module.css";

export default function Chats() {

  return (
    <aside className={styles.chats}>
      <section className={styles.chats_tile}>
        <h2>Chats</h2>
        <span>
          <Image src={newChatImg} alt="nuevo chat" width={40} height={40} />
        </span>
      </section>
      <section className={styles.chats_users}>
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
      </section>
    </aside>
  );
}
