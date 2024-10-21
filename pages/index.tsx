import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import Tag from "@/components/Tag"
import { RoughNotation } from "react-rough-notation";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import { MdxMeta } from "../pages/blog/posts/[slug]";

import { getAllPosts } from "utils/api";

type Props = {
  blogPosts: MdxMeta[];
};

export const meta = {
  description:
    "Robyn Marsden is a Software Engineer based in Kent, United Kingdom. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Robyn Marsden",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/satnaing-dev-og-new.png`,
  siteName: "Robyn Marsden",
  imageAlt: "Robyn Marsden portfolio website",
};

const skills = [
  {
    'tag': 'Solidity',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Cadence',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Token Creation',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'DApp Development',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Agile Development',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Web3.js',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Ethers.js',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'React',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Next',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Nuxt',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Vue',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Laravel',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Material-UI',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Tailwind CSS',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Redux',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'javascript',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'javascript',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'javascript',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'javascript',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'javascript',
    'size': 'lg',
    'count': 10
  }
]


const Home: NextPage<Props> = ({ blogPosts }) => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for contact section
  const contactSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    contactSection && onSectionChange!("contact");
  }, [contactSection]);
  return (
    <>
      <AppHead
        title="Robyn Marsden - A Software Engineer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>Robyn.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <section className="text-center py-4 pt-4 md:pt-6 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto" id="tags" ref={sectionRef}>
              <div className="text-center" ref={elementRef}>
                <RoughNotation
                  type="underline"
                  color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
                  strokeWidth={2}
                  order={1}
                  show={isOnScreen}
                >
                  <h2 className="text-2xl inline-block my-6 font-medium">Skills</h2>
                </RoughNotation>
              </div>
              {skills.map((skill, index) => (
                <Tag name={skill.tag} size={skill.size} count={skill.count} key={index}/>
              ))}
            <ContactSection />
            </section>
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  
  const blogPosts = getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
  ]);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
