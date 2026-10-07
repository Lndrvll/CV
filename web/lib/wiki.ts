import fs from "fs";
import path from "path";
import matter from "gray-matter";

const vaultPath = path.join(process.cwd(), "..");

export async function getWikiPage(relativePath: string) {
  // The comment below tells Turbopack not to trace the entire filesystem from this call
  const fullPath = path.join(/*turbopackIgnore: true*/ vaultPath, relativePath);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { metadata: data, content };
}

export async function getMasterMatrix() {
  const matrix = await getWikiPage("LLM-Wiki/pages/Master Skill Matrix.md");
  return matrix;
}
