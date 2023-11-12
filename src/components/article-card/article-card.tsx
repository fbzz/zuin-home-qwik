import { component$, $, useStylesScoped$ } from "@builder.io/qwik";
import type { ArticleCardProps } from ".";
import Medium from "./../../media/medium.svg?jsx";
import scoped from "./article-card.css?inline";

export const ArticleCard = component$<ArticleCardProps>(
  ({ article, imageSrc }) => {
    useStylesScoped$(scoped);
    const truncateCharacters = (text: string, size = 240) => {
      return text.substring(0, size) + "...";
    };

    const openArticle = $((url: string) => {
      window.open(url, "_blank");
    });

    return (
      <div class="card ">
        <Medium class="card__source" />
        <img
          class="card__preview"
          src={imageSrc}
          width={190}
          height={160}
          onClick$={() => openArticle(article.link)}
        />
        <span class="card__title" onClick$={() => openArticle(article.link)}>
          {article.title}
        </span>
        <div class="card__article__preview">
          {truncateCharacters(article.content.encodedSnippet)}
        </div>
      </div>
    );
  }
);
