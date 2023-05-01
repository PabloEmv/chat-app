import Image from "next/image";
import ChatUser from "./ChatUser";
import newChatImg from "../public/plus-circle.svg";
import styles from "./chats.module.css";

export default function Chats() {
  const usersMessages = [
    {
      username: "user1",
      userImg: "https://picsum.photos/50",
      message: "holaaa",
    },
    {
      username: "user2",
      userImg: "https://picsum.photos/50",
      message: "aaaaa",
    },
    {
      username: "user3",
      userImg: "https://picsum.photos/50",
      message: "xdxdxd",
    },
    {
      username: "user4",
      userImg: "https://picsum.photos/50",
      message: "👍",
    },
  ];

  return (
    <aside className={styles.chats}>
      <section className={styles.chats_tile}>
        <h2>Chats</h2>
        <input
          type="text"
          placeholder="Buscar..."
          style={{ display: "none" }}
        />
        <span>
          <Image
            src={newChatImg}
            alt="nuevo chat"
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </span>
      </section>
      <section className={styles.chats_users}>
        {usersMessages.map((user) => {
          return (
            <ChatUser
            key={user.username}
            userimage={user.userImg}
            username={user.username}
            lastmessage={user.message}
          />
          )
        })}
      </section>
    </aside>
  );
}
