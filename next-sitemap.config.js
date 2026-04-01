/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://enr-j.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/mentions-legales", "/politique-confidentialite", "/cgv"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
  transform: async (config, path) => {
    // Higher priority for key pages
    const highPriority = ["/", "/simulateur", "/contact"];
    const medPriority = [
      "/hangars-agricoles",
      "/toitures-industrielles",
      "/ombrieres-parking",
      "/tiers-investissement",
      "/realisations",
      "/blog",
      "/a-propos",
      "/equipe",
      "/faq",
    ];

    let priority = config.priority;
    let changefreq = config.changefreq;

    if (highPriority.includes(path)) {
      priority = 1.0;
      changefreq = "daily";
    } else if (medPriority.includes(path)) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/blog/")) {
      priority = 0.6;
      changefreq = "monthly";
    } else if (path.startsWith("/installateur-panneau-solaire/")) {
      priority = 0.5;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
