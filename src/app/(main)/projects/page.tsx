export const dynamic = 'force-dynamic';

import { ProjectCard } from "@/components/viewer/projects/project-card";
import connectDB from "@/db/connectDB"
import ProjectModel from "@/models/ProjectsModel"
import { ProjectType } from "@/types/types";
import { Metadata } from "next";
import { ScrollFadeIn } from "@/components/scroll-fade-in";

export const metadata: Metadata = {
    title: "Projects | Nikhil Sutar Portfolio",
    description:
      "Explore a curated collection of projects by Nikhil Sutar, full-stack software developer specializing in Next.js, React, Node.js, and AI-powered solutions. Each project reflects his skills in building responsive, high-performance web applications.",
    keywords: [
      "Nikhil Sutar projects",
      "full-stack project showcase",
      "Next.js portfolio",
      "React developer work",
      "Node.js projects",
      "MongoDB web apps",
      "AI/ML development",
      "Web development portfolio",
      "TypeScript projects",
      "modern web design",
    ],
    alternates: {
      canonical: "https://nikhilsutar.vercel.app/projects",
    },
    openGraph: {
      title: "Nikhil Sutar | Project Showcase",
      description:
        "From concept to deployment, browse through Nikhil Sutar's professional portfolio including MERN stack and AI-integrated projects.",
      url: "https://nikhilsutar.vercel.app/projects",
      images: [
        {
          url: "https://nikhlsutar.vercel.app/og-projects.png", // update with real image
          width: 1200,
          height: 630,
          alt: "Projects by Nikhil Sutar",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nikhil Sutar | Projects",
      description:
        "Discover full-stack applications and AI-integrated solutions built by Nikhil Sutar using modern technologies like Next.js, React, and Node.js.",
      site: "@nikhilsutar_",
      creator: "@nikhilsutar_",
      images: ["https://nikhilsutar.vercel.app/og-projects.png"],
    },
  };

export default async function Projects() {
    await connectDB();

    const projects: ProjectType[] = await ProjectModel.find().populate('techs', '_id skill logo').sort({ createdAt: -1 });

    return (
        <div className="w-full min-h-screen py-36">
            <div className="w-full  pb-16 px-4 sm:pl-8 md:px-8 lg:px-10 transition-all duration-300">
                <ScrollFadeIn direction="left">
                    <h2 className="text-2xl italic md:text-4xl mb-4 font-breeserif dark:text-white bg-gradient-to-br from-zinc-50 to-neutral-200 bg-clip-text text-transparent max-w-4xl transition-all duration-300">
                        From Concept to Code: My Project Journey
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm transition-all duration-300">
                        A collection of projects that reflect my dedication to both craft and creativity.
                    </p>
                </ScrollFadeIn>
            </div>
            <div className="w-full font-lato px-4 md:px-8 gap-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    projects?.length > 0 &&
                    projects?.map((proj, index) => (
                        <ScrollFadeIn key={proj?._id} direction="up" delay={index * 0.1}>
                            <ProjectCard
                                project={proj}
                            />
                        </ScrollFadeIn>
                    ))
                }
            </div>
        </div>
    )
}