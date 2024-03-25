
import  { useState, useTransition } from "react";
import TabButton from "./TabButton";
import {  motion } from "framer-motion";
import about from '../assets/images/about-image.png';

const skills = [
  "Html", "Css", "Javascript", "Tailwindcss", "Nextjs", "Bootstrap", "Typescript", "Reactjs", "Nodejs", "Express", "MongoDB", "Mysql", "Redux", "Socket IO", "Wordpress(CMS)", "Git", "Github"];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex items-center  gap-2 flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="block  px-3 text-sm py-0.5 border rounded-full hover:text-pink-500 transition duration-200">{skill}</span>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of science in Computer Science</li>
        <li>Higher Secondary Certificate(HSC)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer Intern At Senchola Technology Solutions</li>
        <li>Python Essential Course,CISCO Network Academy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16">
        <motion.div 
        initial={
          {translateX:"-1000px",
        opacity:0.2}
      }
          animate={{
            translateX:"0px",
            opacity:1
          }}

          transition={{
            duration:0.7,
            delay:0.3
          }}
      >

          <img src={about} className="" width={500} height={500} alt="about me" />
        </motion.div>
        <motion.div
        initial={
          {translateX:"1000px",
        opacity:0.2}
      }
          animate={{
            translateX:"0px",
            opacity:1
          }}

          transition={{
            duration:0.7,
            delay:0.3
          }}

        className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDB,
            Mysql, HTML, CSS,Typescript,Git and Github. I am a quick learner and
            I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-7">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
