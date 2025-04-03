export default async function ProductDetail({ params }) {
  return <h1>This is product detail page {(await params).productId}</h1>;
}
