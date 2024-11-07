import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS Page",
  description: "Generated with create next app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
