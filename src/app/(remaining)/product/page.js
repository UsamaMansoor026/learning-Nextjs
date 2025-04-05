import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <div>
      <h1>Products here</h1>
      <Link href="/product/1">Product 1</Link>
      <br />
      <Link href="/product/2">Product 2</Link>
      <br />
      <Link href="/product/3">Product 3</Link>
      <br />
      <Link href={`/product/${productId}`}>Product {productId}</Link>
      <br />
    </div>
  );
}
