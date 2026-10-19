
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://portfolio-rose-xi-j1o06k0ryt.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Saad Khan | Developer & Freelancer",
    template: "%s | Saad Khan",
  },

  description:
    "Explore the portfolio of Saad Khan, a web developer and freelancer building modern, responsive websites and web applications for businesses.",

  applicationName: "Saad Khan Portfolio",

  keywords: [
    "Saad Khan AIKTC",
    "Saad Khan",
    "Web Developer",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer",
    "Website Development",
    "Frontend Developer",
  ],

  authors: [{ name: "Saad Khan" }],

  creator: "Saad Khan",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Saad Khan | Developer & Freelancer",
    title: "Saad Khan | Developer & Freelancer",
    description:
      "Modern websites and web applications built with thoughtful design and reliable technology.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saad Khan — Developer and Freelancer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saad Khan | Developer & Freelancer",
    description:
      "Explore my web development projects, skills, and freelance services.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#09090d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
