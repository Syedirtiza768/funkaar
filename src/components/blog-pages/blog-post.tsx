"use client";
import React from "react";
import Link from "next/link";
import LegalLayout from "@/components/legal/legal-layout";
import { Post } from "@/data/posts";

const BlogPost = ({ post }: { post: Post }) => (
  <LegalLayout title={post.title} eyebrow="Journal" updated={`${post.date} · ${post.author}`}>
    {post.body.map((block, i) =>
      block.startsWith("## ") ? (
        <h2 key={i}>{block.slice(3)}</h2>
      ) : (
        <p key={i}>{block}</p>
      )
    )}
    <p>
      <Link href="/blog">← Back to the blog</Link>
    </p>
  </LegalLayout>
);

export default BlogPost;
