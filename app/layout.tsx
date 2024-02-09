import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

async function getLastUpdateAt() {
  const lastUpdateAt = new Date().toISOString()

  return lastUpdateAt
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const lastUpdateAt = await getLastUpdateAt()

  return (
    <>
      <html lang="ko" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="mx-auto my-12 max-w-[42rem] px-6 antialiased sm:my-32 md:my-16">
              <SiteHeader />
              {children}
              <SiteFooter lastUpdateAt={lastUpdateAt} />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
