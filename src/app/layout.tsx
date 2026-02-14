import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const title = "Moses Rodrigues | Electronics & Computer Engineering Student";
const description =
  "Portfolio of Moses Rodrigues showcasing embedded systems, IoT projects, full-stack development, and AI-assisted engineering solutions.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://moses-rodrigues-portfolio.vercel.app",
    siteName: "Moses Rodrigues Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  keywords: [
    "Moses Rodrigues",
    "Embedded Systems",
    "IoT",
    "Full-Stack Development",
    "Electronics and Computer Engineering",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-zinc-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
