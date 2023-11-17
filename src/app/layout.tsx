"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/redux/Provider"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  )
}
