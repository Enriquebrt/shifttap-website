import { LegacyPage } from "@/components/legacy-page";

export const metadata = {
  title: "ShiftTap Support",
  description:
    "ShiftTap support, contact details, and FAQ for tips, shifts, premiums, and forecast features.",
  alternates: {
    canonical: "/en/support",
    languages: {
      de: "/support",
      en: "/en/support",
    },
  },
};

export default function EnSupportPage() {
  return <LegacyPage filePath="en/support.html" />;
}
