import type { Metadata } from "next"
import { Calistoga, Inter } from "next/font/google"

import { Dock } from "@/components/macro/dock"

import "./globals.css"

import { Footer } from "@/components/macro/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Made by @msafdev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Dock />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
