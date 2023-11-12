import { component$ } from "@builder.io/qwik";

export interface StacksProps {
  icon: "nodejs" | "react" | "javascript" | "typescript" | "angular";
  class: any;
}

export const StacksIcon = component$<StacksProps>(({ icon, class: _class }) => {
  return <img width={45} height={55} src={`${icon}.svg`} class={_class} />;
});
