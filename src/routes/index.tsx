import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Ad } from "~/components/routed_components/ad/ad";

export default component$(() => {
  return (
      <main>
        <Ad/>
        <div>
          Ranking
        </div>
        <div>New</div>
        <div>Recommend</div>
        <div>
        </div>
      </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
