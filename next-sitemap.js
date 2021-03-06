/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://sitemap-anime.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/api" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
  exclude: ["/api"],
};
