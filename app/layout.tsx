import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MotionProvider } from "@/components/motion-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobertdev.vercel.app"),
  title: "Nobert Langat | Full-Stack Developer",
  description:
    "Full-stack developer and UI/UX designer building reliable web products with React, Next.js, Node.js, and ASP.NET Core.",
  openGraph: {
    title: "Nobert Langat | Full-Stack Developer",
    description:
      "Full-stack developer and UI/UX designer building clear, reliable digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full dark",
        "antialiased",
        geist.variable,
        jetbrains.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
