export interface Article {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  content_encoded: string;
  dcCreator: string;
  guid: string;
  categories: string[];
  isoDate: string;
}

export interface ArticleCardProps {
  article: Article;
  imageSrc: string;
}
