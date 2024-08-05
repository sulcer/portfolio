import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import MetasHead from '@/components/home/metas-head';
import { GoogleAnalytics } from '@next/third-parties/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Gregor Sulcer',
  description: 'Gregor Sulcer - Fullstack Developer - Portfolio',
  verification: {
    google: '-p3wr7lI--mRwBhmmJ3lIxEOf4YxeYr2lLs3Clqnl_4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MetasHead />
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string}
      />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
