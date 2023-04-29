import styles from "./chatuser.module.css";

export default function ChatUser() {
  return (
    <div className={styles.chat_user}>
      <img
        src="https://picsum.photos/50"
        alt="imagen de usuario"
        className="user-img"
      />
      <div className={styles.chat_user_info}>
        <span style={{display: "inline"}}>user name</span>
        <p className={styles.preview_message}>
          lorem ipsum dolor sit amet, consectetur adipis
        </p>
      </div>
    </div>
  );
}
