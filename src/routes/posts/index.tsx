import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import scoped from "./posts.css?inline";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Parser, { Item } from "rss-parser";
import { ArticleCard } from "~/components/article-card/article-card";
import type { ArticleCardProps } from "~/components/article-card";

const MEDIUM_PROFILE = `https://medium.com/feed/@fabiozuin`;

const extractSrcPaths = (input: string): string[] => {
  const srcRegex = /src\s*=\s*["'](.*?)["']/g;

  const srcPaths: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = srcRegex.exec(input)) !== null) {
    srcPaths.push(match[1]);
  }

  return srcPaths;
};

const extractFirstFigure = (encodedArticle: string) => {
  const startToSearch = "<figure>";
  const endToSearch = "</figure>";
  const start = encodedArticle.indexOf(startToSearch);
  const end = encodedArticle.indexOf(endToSearch);
  return encodedArticle.substring(start, end);
};

const retrieveFirstFigureFromEachPostAndFormat = (
  items: T & Item[]
): ArticleCardProps[] => {
  const articles = items.map((post: T & Item) => {
    const content: string = post["content:encoded"];
    const figure = extractFirstFigure(content);
    const imageSrc = extractSrcPaths(figure);
    return {
      article: {
        ...post,
        ...{ content: { encodedSnippet: post["content:encodedSnippet"] } },
      },
      imageSrc: imageSrc[0],
    };
  });
  return articles;
};

export const useFetchMediumPosts = routeLoader$(async () => {
  const parser = new Parser();
  const res = await parser.parseURL(MEDIUM_PROFILE);
  return retrieveFirstFigureFromEachPostAndFormat(res.items);
});

export default component$(() => {
  useStylesScoped$(scoped);

  const mediumPosts = useFetchMediumPosts();

  return (
    <div class="container ">
      <h2 class="animate__animated animate__zoomIn">My Articles</h2>
      <div class="posts__container">
        {mediumPosts.value.map((article, index) => {
          return <ArticleCard {...article} key={index} />;
        })}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "My Articles ✍️",
};
