import { component$ } from "@builder.io/qwik";
import styles from "./whoami.module.css";
import CourseCard from "../course-card/course-card";
import { Link } from "@builder.io/qwik-city";
import Github from "./../../media/github.svg?jsx";
import Instagram from "./../../media/instagram.svg?jsx";
import Meetup from "./../../media/meetup.svg?jsx";
import QwikIcon from "./../../media/favicon.svg?jsx";
import Me from "./../../media/fabio.jpg?jsx";
import React from "./../../media/react.svg?jsx";
import Angular from "./../../media/angular.svg?jsx";
import Typescript from "./../../media/typescript.svg?jsx";
import Javascript from "./../../media/js.svg?jsx";

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
          <Github class={styles["whoami-contact-icons"]} />
          <Instagram class={styles["whoami-contact-icons"]} />
          <Meetup class={styles["whoami-contact-icons"]} />
        </div>
        <div class={[styles["whoami-container-footer"]]}>
          Made with 💜 using{"    "}
          <QwikIcon class={styles["whoami-qwik-icon"]} />
        </div>
      </div>
      <div class={[styles["whoami-container-stacks"]]}>
        <div
          class={[
            "animate__animated animate__jackInTheBox",
            styles["whoami-container-photo"],
          ]}
        >
          <Me class={styles["whoami-container-stacks__img__me"]} />
          <React class={styles["whoami-container-stacks__img__react"]} />
          <Angular class={styles["whoami-container-stacks__img__angular"]} />
          <Typescript
            class={styles["whoami-container-stacks__img__typescript"]}
          />
          <Javascript
            class={styles["whoami-container-stacks__img__javascript"]}
          ></Javascript>
        </div>
        <div class={styles["whoami-container-courses"]}>
          <h4>Courses</h4>
          <CourseCard></CourseCard>
        </div>
        <div id="my_talks" class={styles["whoami-container-talks"]}>
          <div>
            <Link href="/posts" prefetch>
              My Articles ✍️
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
