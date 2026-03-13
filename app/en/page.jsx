import { LegacyPage } from "@/components/legacy-page";

export const metadata = {
  title: "ShiftTap - More clarity in every shift",
  description:
    "ShiftTap brings together tips, shift planning, premiums, expenses, and intelligent forecasts in one elegant app for hospitality teams.",
  alternates: {
    canonical: "/en",
    languages: {
      de: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "ShiftTap - More clarity in every shift",
    description:
      "An elegant product page for ShiftTap: tips, shifts, premiums, forecasts, and take-home pay in a clear iPhone experience.",
    url: "/en",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function EnPage() {
  return <LegacyPage filePath="en/index.html" />;
}
