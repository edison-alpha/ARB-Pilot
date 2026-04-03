import localFont from 'next/font/local'
import "@/app/globals.css";
import LayoutBody from "@/components/LayoutBody";
import { NavigationProvider } from "@/contexts/NavigationContext";

export const metadata = {
  title: {
    default: "ArbiPilot — Clarity for Agentic Execution",
    template: "%s | ArbiPilot",
  },
  description:
    "ArbiPilot turns natural language intent into explained, validated, deterministic execution on Arbitrum.",
  keywords: [
    "ArbiPilot",
    "Arbitrum",
    "AI agent",
    "agentic execution",
    "onchain execution",
    "swap",
    "wallet safety",
    "deterministic execution",
    "explainable AI",
    "ERC-8004",
  ],
  authors: [{ name: "ArbiPilot" }],
  creator: "ArbiPilot",
  metadataBase: new URL("https://arbipilot.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ArbiPilot — Clarity for Agentic Execution",
    title: "ArbiPilot — Explain First. Execute Second.",
    description:
      "An Arbitrum-native system that makes AI-assisted onchain execution clearer, safer, and deterministic before users sign.",
    images: [
      {
        url: "/images/p1.png",
        width: 1200,
        height: 630,
        alt: "ArbiPilot — Clarity for Agentic Execution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@arbipilot",
    title: "ArbiPilot — Explain First. Execute Second.",
    description:
      "An Arbitrum-native system that makes AI-assisted onchain execution clearer, safer, and deterministic before users sign.",
    images: ["/images/p1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const parasitype = localFont({
  variable: "--font-parasitype",
  preload: false,
  src: [
    {
      path: "../../public/fonts/parasitype/Parasitype-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/parasitype/Parasitype-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/parasitype/Parasitype-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/parasitype/Parasitype-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/parasitype/Parasitype-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/parasitype/Parasitype-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const courierNew = localFont({
  variable: "--font-courier-new",
  preload: false,
  src: [
    {
        path: "../../public/fonts/courierNew/CourierNewPSMT.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../../public/fonts/courierNew/CourierNewPS-ItalicMT.ttf",
        weight: "400",
        style: "italic",
      },
      {
        path: "../../public/fonts/courierNew/CourierNewPS-BoldMT.ttf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../../public/fonts/courierNew/CourierNewPS-BoldItalicMT.ttf",
        weight: "700",
        style: "italic",
      },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${parasitype.variable} ${courierNew.variable}`}>
        <NavigationProvider>
          <LayoutBody>{children}</LayoutBody>
        </NavigationProvider>
      </body>
    </html>
  );
}
