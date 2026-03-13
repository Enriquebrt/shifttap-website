import { LegacyPage } from "@/components/legacy-page";

export const metadata = {
  title: "ShiftTap - Mehr Klarheit in jeder Schicht",
  description:
    "ShiftTap vereint Trinkgeld, Schichtplanung, Zuschläge, Ausgaben und intelligente Prognosen in einer eleganten App für Servicekräfte.",
  alternates: {
    canonical: "/",
    languages: {
      de: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "ShiftTap - Mehr Klarheit in jeder Schicht",
    description:
      "Eine elegante Produktseite für ShiftTap: Trinkgeld, Schichten, Zuschläge, Prognosen und Netto-Lohn in einem klaren iPhone-Erlebnis.",
    url: "/",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function Page() {
  return <LegacyPage filePath="index.html" />;
}
