import { LegacyPage } from "@/components/legacy-page";

export const metadata = {
  title: "ShiftTap Support",
  description:
    "ShiftTap Support, Kontakt und FAQ für die App rund um Trinkgeld, Schichten und Premium-Funktionen.",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return <LegacyPage filePath="support.html" />;
}
