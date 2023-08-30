import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tach2 from "../public/assets/Tach2.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl font-semibold tracking-widest text-[#2FA7DD]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Someone who has great ambition to change the world for the better
            through the lines of code that he wrote. With more than 1 years
            experience in web applications. I hope to make unique and different
            breakthroughs in solving problems through technology. Through web
            applications, I hope to become a world-class developer that is
            useful for life.
          </p>
          <p className="py-2 text-gray-600">
            I started learning web development in June 2021 which was the middle
            of a pandemic. I didn&#39;t have much to do so I tried to apply for a
            bootcamp scholarship and luckily got accepted as a SYNRGY Academy
            student for 6 months, next i learn web development from online
            course like Dicoding, Skilvul, and BWA, then started watching lots
            of Youtube videos to explore more about web development especially
            frontend development.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={Tach2} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
