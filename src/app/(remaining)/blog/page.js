import Link from "next/link";

export const metadata = {
  title: "Blog page",
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay");
    }, 2000);
  });
  return (
    <h1>
      Blog is here <br />
      <Link href="/blog/first">First blog</Link>
    </h1>
  );
}
