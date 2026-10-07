
import { getWikiPage } from "../lib/wiki";

export default async function Home() {
  const page = await getWikiPage("public-home.md");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6">Jeremie Landreville</h1>
        <div className="prose prose-lg mb-8">
          {page?.content}
        </div>
        <div className="flex gap-4 justify-center">
          <a href="/lenses/cyber?role=cyber" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">Cybersecurity View</a>
          <a href="/lenses/av?role=av" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium">Audiovisual View</a>
        </div>
      </div>
    </div>
  );
}

