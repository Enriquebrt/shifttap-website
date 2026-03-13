import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

export function getLegacyPage(filePath) {
  const absolutePath = path.join(rootDir, filePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  const bodyMatch = source.match(/<body(?: class="([^"]+)")?>([\s\S]*?)<\/body>/i);

  if (!bodyMatch) {
    throw new Error(`Could not read body content from ${filePath}`);
  }

  const [, bodyClass = "", bodyMarkup] = bodyMatch;
  const cleanedMarkup = bodyMarkup.replace(/<script[\s\S]*?<\/script>/gi, "").trim();

  return {
    bodyClass,
    bodyMarkup: cleanedMarkup,
  };
}
