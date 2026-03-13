import { LegacyPage } from "@/components/legacy-page";

export const metadata = {
  title: "ShiftTap Datenschutzerklärung",
  description:
    "Datenschutzerklärung von ShiftTap. Privacy-First, lokale Speicherung und Informationen zu In-App-Käufen.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <LegacyPage filePath="privacy.html" />;
}
