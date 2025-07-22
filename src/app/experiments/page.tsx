import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { MansoryGrid } from "./_components/MansoryGrid";

export const metadata: Metadata = {
  title: "Concepts",
  description:
    "Discover some UI pieces I used for various projects, these are short videos that show the UI in action.",
  keywords: ["UI", "UX", "web development", "coding", "Minami Haruto"],
  authors: {
    url: "https://minamiharuto.github.io",
    name: "Minami Haruto",
  },
  openGraph: {
    title: "Concepts | Minami Haruto",
    description:
      "Discover some UI pieces I used for various projects, these are short videos that show the UI in action.",
    url: "https://minamiharuto.github.io/concepts",
    locale: "en_US",
    images: [
      {
        url: "https://minamiharuto.github.io/brand/concepts-thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Minami Haruto' Concepts",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
    <div>
      <h1 className="mb-8 text-pretty text-center font-medium text-xl md:text-start md:font-semibold md:text-2xl ">
        UI Concepts
      </h1>
      <section className="min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <MansoryGrid />
        </Suspense>
      </section>
    </div>
  );
}
