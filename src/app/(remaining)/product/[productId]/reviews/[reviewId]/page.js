/* If using Typescript we can do the following with the params
    export default async function ReviewById(
    {params}: {params: Promise<{productId: string, reviewId: string}>})
    {
        return <></>
    }
*/

import { notFound } from "next/navigation";
export default async function ReviewById({ params }) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      This is a Dynamic Nested Route with id: {reviewId} and productId is:{" "}
      {productId}
    </h1>
  );
}
