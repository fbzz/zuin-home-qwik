import { component$ } from "@builder.io/qwik";

export interface ContactIcons {
  // icon: "nodejs" | "react" | "javascript" | "typescript" | "angular";
  icon: "instagram" | "github" | "meetup";
}

export const ContactIcon = component$<ContactIcons>(({ icon }) => {
  return (
    <img
      width={35}
      height={35}
      src={`${icon}.svg`}
      style={{ padding: "10px", cursor: "pointer" }}
    />
  );
});
