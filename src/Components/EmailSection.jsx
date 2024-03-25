
import GithubIcon from "../assets/github-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";


const EmailSection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-42 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let{"'"}s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I{"'"}m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I{"'"}ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a target="_blank" href="https://github.com/vignesh1812/">
            <img src={GithubIcon} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/vigneshwaran-m-b06b2826">
            <img src={LinkedinIcon} />
          </a>
        </div>
      </div>
      <div>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="outline-none bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-[#18191E] outline-none border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="outline-none bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;