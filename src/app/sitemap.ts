import { allBlogs, allProjects } from ".contentlayer/generated";

export default function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://minamiharuto.github.io/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "daily",
    priority: 0.7,
  }));
  const projects = allProjects.map((post) => ({
    url: `https://minamiharuto.github.io/${post.slug}`,
    lastModified: post.startedAt,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const routes = ["", "/blog", "/projects"].map((route) => ({
    url: `https://minamiharuto.github.io${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 1,
  }));

  return [...routes, ...blogs, ...projects];
}
