import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import { primary } from "./components/Fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Looplicator",
  description: "Get original loops for your project.",
  keywords: [
    "loop packs",
    "drum loops",
    "industrial loops",
    "industrial drum loops",
    "drum packs",
    "ambient packs",
    "breakbeats",
    "electronic grooves",
    "futuristic beats",
    "tribal percussion",
    "downtempo grooves",
    "industrial synths",
    "futuristic sounds",
    "experimental beats",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={primary.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
