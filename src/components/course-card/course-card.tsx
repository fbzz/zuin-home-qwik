import { component$ } from "@builder.io/qwik";
import styles from "./course-card.module.css";

export default component$(() => {
  return (
    <div class={styles["card-container"]}>
      <h4>Software Development Basics - Using Typescript</h4>

      <span>Under Construction...</span>
    </div>
  );
});
