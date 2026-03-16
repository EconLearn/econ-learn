import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/profile", "/auth/"],
      },
    ],
    sitemap: "https://econlearn.org/sitemap.xml",
  };
}
