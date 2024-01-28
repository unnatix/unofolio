"use client";

import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image src="/Me.png" height={300} width={300} alt="Unnati Gupta" />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1  transition  hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text  hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[900px] w-auto h-auto">
          Unnati Gupta
        </div>
        <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[900px]">
          I do Code &{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Chill
          </span>{" "}
          🍿
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[900px]">
        Eager Master's student in Applied Economics and Data Analysis at Jönköping University, with a focus on econometrics and data science. Experienced in analyst roles. Proficient in Python, Data Analysis, and AWS. With a curious and ambitious personality, I'm passionate about data-driven insights and community service, striving for excellence in economics and technology. 
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:ibrahimmemon930@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
        <div>
          <br />
        </div>
          <div className="text-md flex justify-center">
          <a href="/resume.pdf" download="UnnatiGuota_Resume.pdf">
        <button
        className="z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
         >
        Resume
        </button>
        </a>

        </div>
      </div>
    </div>
  );
};

export default Banner;
