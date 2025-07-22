import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://minamiharuto.github.io/sitemap.xml",
    host: "https://minamiharuto.github.io",
  };
}
