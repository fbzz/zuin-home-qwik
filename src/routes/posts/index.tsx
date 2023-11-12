import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import scoped from "./posts.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";

import { ArticleCard } from "~/components/article-card/article-card";
import type { ArticleCardProps } from "~/components/article-card";
/*
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
  items: any
): ArticleCardProps[] => {
  const articles = items.map((post: Article) => {
    const content: string = post.content;
    const figure = extractFirstFigure(content);
    const imageSrc = extractSrcPaths(figure);
    return {
      article: {
        ...post,
        ...{ content: { encodedSnippet: post.content } },
      },
      imageSrc: imageSrc[0],
    };
  });
  return articles;
};

export const fetchMediumPosts = async () => {
  const res = await RssCustomParser(MEDIUM_PROFILE);
  return retrieveFirstFigureFromEachPostAndFormat(res!.items);
}; */

export default component$(() => {
  useStylesScoped$(scoped);

  const mediumPosts = useSignal<ArticleCardProps[]>([]);

  /* useTask$(async () => {
    mediumPosts.value = await fetchMediumPosts();
  });*/

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
