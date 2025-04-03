"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname(); // This capture the path that paint this page, so we have to capture the path params

  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];

  return (
    <h1>
      Review {reviewId} Not found for product {productId}
    </h1>
  );
}
