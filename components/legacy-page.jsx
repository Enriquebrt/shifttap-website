import { getLegacyPage } from "@/lib/legacy-page";

export function LegacyPage({ filePath }) {
  const { bodyClass, bodyMarkup } = getLegacyPage(filePath);

  return (
    <div
      className={bodyClass}
      dangerouslySetInnerHTML={{ __html: bodyMarkup }}
    />
  );
}
