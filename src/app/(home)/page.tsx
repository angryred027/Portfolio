"use client";

import { sortedProjects } from "@/lib/sortedProjects";
import Image from "next/image";
import { BlogLink } from "../../components/BlogLink";
import { Header } from "../../components/Layout/header/header";
import { ProjectsList } from "../../components/Projects/ProjectList/ProjectsList";
import { ThreePhones } from "../../components/home/ThreePhones";
import { LoadingGallery } from "../../components/circularGallery/loading-gallery";
import { lazy, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import WorkExperienceCard from "@/components/Experiences/ExperienceCard";
import { AnimatedLogo } from "@/components/AnimatedLogo";

const CircularGallery = lazy(() => import("@/components/circularGallery/circularGallery"));
const imagesPhones = [
  {
    src: "/media/other/utkonos.png",
    url: "https://utkonos.ru/",
  },
  {
    src: "/media/other/swimming.png",
    url: "https://effortlessswimming.com/",
  },
  {
    src: "/media/other/skandiq.png",
    url: "https://skandiq.dk/",
  },
];

export default function Page() {
  const firstProjects = sortedProjects.slice(0, 4);
  const thisYear = new Date().getFullYear();
  const yearSince2018 = thisYear - 2018;

  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo === "experiences") {
      const el = document.getElementById("experiences");
      if (el) {
        // Delay for smooth scroll after render
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams]);

  return (
    <section>
      <Header />
      <main className="flex w-full flex-1 flex-col gap-8 p-8 md:p-4">
        <div>
          <div className="relative w-full py-2">
            <Image
              className="show-animation rounded-3xl"
              alt="Quote from me"
              title="Quote from me"
              src="/media/other/quote.webp"
              width={800}
              height={600}
            />
          </div>
        </div>
        <article className="flex flex-col gap-8">
          <section className="flex flex-col gap-5">
            <hgroup className="balance mt-4 flex flex-col gap-5 font-medium text-3xl">
              <h2>Crafting clean code with a clear conscience.</h2>
            </hgroup>

            <p>
              With {yearSince2018}+ years of hands-on experience in web development, and I&apos;ve worked on a variety of projects, from small startups to large enterprises.
              I turn design specs into smooth, user-friendly interfaces with <strong>smooth, user-friendly</strong> and <strong>production-ready</strong>  code.<br></br>
              Consistently earned positive feedback and long-term partnerships by delivering on time and exceeding client expectations.<br></br>
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <hgroup className="balance mt-4 flex flex-col gap-5 font-medium text-3xl">
              <h2>Professional Experiences</h2>
            </hgroup>
            <div id="experiences" className="flex flex-col p-1 w-full scroll-mt-20">
              <p className="mb-2">
                I began my freelance journey as a PHP backend developer <strong>{yearSince2018} years ago</strong>, working with startup-oriented frameworks like <strong>CodeIgniter</strong> and <strong>Laravel</strong>.<br />
                Over time, I transitioned into frontend development, gaining deep experience with <strong>React.js</strong>, <strong>Angular.js</strong>, <strong>Vue.js</strong>, and most recently, <strong>Next.js</strong>.<br />
                On the backend side, I'm proficient with <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>FastAPI</strong>, and <strong>Django</strong>, and I’m also familiar with cloud services like <strong>AWS, Vercel, Netlify, DigitalOcean</strong> and <strong>Firebase</strong>.<br />
                With a strong focus on quality and detail, I bring ideas to life in a way that creates <strong>kando</strong>&mdash;a sense of emotional impact and lasting impression.
              </p>
              <WorkExperienceCard />
            </div>
          </section>
        </article>
        <section className="flex flex-col gap-5">
          <hgroup className="balance mt-4 flex flex-col gap-5 font-medium text-3xl">
            <h2>Building responsive, high-performance frontends for all devices.</h2>
          </hgroup>

          <p>
            Specializing in mobile-first development and clean UI implementation using modern frameworks.
            I turn design specs into smooth, user-friendly interfaces with <strong>smooth, user-friendly</strong> and <strong>production-ready</strong>  code.
          </p>
        </section>
        <ThreePhones images={imagesPhones} />

        <hgroup className="balance mt-4 flex flex-col gap-5 font-medium text-3xl">

          <h2>I'm a web full-stack developer with strong expertise in both backend and frontend development.</h2>
        </hgroup>
        <p>
          Over the years, I’ve successfully delivered diverse projects across web development—ranging from <strong>custom CMS platforms</strong> and <strong>e-commerce stores</strong> to <strong>cloud-based dashboards</strong> and <strong>API integrations</strong>.<br />
          Each project reflects my ability to build clean, scalable, and maintainable solutions using tools like <strong>Next.js</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>Django</strong>.<br />
          From fast MVPs to production-grade apps, I focus on delivering results that balance <strong>performance</strong>, <strong>UX</strong>, and <strong>business value</strong>.<br />
          My goal is to bring technical clarity and emotional impact—delivering solutions that resonate with users and clients alike.
        </p>

        {/* <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
          <BlogLink slug="blog/whyHaveSideProjects" name="Why you should have a side project" />
          <BlogLink slug="blog/chooseSideProjects" name="How to choose a side project" />
        </div> */}
        {/* <ProjectsList projects={firstProjects} /> */}

        <BlogLink slug="/projects" name="See my recent projects" />

        <hgroup className="balance mt-16 flex flex-col gap-5 font-medium text-3xl">
          <h2> I&apos;m passionate about performance and  <strong>accessibility</strong></h2>
        </hgroup>
        <p>
          I strive to build <strong>inclusive</strong>, <strong>fast</strong>, and <strong>reliable</strong> web applications that perform seamlessly across all devices and browsers.
          Achieving high standards in both <strong>SEO</strong> and performance is essential to the success of every digital product I build.
        </p>
        <div className="md:-space-y-30 flex flex-col max-md:gap-6">
          {['recent4', 'recent3', 'recent2', 'recent1'].map((img, i) => (
            <Image
              key={img}
              className="w-full show-animation rounded-3xl border-4 border-secondary-200 object-cover scale-75 object-top shadow-lg md:h-[400px] dark:border-secondary-700"
              alt="Recent completed projects"
              title="Recent completed projects"
              src={`/media/other/${img}.webp`}
              width={1000}
              height={800}
            />
          ))}
        </div>
        <strong>These are a few selected projects that I had the opportunity to complete successfully.</strong>

        <section className="-space-y-12 flex flex-col gap-2">
          <hgroup className="balance mt-16 flex flex-col gap-5 font-medium text-3xl my-2">
            <h2>Moments captured, memories lived!</h2>
          </hgroup>
          <p>
            Each moment captured holds a quiet story — a reflection of beauty, emotion, and the fleeting nature of time.
          </p>
          <div className="relative h-[550px] w-full">
            <div className="sticky top-0 left-0 w-full">
              <div className="-translate-x-1/2 absolute inset-x-0 top-0 left-1/2 h-[600px] w-screen">
                <Suspense fallback={<LoadingGallery />}>
                  <CircularGallery bend={0.3} textColor="#ffffff" borderRadius={0.05} />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
