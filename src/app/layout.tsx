import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import Script from 'next/script'
import ThemeProvider from '@/components/ThemeProvider'
import { siteConfig } from '@/config/content'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative h-screen">
            <div className="relative z-10 flex flex-col h-full">
              {children}
            </div>
          </div>
        </ThemeProvider>
        <Script
          src="https://trtc.io/knocket-sdk/sdk.js?identifier=1ad476c8e8c8126a1c&v=1776063718685"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
} 