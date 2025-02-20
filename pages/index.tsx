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
    'tag': 'React',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Angular',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Kendo UI',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Webix',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Material UI',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Bootstrap',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'HTML5',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'CSS3',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'JavaScript',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'TypeScript',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'jQuery',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Node.js',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Express',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Nest',
    'size': 'lg',
    'count': 7
  },
  {
    'tag': 'Laravel',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Django',
    'size': 'lg',
    'count': 7
  },
  {
    'tag': 'Python',
    'size': 'lg',
    'count': 7
  },
  {
    'tag': 'REST API',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'GraphQL',
    'size': 'lg',
    'count': 9
  },
  {
    'tag': 'Prisma',
    'size': 'lg',
    'count': 8
  },
  {
    'tag': 'Microservices',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'MySQL',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'PostgreSQL',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Oracle',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'MongoDB',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Redis',
    'size': 'lg',
    'count': 8
  },
  {
    'tag': 'NoSQL',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Elasticsearch',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Cypress',
    'size': 'lg',
    'count': 8
  },
  {
    'tag': 'Jest',
    'size': 'lg',
    'count': 7
  },
  {
    'tag': 'Jasmine',
    'size': 'lg',
    'count': 3
  },
  {
    'tag': 'TestNG',
    'size': 'lg',
    'count': 6
  },
  {
    'tag': 'Puppeteer',
    'size': 'lg',
    'count': 7
  },
  {
    'tag': 'TDD',
    'size': 'lg',
    'count': 8
  },
  {
    'tag': 'Git',
    'size': 'lg',
    'count': 10
  },
  {
    'tag': 'Jenkins',
    'size': 'lg',
    'count': 7
  },
  {
    'tag': 'Docker',
    'size': 'lg',
    'count': 7
  },
  {
    'tag': 'Kubernetes',
    'size': 'lg',
    'count': 5
  },
  {
    'tag': 'AWS',
    'size': 'lg',
    'count': 8
  },
  {
    'tag': 'API Integration,',
    'size': 'lg',
    'count': 9
  },
  {
    'tag': 'QA Testing',
    'size': 'lg',
    'count': 7
  },
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
            </section>
            <ContactSection />
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
