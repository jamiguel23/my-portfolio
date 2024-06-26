import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Matt.
            <br className="hidden lg:inline-block" />Welcome to my portfolio!
          </h1>
          <p className="mb-8 leading-relaxed">
          As a Software Developer at Providence, I design and implement software solutions using C#, Azure DevOps, and the full Microsoft Office suite. I collaborate with a team of developers and present bi-weekly updates on project progress, milestones, and deliverables to the entire organization. I also work closely with senior developers and project managers daily to gather requirements, prioritize tasks, and meet project deadlines.

          With over two years of experience in full stack web development, I am passionate about creating solutions for life's problems using code. I graduated from Code Fellows coding boot camp in Javascript Development, and I am currently a Teacher Assistant at Code Fellows, where I tailor individual instruction, guidance, and technical support to 100 students at all class levels. I am also a snowsport enthusiast and a former museum guide, inspired by the history and potential of computer technology.
          </p>
          
          <p className="mb-8 leading-relaxed">For a long time, I have wanted to learn how to
            program but due to life’s curveballs there never
            seemed to be enough time. Then, COVID hit and
            suddenly there was all the time in the world due
            to companies and schools eventually 
            transitioning to a remote model. I decided to
            make the most out of the lock-down and dove right
            in. While providing tours at a computer museum,
            I was impressed and inspired by the ability of a
            team working together when creating an app or a
            product. That inspiration gave me a new meaning
            in wanting to create solutions for life’s
            problems using code. As I looked for role
            models, I found that outside the entry and
            mid-levels, I noticed a strong lack of people
            who looked like me in the management, director,
            and C-suite levels. I want to grow and be
            an example to those who look like me that we
            belong in these spaces. I am a Year Up graduate where I
             continued to develop hard-skills like web
            development, software development, and data
            analyzation, in addition to fostering
            soft-skills such as, strong communication,
            adaptability, and leadership. The Year Up
            program gave me a platform where we can
            practice these skills and competencies while
            creating a strong foundation for continued
            growth in all industries.
          </p>

          <p className="mb-8 leading-relaxed">What drives me is my personal experience as a
            child of Filipino immigrants. The struggles many
            immigrant families face are unfortunately
            common, but they are nevertheless unique to the
            individual. What’s even more unique is the way
            an individual deals with these struggles. I cope
            with depression, experienced financial hardship
            such as foreclosing on our family home, and
            forwent the opportunity to attend college to
            work. These were once considered roadblocks but
            now I consider them as essential building blocks
            for a foundation to a stronger me. They are an
            integral part of my strength and motivation, and
            I will continue to rely on them when I am tested
            in both the path to becoming and working as a
            web developer.

          </p>


          <p className="mb-8 leading-relaxed"> Feel free to checkout my old projects linked in
            the Navbar and please don't hesitate to reach
            out on LinkedIn.</p>

          <p> Ever onward,</p>

          <p className="mb-8 leading-relaxed"> J.Matthew Miguel</p>



          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>

        </div>


        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me2.jpeg"
          />

          <div className="flex justify-center space-x-3 mt-3">
            

          </div>
          <div className="flex flex-col justify-center mt-3">
            <iframe src="https://www.youtube.com/embed/k0bfyRWeEeU" title="45 second pitch" frameBorder="0" allow="fullscreen">
            </iframe>


          </div>

        </div>

      </div>
    </section>
  );
}
