import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Gregor Sulcer',
  description: 'Gregor Sulcer - Fullstack Developer - Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
