import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import artlist from "public/projects/artlist.png";
import blueprintsys from "public/projects/blueprintsys.png";
import bitsten from "public/projects/bitsten.png";
import simpleex from "public/projects/simpleex.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Artlist",
    type: "Fullstack",
    image: (
      <Image
        src={artlist  }
        sizes="100vw"
        fill
        alt="Artlist"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Artlist: Subscription platform for royalty-free music, SFX, and footage. Offers user/creator interfaces, advanced search, app integration, custom recommendations (by SoftTeco), and a redesigned FXhome.",
    tags: ["Angular", "Laravel", "React", "AWS", "Microsoft Azure"],
    liveUrl: "https://artlist.io/",
    bgColor: "bg-[#9FD0E3]",
  },
  {
    title: "Blueprintsys",
    type: "Frontend",
    image: (
      <Image
        src={blueprintsys}
        sizes="100vw"
        fill
        alt="blueprintsys"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Blueprint: Helps enterprises scale to Agile by aligning business goals and IT deliverables. It offers visual modeling, process automation, artifact reuse, and task management, making it a leading solution in the market.",
    tags: ["Angular", "TypeScript", "RxJS", "SCSS", "Webpack"],
    liveUrl: "https://horiza.io/",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Bitsten",
    type: "Fullstack",
    image: (
      <Image
        src={bitsten}
        sizes="100vw"
        fill
        alt="Bitsten"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Bitsten: Core infrastructure project for blockchain ventures, focusing on secure and scalable cryptocurrency exchange services. Designed to support emerging blockchain applications and drive innovation.",
    tags: ["Next js", "TypeScript", "RestAPI", "Laravel", "Kubernetes"],
    liveUrl: "https://bitsten.com/",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Simpleex",
    type: "Fullstack",
    image: (
      <Image
        src={simpleex}
        sizes="100vw"
        fill
        alt="Simpleex"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Simpleex: A secure and efficient SaaS P2P platform designed to facilitate seamless cryptocurrency exchanges. It offers a user-friendly interface and robust security features, ensuring safe transactions for users.",
    tags: ["React", "PHP", "MySQL", "RestAPI"],
    liveUrl: "https://simpleex.co/",
    bgColor: "bg-[#C5E4E7]",
  },
];

export default ProjectSection;
