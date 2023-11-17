import { Noto_Sans } from "next/font/google"
import "./globals.css"
import Providers from "@/redux/Provider"

const noto = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={noto.className}>
      <head></head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
