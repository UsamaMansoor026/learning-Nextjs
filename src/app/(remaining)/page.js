import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <Link href="/blog">Go to Blog</Link>
      <Link href="/product">Go to Products</Link>
      <hr />
      <br />

      {/* Here breaking-news-123 is the dynamic parameter and lang is query parameter */}
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <br />
      <br />
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </div>
  );
}

export default Home;
