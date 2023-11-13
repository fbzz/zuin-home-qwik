import {
  component$,
  useStylesScoped$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import scoped from "./posts.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ArticleCard } from "~/components/article-card/article-card";
import type { Article, ArticleCardProps } from "~/components/article-card";
import { RssCustomParser } from "./rss-parser";

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
    const content: string = post.content_encoded;
    const figure = extractFirstFigure(content);
    const imageSrc = extractSrcPaths(figure);
    return {
      article: {
        ...post,
        content_encoded: sanitizeContent(post.content_encoded),
      },
      imageSrc: imageSrc[0],
    };
  });
  return articles;
};

const sanitizeContent = (content: string) => {
  const regexToReplaceClosingTags = /<\/(p|h1|h2|h3|h4|figcaption)>/g;
  const regexToRemoveTags = /(<([^>]+)>)/gi;
  return content
    .replace(regexToReplaceClosingTags, "\n")
    .replace(regexToRemoveTags, "");
};

export const fetchMediumPosts = async () => {
  const res = await RssCustomParser(MEDIUM_PROFILE);

  try {
    return retrieveFirstFigureFromEachPostAndFormat(res!.items);
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default component$(() => {
  useStylesScoped$(scoped);

  const mediumPosts = useSignal<ArticleCardProps[]>([]);

  useTask$(async () => {
    mediumPosts.value = await fetchMediumPosts();
  });

  return (
    <div class="container">
      <h2 class="animate__animated animate__zoomIn">My Articles</h2>

      {mediumPosts.value.map((article, index) => {
        return <ArticleCard {...article} key={index} />;
      })}
    </div>
  );
});

export const head: DocumentHead = {
  title: "My Articles ✍️",
};
