declare module '*.jsx';
declare module '*.js';

declare module '../../data/articles' {
  export interface BlogPostProps {
    title: string;
    slug: string;
    image: string;
    author: string;
    authorImage: string;
    date: string;
    category: string;
    readTime: number;
    excerpt: string;
    keywords: string;
    content: string;
  }

  export const articles: BlogPostProps[];
  export const categories: { id: string; name: string }[];
}

declare module '../../data/articles.jsx' {
  export interface BlogPostProps {
    title: string;
    slug: string;
    image: string;
    author: string;
    authorImage: string;
    date: string;
    category: string;
    readTime: number;
    excerpt: string;
    keywords: string;
    content: string;
  }

  export const articles: BlogPostProps[];
  export const categories: { id: string; name: string }[];
} 