import { ProjectsList } from "@/components/Projects/ProjectList/ProjectsList";
import { sortedProjects } from "@/lib/sortedProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Discover my recent projects and achievements.",
  keywords: ["projects", "portfolio", "web development", "coding", "Minami Haruto"],
  authors: {
    url: "https://minamiharuto.github.io",
    name: "Minami Haruto",
  },
  openGraph: {
    title: "Projects | Minami Haruto",
    description: "Discover my recent projects and achievements, get to know my work and how I can help you.",
    url: "https://minamiharuto.github.io/projects",
    locale: "en_US",
    images: [
      {
        url: "https://minamiharuto.github.io/brand/projects-thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Minami Haruto' projects preview",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <h1 className="mb-8 text-pretty text-center font-medium text-xl md:text-start md:font-semibold md:text-2xl ">
        Discover my recent Projects
      </h1>
      <ProjectsList projects={sortedProjects} />
    </>
  );
}
