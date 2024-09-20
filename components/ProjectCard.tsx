import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  index: number;
  project: {
    title: string;
    type: string;
    image: JSX.Element;
    desc: string;
    tags: string[];
    bgColor: string;
    liveUrl: string,
  };
};

const ProjectCard: React.FC<Props> = ({ index, project }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const even = index % 2 === 0 ? true : false;

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `70% bottom`,
      },
    });

    tl.fromTo(
      q(".project-image"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(q(".project-text"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
      .fromTo(
        q(".project-desc"),
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 },
        "<10%"
      )
      .fromTo(
        q(".project-tags"),
        { y: -40 },
        { y: 0, stagger: 0.1, ease: "Elastic.easeOut" },
        "<25%"
      );
  }, []);

  const [starCount, setStarCount] = useState();
  const [starCountUrl, setStarCountUrl] = useState();

  return (
    <div ref={sectionRef} className={`md:basis-1/2 md:px-8 py-2 md:py-4`}>
      <div className={`project-card project-card-${index}`}>
        <div className="overflow-hidden">
          <div
            className={`project-image ${project.bgColor} relative aspect-[16/9]`}
          >
            {project.image}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="project-text flex items-center justify-between">
            <h3 className=" text-marrsgreen dark:text-carrigreen text-lg my-1 font-medium">
              {project.title}
            </h3>
            <div className="flex items-center space-x-5 sm:space-x-3 my-2 sm:my-0 mr-[0.1rem]">
              <a
                href={project.liveUrl}
                title={`See live demo of '${project.title}'`}
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 scale-125 sm:scale-100 bg-cardlight dark:bg-carddark hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-1 hover:-rotate-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="project-desc">{project.desc}</p>
        </div>
        <ul
          aria-label={`Tech Stack used in ${project.title}`}
          className={`flex flex-wrap mt-2 mb-4 md:mt-2 md:mb-6 text-sm overflow-hidden`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`project-tags mr-2 my-1 bg-[#E2EFEF] dark:bg-carddark py-1 px-2 rounded`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
