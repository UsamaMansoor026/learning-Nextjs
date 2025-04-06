/* If using Typescript we can do the following with the params
    export default async function ReviewById(
    {params}: {params: Promise<{productId: string, reviewId: string}>})
    {
        return <></>
    }
*/

import { notFound, redirect } from "next/navigation";

const randomNumber = (count) => {
  return Math.floor(Math.random() * count);
};

export default async function ReviewById({ params }) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/product");
  }

  const rand = randomNumber(2);
  if (rand === 1) {
    throw new Error("Error loading review");
  }
  return (
    <h1>
      This is a Dynamic Nested Route with id: {reviewId} and productId is:{" "}
      {productId}
    </h1>
  );
}
