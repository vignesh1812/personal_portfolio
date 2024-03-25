
// import Image from "next/image";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { IoCodeSlash, IoLogoGithub } from "react-icons/io5";
import proImg from '../assets/images/logo.png'


const ProjectCard = ({ code, imgUrl, title, description }) => {
  return (
    <div className="hover:shadow-[#e739848c]  hover:shadow-md rounded-xl transition duration-300">
      <div
        className="group bg-[#181818]  rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden"
        src={imgUrl}
        alt={title}
        width={300}
        height={200}
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition:"left",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818]  flex transition-all duration-500 items-center  justify-center">
          
         
          <a
            target="_blank"
            href={code ?? "https://github.com/vignesh1812/"}
            className="h-24 w-24 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition duration-500"
          >
            <img src={proImg} className="h-24 w-24 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </a>
        </div>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex  group-hover:bg-opacity-100   transition duration-500 items-center justify-center">
          {/* <Link
            href="/"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link> */}
         
          <a
            target="_blank"
            href={code ?? "https://github.com/vignesh1812/"}
            className="h-14 w-14  relative    group/link"
          >
            <IoLogoGithub className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-100
            " />
          </a>
        </div>
      </div>
      <div className="bg-[#101010] rounded-b-xl py-6 px-4 text-white">
        <h5 className="font-lg  space">{title}</h5>
        <p className="text-[#adb7becd] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
