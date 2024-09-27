// src/app/layout.tsx

import '@/app/globals.css';
import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import ClientThemeProvider from '@/app/components/ClientThemeProvider';
import ClientNavbar from '@/app/components/ClientNavbar';
import ClientBackgroundAnimationWrapper from '@/app/components/ClientBackgroundAnimationWrapper';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <ClientThemeProvider>
            <ClientBackgroundAnimationWrapper />
            <ClientNavbar />
            <main className="flex-grow container mx-auto p-4">{children}</main>
            <Footer />
          </ClientThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
