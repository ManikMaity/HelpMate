import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Helpmate",
  description: "Get get free career help from the community"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
        attribute={"class"}
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
        {/* header  */}
        <Header/>
        <main className="min-h-screen">
          {children}
        </main>
        {/* footer */}
        <footer className="bg-blue-200 dark:bg-slate-800 py-12">
          <div className="container mx-auto px-4">
          <p>© 2025 Helpmate</p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
