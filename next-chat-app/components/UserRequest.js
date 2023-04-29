import ButtonRequest from "./ButtonRequest";
import styles from "./userrequest.module.css";

export default function UserRequest() {
  return (
    <div className={styles.user_request_card}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://picsum.photos/50"
          alt="imagen de usuario"
          style={{
            width: "40px",
            heidth: "40px",
            borderRadius: "50%",
            content: "center",
            border: "2px solid #ccc",
          }}
        />
        <span>username</span>
      </div>
      <div style={{ display: "flex", gap: "10px"}}>
      <ButtonRequest buttonType />
      <ButtonRequest buttonType={false} />
      </div>
    </div>
  );
}
