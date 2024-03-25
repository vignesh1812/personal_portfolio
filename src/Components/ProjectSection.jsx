
import  { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: "Appartment Maintainence",
    description: "Solving Maintainence Issues in Apartment and residencys By Raising Ticket",
    image: "../assets/projects/appartment.png",
    code: "https://github.com/vignesh1812/Appartment_maintainence",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "BLOG MERN Stack",
    description: "Fullstack Blog Appication With Authentication and CRUD operations",
    image: "../assets/projects/blog.png",
    tag: ["All", "Web"],
    code: "https://github.com/vignesh1812/Blog-MERN-Application"
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "E-comemerce Appllication Using React js with Functionalitys like cart and Checkout",
    image: "../assets/projects/ecommerce.png",
    code: "https://github.com/vignesh1812/react_ecommerce",
    tag: ["All", "Web"],
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  
  const cardVariants={
    intial:{
      y:50,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
    },

  }


  //   const handleTagChange = (newTag) => {
  //     setTag(newTag);
  //   };

  return (
    <div  id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-4 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="intial"
           animate={isInView?"animate":"intial"} 
          transition={{
            duration:0.3,
            delay:index*0.4
          }}
          >

            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              code={project.code}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;