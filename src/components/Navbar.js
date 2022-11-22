import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <a className="flex flex-wrap flex-col title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl">
            J.Matt Miguel
          </a>
          <a className="ml-3 text-sm">Web Developer</a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <div className="flex flex-wrap mr-5 hover:text-white items-center">
          <AiFillLinkedin/>
          <a href="https://www.linkedin.com/in/jamiguel23/">
            LinkedIn
          </a>
          </div>
          <div className="flex flex-wrap mr-5 hover:text-white items-center">
          <AiFillGithub/>
          <a href="https://github.com/jamiguel23">
            GitHub
          </a>
          </div>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
