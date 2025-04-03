/*
    If using TypeScript then do the following

    export default async function Docs(
    {params}:{
    Promise<{slug: string[]}>
    }
    )
*/

export default async function Docs({ params }) {
  const { slug } = await params;

  if (slug?.length == 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length == 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
  return <h1>This is Docs page</h1>;
}
