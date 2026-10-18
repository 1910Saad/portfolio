
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saad Khan | Developer & Freelancer",
  description:
    "Personal portfolio of Saad Khan — web developer and freelancer building modern, responsive websites and web applications.",
  applicationName: "Saad Khan Portfolio",
  keywords: [
    "Saad Khan",
    "Web Developer",
    "Freelancer",
    "Next.js Developer",
    "React Developer",
    "Website Development",
  ],
  openGraph: {
    title: "Saad Khan | Developer & Freelancer",
    description:
      "Building modern websites and digital experiences for businesses.",
    type: "website",
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
