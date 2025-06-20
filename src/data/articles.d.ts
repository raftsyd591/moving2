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