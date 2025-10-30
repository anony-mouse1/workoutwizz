import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
// components
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "Workout Wizz - Your Personal AI Fitness Trainer",
  description:
    "Real-time form analysis using computer vision. Perfect your workout technique with instant feedback, designed specifically for students and fitness beginners.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Atlassian+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased" suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
