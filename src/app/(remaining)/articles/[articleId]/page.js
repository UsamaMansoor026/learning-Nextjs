/* If we are using client component then we are not allowed to async the default function, so in order to access the params and searchParams we are using use hook from the react */

"use client";
import Link from "next/link";
import { use } from "react";
import { useRouter } from "next/navigation";

export default function ArticleDetail({ params, searchParams }) {
  const router = useRouter();
  const { articleId } = use(params);
  const { lang } = use(searchParams);

  const handleClick = () => {
    console.log("Placing the shitt");
    router.push("/");
    // router.replace("/");
  };
  return (
    <div>
      <h1>Article Page for {articleId}</h1>
      <p>Reading in {lang}</p>

      <hr />
      <br />
      <Link href={`/articles/${articleId}?lang=en`}>English</Link>
      <br />
      <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      <br />
      <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      <br />

      <button type="button" onClick={handleClick}>
        Move to home after placing the shitt
      </button>
    </div>
  );
}
