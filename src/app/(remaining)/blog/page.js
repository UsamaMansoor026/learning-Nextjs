import Link from "next/link";

export const metadata = {
  title: "Blog page",
};

export default function Blog() {
  return (
    <h1>
      Blog is here
      <Link href="/blog/first">First blog</Link>
    </h1>
  );
}
