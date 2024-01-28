import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
        Hello! I'm a dedicated Master's student specializing in Applied Economics and Data Analysis at Jönköping University, where I immerse myself in the intricate world of econometrics and data science. My academic journey is a blend of rigorous analysis and innovative research, driven by my fascination with how data shapes our understanding of economic phenomena.
          <br />
          My professional experience is marked by various analyst roles, where I've honed my skills in Python, data analysis, and AWS. This experience has not only sharpened my technical abilities but also strengthened my problem-solving and analytical thinking skills.
          <br />
          I am not just about numbers and data; at my core, I am fueled by curiosity and ambition. These traits propel me to delve deeper into data-driven insights, exploring how they can be leveraged for impactful decision-making. My passion extends beyond professional pursuits; I am deeply committed to community service, believing in the power of data to drive social change and improve lives.
          <br />

          As I stride forward in my journey, I am eager to contribute to the field of economics and technology. I strive for excellence in everything I do, constantly seeking new challenges and opportunities to grow. My goal is to merge my technical expertise with my passion for community service, creating a meaningful impact through data-driven solutions.

        </p>
      </div>
    </section>
  );
};

export default About;
