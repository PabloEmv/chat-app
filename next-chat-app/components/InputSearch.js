import Image from "next/image";
import searchImg from "../public/search.svg";
import { useRef, useState } from "react";
import styles from "./inputsearch.module.css"

export default function InputSearch() {
  const inputRef = useRef(null);
  const [containerColor, setContainerColor] = useState("white");
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <div
        className={styles.search}
        style={{ backgroundColor: containerColor }}
        onClick={() => inputRef.current.focus()}
      >
        <span className={styles.search_icon}>
          <Image src={searchImg} alt="buscar" width={20} height={20} />
        </span>
        <input
          type="text"
          placeholder="Buscar usuario.."
          className={styles.search_input}
          ref={inputRef}
          onFocus={() => setContainerColor("#ffd91b22")}
          onBlur={() => setContainerColor("white")}
        />
      </div>
    </div>
  );
}
