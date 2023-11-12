import { component$ } from "@builder.io/qwik";
import styles from "./whoami.module.css";
import CourseCard from "../course-card/course-card";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={styles["whoami-container"]}>
      <div
        class={[
          styles["whoami-container-about"],
          "animate__animated animate__zoomIn",
        ]}
      >
        <h2 class={styles["test"]}>Hey, I'm Fabio!</h2>
        <br />
        <h4>Software Engineer, Tech Speaker, Sharer</h4>
        <h4>📍 Porto, Portugal</h4>
        <div>
          <img
            width={35}
            height={35}
            src={"./github.svg"}
            style={{ "margin-left": "5px" }}
          />
          <img
            width={35}
            height={35}
            src={"./instagram.svg"}
            style={{ "margin-left": "5px" }}
          />
          <img
            width={35}
            height={35}
            src={"./meetup.svg"}
            style={{ "margin-left": "5px" }}
          />
        </div>
        <div class={[styles["whoami-container-footer"]]}>
          Made with 💜 using{"    "}
          <img
            width={20}
            height={20}
            alt="Qwik logo"
            src={"./favicon.svg"}
            style={{ "margin-left": "5px" }}
          />
        </div>
      </div>
      <div class={[styles["whoami-container-stacks"]]}>
        <div
          class={[
            "animate__animated animate__jackInTheBox",
            styles["whoami-container-photo"],
          ]}
        >
          <img
            width="150"
            height="150"
            src={"./fabio.jpg"}
            class={styles["whoami-container-stacks__img__me"]}
          />
          <img
            width="75"
            height="75"
            src={"./react.svg"}
            class={styles["whoami-container-stacks__img__react"]}
          />
          <img
            width="75"
            height="75"
            src={"./angular.svg"}
            class={styles["whoami-container-stacks__img__angular"]}
          />
          <img
            width="75"
            height="75"
            src={"./typescript.svg"}
            class={styles["whoami-container-stacks__img__typescript"]}
          />
          <img
            width="75"
            height="75"
            src={"./js.svg"}
            class={styles["whoami-container-stacks__img__javascript"]}
          />
        </div>
        <div class={styles["whoami-container-courses"]}>
          <h4>Courses</h4>
          <CourseCard></CourseCard>
        </div>
        <div id="my_talks" class={styles["whoami-container-talks"]}>
          <div>
            <Link href="/posts">About (preferred)</Link>
          </div>
        </div>
      </div>
    </div>
  );
});
