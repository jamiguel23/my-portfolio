import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import { AiFillFilePdf } from "react-icons/ai";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            List of tools I have experience using
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">

          <img
            className="object-scale-down"
            alt="hero"
            src="./resume.png"
            width="600"
            height="800"
          />

          <div className="flex flex-wrap mr-5 hover:text-white items-center">
            <AiFillFilePdf />
            <a href="./Matt_Miguel.pdf" download="">Download Resume</a>

          </div>
        </div>

        <div className="flex justify-center space-x-3 mt-3">
          <iframe src="https://www.youtube.com/embed/zhJncKmbvdA" title="Coding Challenge" frameBorder="0" allow="fullscreen">

          </iframe>
        </div>
      </div>
    </section>
  );
}
