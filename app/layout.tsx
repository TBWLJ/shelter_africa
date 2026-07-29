import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kwolitygroupltd.com.ng"),

  title: {
    default: "Shelter Africa Estate | Own Your Future",
    template: "%s | Shelter Africa Estate",
  },

  description:
    "Discover land ownership opportunities with Shelter Africa Estate in Ogbomoso, Nigeria. Explore available plot sizes and take the next step toward owning your property.",

  keywords: [
    "Shelter Africa Estate",
    "Shelter Africa 2",
    "land for sale in Ogbomoso",
    "property in Ogbomoso",
    "real estate Ogbomoso",
    "land investment Nigeria",
    "Ogbomoso real estate",
  ],

  authors: [
    {
      name: "Shelter Africa Estate",
    },
  ],

  creator: "Shelter Africa Estate",

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.kwolitygroupltd.com.ng",
    siteName: "Shelter Africa Estate",
    title: "Shelter Africa Estate | Own Your Future",
    description:
      "Explore land ownership opportunities with Shelter Africa Estate in Ogbomoso, Nigeria.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}