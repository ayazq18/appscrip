import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/(Components)/HomePage";
import NavHorizontal from "@/(Components)/Nav-Horizantal";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavHorizontal />
      <HomePage />
    </main>
  );
}
