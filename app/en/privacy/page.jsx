import { LegacyPage } from "@/components/legacy-page";

export const metadata = {
  title: "ShiftTap Privacy Policy",
  description:
    "ShiftTap privacy policy. Privacy-first product design, local storage, and information about in-app purchases.",
  alternates: {
    canonical: "/en/privacy",
    languages: {
      de: "/privacy",
      en: "/en/privacy",
    },
  },
};

export default function EnPrivacyPage() {
  return <LegacyPage filePath="en/privacy.html" />;
}
