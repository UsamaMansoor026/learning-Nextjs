/* Dynamic generateMetadata function */
export const generateMetadata = async ({ params }) => {
  const id = (await params).productId;

  /* Now i am going to do something crazy, this comes handy when we are building exommerce application and have a product catalog, and titles changes depend on the product that user clicked */
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Samsung ${id}`);
    }, 2000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetail({ params }) {
  return <h1>This is product detail page {(await params).productId}</h1>;
}
