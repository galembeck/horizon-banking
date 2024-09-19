import { IBM_Plex_Serif, Inter } from "next/font/google";

import { SITE_CONFIG } from "@/config";

import "../styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSerif = IBM_Plex_Serif({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${inter.variable} 
          ${ibmPlexSerif.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
