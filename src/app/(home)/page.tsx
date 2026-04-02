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

const CircularGallery = lazy(
  () => import("@/components/circularGallery/circularGallery"),
);
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
              <h2>ABOUT ME</h2>
            </hgroup>
            <p>
              My days are filled with small joys — reading quietly, exploring
              worlds through video, walking and thinking, cycling through the
              night breeze, sharing time with family, and coding late into the
              night. Whether through a web app or a keyboard, I love creating
              something cool that everyone can recognize and enjoy. And late
              into the night, I immerse myself in coding — building web apps,
              designing clean interfaces, and solving problems — turning ideas
              into tangible, usable, and <strong>production-ready</strong>{" "}
              creations. Whether behind a camera, on a bike, or at the keyboard,
              I strive to create experiences that are engaging, memorable, and{" "}
              <strong>instantly recognized as something cool</strong>.
            </p>
          </section>
          <section className="flex flex-col gap-5">
            <hgroup className="balance mt-4 flex flex-col gap-5 font-medium text-3xl">
              <h2>Crafting clean code with a clear conscience.</h2>
            </hgroup>

            <p>
              With {yearSince2018}+ years of hands-on experience in web
              development, I have worked on projects ranging from small startups
              to large enterprises. I turn design specifications into{" "}
              <strong>smooth, user-friendly</strong> interfaces with{" "}
              <strong>production-ready</strong> code. Consistently earning
              positive feedback and building long-term partnerships, I deliver
              on time and exceed client expectations. I take projects from
              concept to launch — architecting and designing clean systems,
              building reusable <strong>UI/UX components,</strong> and{" "}
              <strong>optimizing</strong> rendering for speed and{" "}
              <strong>scalability</strong>. I thrive at the intersection of
              engineering and design, creating products that are intuitive,
              fast, and visually engaging. Whether working independently, owning
              features within a team, or co-founding a service platform, my
              focus remains the same: write{" "}
              <strong>clean, scalable code</strong> and deliver exceptional user
              experiences.
            </p>
          </section>

          <section
            className="flex flex-col gap-5  scroll-mt-20"
            id="experiences"
          >
            <hgroup className="balance mt-4 flex flex-col gap-5 font-medium text-3xl">
              <h2>Professional Experiences</h2>
            </hgroup>
            <div className="flex flex-col p-1 w-full">
              <p className="mb-2">
                I began my freelance journey as a PHP backend developer{" "}
                <strong>{yearSince2018} years ago</strong>, working with
                startup-oriented frameworks like <strong>CodeIgniter</strong>{" "}
                and <strong>Laravel</strong>.<br />
                Over time, I transitioned into frontend development, gaining
                deep experience with <strong>React.js</strong>,{" "}
                <strong>Angular.js</strong>, <strong>Vue.js</strong>, and most
                recently, <strong>Next.js</strong>.<br />
                On the backend side, I'm proficient with{" "}
                <strong>Node.js</strong>, <strong>Express.js</strong>,{" "}
                <strong>FastAPI</strong>, and <strong>Django</strong>, and I’m
                also familiar with cloud services like{" "}
                <strong>AWS, Vercel, Netlify, DigitalOcean</strong> and{" "}
                <strong>Firebase</strong>.<br />
                With a strong focus on quality and detail, I bring ideas to life
                in a way that creates <strong>kando</strong>&mdash;a sense of
                emotional impact and lasting impression.
              </p>
              <WorkExperienceCard />
            </div>
          </section>
        </article>

        <section>
          <hgroup className="mt-4  mb-2 flex flex-col gap-5 font-medium text-3xl">
            <h2>
              Pandemic Relief Efforts, Building COVID-19 Tracking Tools: My
              Volunteer Experience
            </h2>
          </hgroup>

          <p>
            During the pandemic, I had the privilege of volunteering as a
            developer for the COVID-19 tracking and monitoring platforms of
            Tokyo and Osaka prefectures. I contributed to the development of
            real-time data analysis tools that played a key role in tracking the
            spread of the virus and supporting quick response measures by the
            authorities. It was a rewarding experience to be part of a team that
            worked together to protect our communities and contribute to public
            health efforts during such a critical time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Tokyo-Covid19-Graph
              </h3>
              <p className="text-gray-600 mb-4">
                A cluster graph tool that visualizes COVID-19 data in Tokyo,
                helping users to understand how the virus clusters are spreading
                across the city.
              </p>
              <p>
                <span className="font-semibold text-gray-700 m-2">Link:</span>
                <a
                  href="https://github.com/angryred027/Tokyo-Covid19-Graph"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Osaka-Covid19
              </h3>
              <p className="text-gray-600 mb-4">
                A reporting tool that organizes and visualizes the COVID-19
                infection status in Osaka Prefecture, making it easier for
                citizens and officials to understand the spread of the virus.
              </p>
              <p>
                <span className="font-semibold text-gray-700 m-2">Link:</span>
                <a
                  href="https://github.com/angryred027/Osaka-Covid19"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Osaka-Covid19-Calendar
              </h3>
              <p className="text-gray-600 mb-4">
                A calendar-based tool that displays the daily COVID-19 infection
                status for Osaka Prefecture, allowing users to track the virus
                spread over time in a clear and accessible format.
              </p>
              <p>
                <span className="font-semibold text-gray-700 m-2">Link:</span>
                <a
                  href="https://github.com/angryred027/Osaka-Covid19-Calendar"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Tokyo-Covid19-Crawler
              </h3>
              <p className="text-gray-600 mb-4">
                A crawler program that automatically fetches and collects the
                latest COVID-19 data related to Tokyo, providing up-to-date
                information for further analysis and reporting.
              </p>
              <p>
                <span className="font-semibold text-gray-700 m-2">Link:</span>
                <a
                  href="https://github.com/angryred027/Tokyo-Covid19-Crawler"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Osaka-Covid19-Statistics
              </h3>
              <p className="text-gray-600 mb-4">
                The source code for a website that tracks and visualizes
                real-time COVID-19 data in Osaka Prefecture, providing accurate
                and up-to-date information to citizens and officials.
              </p>
              <p>
                <span className="font-semibold text-gray-700 m-2">Link:</span>
                <a
                  href="https://github.com/angryred027/Osaka-Covid19-Statistics"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Tokyo-Covid19
              </h3>
              <p className="text-gray-600 mb-4">
                The source code for a website that tracks and visualizes
                real-time COVID-19 data in Tokyo Prefecture, ensuring that
                citizens and authorities have access to the most accurate and
                timely information.
              </p>
              <p>
                <span className="font-semibold text-gray-700 m-2">Link:</span>
                <a
                  href="https://github.com/angryred027/Tokyo-Covid19"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <hgroup className="balance mt-4 flex flex-col gap-5 font-medium text-3xl">
            <h2>
              Building responsive, high-performance frontends for all devices.
            </h2>
          </hgroup>

          <p>
            Specializing in mobile-first development and clean UI implementation
            using modern frameworks. I turn design specs into smooth,
            user-friendly interfaces with <strong>smooth, user-friendly</strong>{" "}
            and <strong>production-ready</strong> code.
          </p>
        </section>
        <ThreePhones images={imagesPhones} />

        <hgroup className="balance mt-4 flex flex-col gap-5 font-medium text-3xl">
          <h2>
            I'm a web full-stack software engineer with strong expertise in both
            backend and frontend development.
          </h2>
        </hgroup>
        <p>
          Over the years, I’ve successfully delivered diverse projects across
          web development—ranging from <strong>custom CMS platforms</strong> and{" "}
          <strong>e-commerce stores</strong> to{" "}
          <strong>cloud-based dashboards</strong> and{" "}
          <strong>API integrations</strong>.<br />
          Each project reflects my ability to build clean, scalable, and
          maintainable solutions using tools like <strong>Next.js</strong>,{" "}
          <strong>React</strong>, <strong>Node.js</strong>, and{" "}
          <strong>Django</strong>.<br />
          From fast MVPs to production-grade apps, I focus on delivering results
          that balance <strong>performance</strong>, <strong>UX</strong>, and{" "}
          <strong>business value</strong>.<br />
          My goal is to bring technical clarity and emotional impact—delivering
          solutions that resonate with users and clients alike.
        </p>

        {/* <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
          <BlogLink slug="blog/whyHaveSideProjects" name="Why you should have a side project" />
          <BlogLink slug="blog/chooseSideProjects" name="How to choose a side project" />
        </div> */}
        {/* <ProjectsList projects={firstProjects} /> */}

        <BlogLink slug="/projects" name="See my recent projects" />

        <hgroup className="balance mt-16 flex flex-col gap-5 font-medium text-3xl">
          <h2>
            {" "}
            I&apos;m passionate about performance and{" "}
            <strong>accessibility</strong>
          </h2>
        </hgroup>
        <p>
          I’ve built several <strong>eCommerce</strong> platforms and
          collaborated closely with multiple offshore teams to deliver them
          successfully. I strive to build <strong>inclusive</strong>,{" "}
          <strong>fast</strong>, and <strong>reliable</strong> web applications
          that perform seamlessly across all devices and browsers. Achieving
          high standards in both <strong>SEO</strong> and performance is
          essential to the success of every digital product I build.
        </p>
        <div className="md:-space-y-30 flex flex-col max-md:gap-6">
          {["recent4", "recent3", "recent2", "recent1", "recent0"].map(
            (img, i) => (
              <a
                key={img}
                href={`https://thesnuslife.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Image
                  className="w-full show-animation rounded-3xl border-4 border-secondary-200 object-cover scale-75 object-top shadow-lg md:h-[400px] dark:border-secondary-700"
                  alt="Recent completed projects"
                  title="Recent completed projects"
                  src={`/media/other/${img}.webp`}
                  width={1000}
                  height={800}
                />
              </a>
            ),
          )}
        </div>
        <strong>
          These are a few selected projects that I had the opportunity to
          complete successfully.
        </strong>

        <section className="-space-y-12 flex flex-col gap-2">
          <hgroup className="balance mt-16 flex flex-col gap-5 font-medium text-3xl my-2">
            <h2>Let's make Kando together!</h2>
          </hgroup>
          <p>
            I am always open to collaborating with both onshore and offshore
            teams. With a passion for learning and adapting to new technologies
            and languages, I excel at designing and optimizing software
            solutions. I thrive on tackling complex challenges and am constantly
            growing through hands-on development and collaboration with talented
            teams. If you have an exciting idea, let’s bring it to life
            together! Feel free to reach out—I’d love to hear from you and
            explore how we can make it happen.
          </p>
        </section>
      </main>
    </section>
  );
}
