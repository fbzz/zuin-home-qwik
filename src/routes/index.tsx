import {
  component$,
  $,
  QwikUIEvent,
  useVisibleTask$,
  useSignal,
  useOnWindow,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Fullpage from "~/components/fullpage/fullpage";
import Whoami from "~/components/whoami/whoami";

export default component$(() => {
  const scrollableRef = useSignal<HTMLElement>();

  return (
    <div ref={scrollableRef}>
      <Fullpage>
        <Whoami />
      </Fullpage>
    </div>
  );
});

export const head: DocumentHead = {
  title: "💻 Zuin ",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
