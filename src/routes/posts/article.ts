export interface Article {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  content: {
    encoded: string;
    encodedSnippet: string;
  };
  dcCreator: string;
  guid: string;
  categories: string[];
  isoDate: string;
}
