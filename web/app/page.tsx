
import { getWikiPage } from "../lib/wiki";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Home() {
  const page = await getWikiPage("public-home.md");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-gray-900 selection:bg-blue-100">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-6xl font-light tracking-tighter mb-8 text-gray-900">
          Jeremie Landreville
        </h1>
        <div className="h-px w-full bg-gray-100 mb-12"></div>
        <div className="prose prose-lg mx-auto text-gray-600 font-light leading-relaxed mb-16">
          <ReactMarkdown remarkGfm>
            {page?.content}
          </ReactMarkdown>
        </div>
        <div className="flex justify-center">
          <a href="/welcome" className="group px-10 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200 active:scale-95">
            Enter Professional Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

