import { useEffect, useState } from "react";
import styles from './buttonfollreq.module.css'


export default function ButtonFollow({ isFollowing }) {
  const [follow, setFollow] = useState("");

  useEffect(() => {
    if (isFollowing === true) {
      setFollow("siguiendo");
    } else if (isFollowing === false) {
      setFollow("pendiente");
    } else {
      setFollow("seguir");
    }
  }, [isFollowing]);

  function handleFollow() {
    if (follow === "siguiendo" || follow === "pendiente") {
      setFollow("seguir");
    } else if (follow === "seguir") {
      setFollow("pendiente");
    }
  }
  return (
    <button className={`${styles.button_request} ${isFollowing ? styles.hover_unfollow : ''}`} onClick={handleFollow}>
      <span className={styles.default_text}>{follow}</span>
      <span className={styles.unfollow_text}>dejar de seguir</span>
    </button>
  );
}
