import styles from "./chatuser.module.css";

export default function ChatUser({userimage, username, lastmessage }) {
  return (
    <div className={styles.chat_user}>
      <img
        src={userimage}
        alt="imagen de usuario"
        className="user-img"
      />
      <div className={styles.chat_user_info}>
        <span style={{display: "inline"}}>{username}</span>
        <p className={styles.preview_message}>
          {lastmessage}
        </p>
      </div>
    </div>
  );
}
