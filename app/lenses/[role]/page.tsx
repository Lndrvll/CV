
import { getWikiPage } from "../../lib/wiki";

export default async function LensPage({ params, searchParams }: any) {
  const role = searchParams.role || "public";
  let pagePath = "public-home.md";

  if (role === "cyber") pagePath = "LLM-Wiki/pages/Lens - Cybersecurity.md";
  if (role === "av") pagePath = "LLM-Wiki/pages/Lens - Audiovisual.md";

  const page = await getWikiPage(pagePath);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{page?.metadata?.title || "Professional Profile"}</h1>
      <div className="prose lg:prose-xl">
        {page?.content}
      </div>
    </div>
  );
}

