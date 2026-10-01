"use client";
import React from "react";
import Link from "next/link";
import LegalLayout, { legalStyles } from "@/components/legal/legal-layout";
import { posts } from "@/data/posts";

const BlogIndex = () => (
  <LegalLayout title="Blog" eyebrow="Journal">
    <div className={legalStyles.doc} style={{ marginTop: 0 }}>
      {posts.length === 0 ? (
        <p>New stories are on the way. Check back soon.</p>
      ) : (
        posts.map((post) => (
          <article key={post.slug} style={{ marginBottom: 44 }}>
            <p className={legalStyles.updated} style={{ margin: "0 0 8px", padding: 0, border: 0 }}>
              {post.date}
            </p>
            <h2 style={{ margin: "0 0 10px" }}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>Read more →</Link>
          </article>
        ))
      )}
    </div>
  </LegalLayout>
);

export default BlogIndex;
