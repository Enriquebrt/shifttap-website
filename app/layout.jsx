import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles.css";
import { SiteEffects } from "@/components/site-effects";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://shifttap.app"),
  title: "ShiftTap",
  description: "ShiftTap website",
  icons: {
    icon: "/images/mockups/logo.png",
    apple: "/images/mockups/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={manrope.className}>
        {children}
        <SiteEffects />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
