
// import Image from "next/image";
// import heroImage from "../../public/images/my.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion'
import resume from '../assets/resume/resume1.pdf'
import my from '../assets/images/my.png'
const HeroSection = () => {
  return (
    <section id="profile">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
        initial={{
          opacity: 0,
          scale:0.5,
        }}
          animate={{
            opacity: 1,
            scale:1,
          }}

          transition={{
            duration: 0.4,
            delay:0.2
          }}
          className="col-span-8 place-self-center text-center  sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:leading-normal lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400  to-pink-500 ">
              Hello,I{"'"}m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Vignesh",
                1700,
                "Web Developer",
                1700,
                "Fullstack Dev",
                1700
              ]}
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Building Tomorrow{"'"}s Web Today: Your Vision, Our Expertise!🚀✨
          </p>
          <div className="">
            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-2 w-full sm:w-fit hover:bg-slate-200 rounded-full mr-4">
              <a target="_blank" href={"mailto:vigneshcareer1812gmail.com"}>
                Hire me
              </a>
            </button>
            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-0.5 py-0.5 w-full sm:w-fit hover:bg-slate-800 text-white rounded-full mt-3">
              <a download href={resume} className="block bg-[#121212] px-3.5 py-1.5 rounded-full">
                Download Resume
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div 
        initial={{
          opacity: 0,
          scale:0.5,
        }}
          animate={{
            opacity: 1,
            scale:1,
          }}

          transition={{
            duration: 0.4,
            delay:0.2
          }}
         className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className=" rounded-full bg-[#181818] relative w-[250px] h-[250px]">
            <img
              src={my}
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="hero image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
