import { FaFacebook, FaGithub } from "react-icons/fa";
import img from "../../../public/Pet-Adoption.png";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white shadow-2xl dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#">
          <img className="w-auto h-7" src={img} alt="" />
        </a>

        <p className="text-sm text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

        <div className="flex -mx-2">
          <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
          <IoLogoTwitter className="text-3xl" />
          </a>

          <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
          <FaFacebook className="text-3xl" />
          </a>

          <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
          <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
