import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: ["en", "ko-kr"],

  defaultLocale: "en",
})

export const config = {
  matcher: ["/", "/(en|ko-kr)/:path*"],
}
