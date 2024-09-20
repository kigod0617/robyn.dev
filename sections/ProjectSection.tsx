import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/projects/terminal-portfolio.webp";
import haruFashion from "public/projects/haru-fashion.webp";
import haruApi from "public/projects/haru-api.webp";
import astroPaper from "public/projects/astro-paper.webp";
import nextBookstore from "public/projects/next-bookstore.webp";
import shadcnAdmin from "public/projects/shadcn-admin.webp";
import chainlens from "public/projects/chainlens.png";
import horiza from "public/projects/horiza.jpg";
import retroFinance from "public/projects/retro-finance.jpg";
import xb3Finance from "public/projects/xb3-finance.jpg";
import tryraffle from "public/projects/tryraffle.jpg";
import furthermore from "public/projects/furthermore.jpg";

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
    title: "Chainlens",
    type: "Frontend",
    image: (
      <Image
        src={chainlens  }
        sizes="100vw"
        fill
        alt="Chainlens"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Chainlens is a essential EVM blockchain explorer as a service. It offers a user-friendly platform to explore, analyze, and interact with EVM-compatible blockchains. Perfect for web3 network operators, enthusiasts, developers, and newcomers.",
    tags: ["Web3.js", "Solidity", "React", "Typescript", "Twailwind"],
    liveUrl: "https://www.chainlens.com/",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Horiza",
    type: "Backend",
    image: (
      <Image
        src={horiza}
        sizes="100vw"
        fill
        alt="Horiza"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Horiza is a decentralized exchange on the Arbitrum network with an innovative ve(3,3) model and oTokenomics for efficient capital use and steady growth, supported by auto-bribes and emission control. ",
    tags: ["Ethers.js", "Solidity", "React", "Redux", "Material-UI"],
    liveUrl: "https://horiza.io/",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Retro Finance",
    type: "Backend",
    image: (
      <Image
        src={retroFinance}
        sizes="100vw"
        fill
        alt="Retro Finance"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Retro is a decentralized exchange on the Polygon network that combines ve(3,3) tokenomics with innovative features like automatic bribes and concentrated liquidity pools to maximize yields and incentives.",
    tags: ["Polygon", "Solidity", "Next", "Bootstrap", "Express"],
    liveUrl: "https://haru-fashion.vercel.app/",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/satnaing/haru-fashion",
  },
  {
    title: "Xb3 Finance",
    type: "Frontend",
    image: (
      <Image
        src={xb3Finance}
        sizes="100vw"
        fill
        alt="Xb3 Finance"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "XB3 is a protocol on the Ethereum network that bridges traditional finance with DeFi, providing secure, regulated access for institutions and integrating with Curve and Convex for enhanced yield opportunities.",
    tags: ["DeFi", "Solidity", "Nuxt", "Tailwind"],
    liveUrl: "https://xb3.finance/",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "Tryraffle",
    type: "Frontend",
    image: (
      <Image
        src={tryraffle}
        sizes="100vw"
        fill
        alt="Tryraffle"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Tryraffle is an innovative, blockchain-powered lottery platform built on BASE network, offering players a chance to participate in three distinct games with unique mechanics.",
    tags: ["Solidity", "Hardhat ", "Python", "PostgreSQL", "React Native", "Docker Compose"],
    liveUrl: "https://tryraffle.io/",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/satnaing/next-bookstore",
  },
  {
    title: "Furthermore",
    type: "frontend",
    image: (
      <Image
        src={furthermore}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Furthermore, the platform is designed with user-centric features, ensuring a smooth navigational experience regardless of the user’s tech-savviness.",
    tags: ["Solidity", "React", "IPFS"],
    liveUrl: "https://cyberbee.dev/case-studies/nft-marketplace/",
    bgColor: "bg-[#FBFBFB]",
  },
];

export default ProjectSection;
