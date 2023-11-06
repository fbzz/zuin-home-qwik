import { Slot, component$ } from "@builder.io/qwik";
import styles from "./fullpage.module.css";

export default component$(() => {
  return (
    <div class={styles["fullpage-wrapper"]}>
      <Slot></Slot>
    </div>
  );
});
