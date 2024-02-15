import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: ["en", "ko"],

  defaultLocale: "en",
})

export const config = {
  matcher: ["/", "/(en|ko)/:path*"],
}
