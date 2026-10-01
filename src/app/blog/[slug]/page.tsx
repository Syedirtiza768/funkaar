import { notFound } from "next/navigation";
import BlogPost from "@/pages/blog/blog-post";
import { posts } from "@/data/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  // Next.js needs at least one entry to build a dynamic route; with no posts
  // we return a placeholder that renders a 404.
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "__none__" }];
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  return post
    ? { title: `${post.title} - Funkaar`, description: post.excerpt }
    : { title: "Funkaar" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
