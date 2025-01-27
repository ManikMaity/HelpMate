import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header/Header";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "HelpMate",
  description: "Get get free career help from the community"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
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
        <main className="min-h-screen dark:bg-slate-900 bg-blue-50">
          {children}
        </main>
        {/* footer */}
        <footer className=" dark:bg-slate-950 py-12">
          <div className="container text-center">
          <p className="text-muted-foreground">© 2025 HelpMate</p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
