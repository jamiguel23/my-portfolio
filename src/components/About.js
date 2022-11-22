import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Matt.
            <br className="hidden lg:inline-block" />Welcome to my Portfolio!
          </h1>
          <p className="mb-8 leading-relaxed">
            Software developer and former Pricing Analyst
            with Zillow Group with home pricing analytics
            and customer service background driven to
            continue education in web development while
            proactively looking to obtain a software
            engineer position in a fast-paced organization
            where exceptional technical skills and ability
            to quickly adapt to change are essential.
          </p>
          <p className="mb-8 leading-relaxed">For a long time, I have wanted to learn how to
            program but due to life’s curveballs there never
            seemed to be enough time. Then, COVID hit and
            suddenly there was all the time in the world due
            to companies and schools eventually
            transitioning to a remote model. I decided to
            make the most out of the lockdown and dove right
            in. While providing tours at a computer museum,
            I was impressed and inspired by the ability of a
            team working together when creating an app or a
            product. That inspiration gave me a new meaning
            in wanting to create solutions for life’s
            problems using code. As I looked for role
            models, I found that outside the entry and
            mid-levels, I noticed a strong lack of people
            who looked like me in the management, director,
            and C-suite levels. How can my demography be the
            second most in the industry but almost never in
            these types of positions? I want to grow and be
            an example to those who look like me that we
            belong in these spaces. I am currently a young
            professional with the Year Up program where I
            have continued to develop hard-skills like web
            development, software development, and data
            analyzation, in addition to fostering
            soft-skills such as, strong communication,
            adaptability, and leadership. The Year Up
            program gives me a platform where we can
            practice these skills and competencies while
            creating a strong foundation for continued
            growth in not just the tech industry but in all.
          </p>

          <p className="mb-8 leading-relaxed">Prior to my time at Year Up, I have held various
            roles. Mostly working in different forms of
            customer service through travel companies like
            Greyhound and BoltBus, I found true inspiration
            for my future working as a tour guide at the
            Living Computer Museum. Interacting and talking
            about these older machines was beyond
            fascinating to me. I knew that I wanted to move
            away from customer service and into more
            technical roles which led to my most recent role
            as a Pricing Analyst with Zillow Group. Though I
            enjoyed my role, it did not give me enough sense
            of fulfillment. There is something inside me
            that needs to be fulfilled. The exploration of
            its source feels innate, and I want it deeply.
            Of course, wanting something bad enough is not
            good enough, and convincing others of this
            desire can be difficult. However, in lieu of a
            formal background in computer science, I draw
            from my experiences in my drive to become a
            software developer</p>

          <p className="mb-8 leading-relaxed">What drives me is my personal experience as a
            child of Filipino immigrants. The struggles many
            immigrant families face are unfortunately
            common, but they are nevertheless unique to the
            individual. What’s even more unique is the way
            an individual deals with these struggles. I cope
            with depression, experienced financial hardship
            such as foreclosing on our family home, and
            forgoed the opportunity to attend college to
            work. These were once considered roadblocks but
            now I consider them as essential building blocks
            for a foundation to a stronger me. They are an
            integral part of my strength and motivation, and
            I will continue to rely on them when I am tested
            in both the path to becoming and working as a
            software developer.

          </p>

          <p className="mb-8 leading-relaxed">As mentioned above, along with my immense passion
            for software development, I am confident that I
            can excel in roles as a software developer and
            be a proven example that many talented people
            who come from non-traditional backgrounds, when
            presented with the opportunity, can become
            successful in the tech industry.</p>

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
            src="./me.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
