// Blog posts. Add a new object to the top of this list to publish a post.
// Each paragraph is one string in `body`. Use "## Heading" for a subheading.
// The slug becomes the address: funkaar.co/blog/<slug>

export type Post = {
  slug: string;
  title: string;
  date: string; // e.g. "October 1, 2026"
  excerpt: string;
  author: string;
  body: string[];
};

export const posts: Post[] = [];
