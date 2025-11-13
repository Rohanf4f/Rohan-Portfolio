"use client";
import { FaInstagram, FaReact } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import React from "react";
import "../app/globals.css";

// 🧰 Skill Groups
const skillGroups = [
  {
    title: "Programming Languages",
    icons: [
      { name: "Python", url: "https://skillicons.dev/icons?i=python" },
      { name: "Java", url: "https://skillicons.dev/icons?i=java" },
      { name: "Solidity", url: "https://skillicons.dev/icons?i=solidity" },
      { name: "HTML", url: "https://skillicons.dev/icons?i=html" },
      { name: "JavaScript", url: "https://skillicons.dev/icons?i=js" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icons: [
      { name: "FastAPI", url: "https://skillicons.dev/icons?i=fastapi" },
      { name: "Flask", url: "https://skillicons.dev/icons?i=flask" },
      { name: "React", url: "https://skillicons.dev/icons?i=react" },
      { name: "NodeJS", url: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express", url: "https://skillicons.dev/icons?i=express" },
      { name: "Qt", url: "https://skillicons.dev/icons?i=qt" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icons: [
      { name: "AWS", url: "https://skillicons.dev/icons?i=aws" },
      { name: "Docker", url: "https://skillicons.dev/icons?i=docker" },
      { name: "Nginx", url: "https://skillicons.dev/icons?i=nginx" },
      { name: "Linux", url: "https://skillicons.dev/icons?i=linux" },
      { name: "GitHub Actions", url: "https://skillicons.dev/icons?i=githubactions" },
    ],
  },
  {
    title: "Databases",
    icons: [
      { name: "PostgreSQL", url: "https://skillicons.dev/icons?i=postgresql" },
      { name: "MySQL", url: "https://skillicons.dev/icons?i=mysql" },
      { name: "MongoDB", url: "https://skillicons.dev/icons?i=mongodb" },
      { name: "SQLite", url: "https://skillicons.dev/icons?i=sqlite" },
      { name: "Firebase", url: "https://skillicons.dev/icons?i=firebase" },
    ],
  },
  {
    title: "Tools & IDEs",
    icons: [
      { name: "VSCode", url: "https://skillicons.dev/icons?i=vscode" },
      { name: "PyCharm", url: "https://skillicons.dev/icons?i=pycharm" },
      { name: "Android Studio", url: "https://skillicons.dev/icons?i=androidstudio" },
      { name: "Postman", url: "https://skillicons.dev/icons?i=postman" },
      { name: "Git", url: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", url: "https://skillicons.dev/icons?i=github" },
    ],
  },
  {
    title: "AI / ML & Data Science",
    icons: [
      { name: "OpenCV", url: "https://skillicons.dev/icons?i=opencv" },
      { name: "TensorFlow", url: "https://skillicons.dev/icons?i=tensorflow" },
      { name: "PyTorch", url: "https://skillicons.dev/icons?i=pytorch" },
      { name: "Scikit-Learn", url: "https://skillicons.dev/icons?i=sklearn" },
    ],
  },
];

const About = React.memo(function About() {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-10 p-4 flex flex-col gap-8 dark:bg-gray-900 dark:text-white"
      id="about"
    >
      {/* ======= Header ======= */}
      <section className="flex items-center gap-4 pt-0 mb-1">
        <hr className="h-1 w-12 bg-gray-600 rounded-full" />
        <p className="text-xl lg:text-2xl font-medium">
          &lt;About Me &nbsp;/&gt;
        </p>
      </section>
      {/* ======= Main Grid ======= */}
      <section className="flex flex-col-reverse lg:flex-row lg:p-6 p-4 gap-6">
        {/* LEFT: Tech Toolbox */}
        <section className="w-full p-2 rounded-xl py-6 lg:py-0.5 shadow-sm flex flex-col max-md:gap-6 card lg:p-4 dark:bg-gray-800">
          <section className="flex items-center gap-4 h-1/5 mb-6 mt-6">
            <hr className="h-1 w-16 bg-gray-600 rounded-full" />
            <p className="text-xl lg:text-2xl font-medium">
              &lt;My Skills &nbsp;/&gt;
            </p>
          </section>

          {skillGroups.map((group) => (
            <div key={group.title} className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-left">{group.title}</h3>
              <div className="flex flex-wrap justify-start gap-4">
                {group.icons.map((icon) => (
                  <div
                    key={icon.name}
                    className="relative group transition-transform transform hover:scale-110"
                  >
                    <img
                      src={icon.url}
                      alt={icon.name}
                      className="w-6 h-6 sm:w-12 sm:h-12 cursor-pointer"
                    />
                    <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-gray-700 text-white rounded-md px-2 py-1 whitespace-nowrap transition-opacity duration-200">
                      {icon.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* RIGHT: About + Socials */}
        <section className="w-full p-3 flex flex-col justify-start gap-4 text-xl rounded-xl py-6 shadow-sm lg:p-6 card dark:bg-gray-800">
          <section className="flex items-center gap-4">
            <hr className="h-1 w-16 bg-gray-700 rounded-full" />
            <p className="font-medium text-xl lg:text-2xl">
              &lt;More about Me &nbsp;/&gt;
            </p>
          </section>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 font-normal leading-relaxed">
            Hello! I’m <b>Rohan</b>, a passionate <b>Computer Science Engineering student</b> and
            <b> Software Developer</b> with hands-on experience in <b>backend development</b>,
            <b> machine learning model deployment</b>, and <b>AWS cloud configuration</b>. I enjoy
            designing efficient backend systems and deploying intelligent ML models that solve
            real-world problems.
          </p>

          <p className="text-gray-700 dark:text-gray-300 font-normal leading-relaxed">
            I’m skilled in technologies such as <b>Python, Node.js, Express.js, and MySQL</b>,
            along with strong foundations in <b>Java and Android Studio</b>. My interests lie in
            building scalable applications, integrating cloud services, and continuously learning
            new technologies to grow as a full-stack and ML developer.
          </p>

          {/* Social Icons */}
          <section className="flex flex-wrap items-center gap-5 mt-2">
            <a href="https://linkedin.com/in/whorohanpatil" target="_blank" rel="noreferrer">
              <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
            </a>
            <a href="https://github.com/Rohanf4f" target="_blank" rel="noreferrer">
              <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>
            <a href="https://x.com/whorohanpatil" target="_blank" rel="noreferrer">
              <FaXTwitter className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>
            <a href="https://instagram.com/rohanc_patil" target="_blank" rel="noreferrer">
              <FaInstagram className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-pink-500 hover:bg-pink-500 p-1.5 hover:text-white" />
            </a>
          </section>

          {/* Contact Button */}
          <section className="flex mt-4">
            <Link href="mailto:youremail@gmail.com">
              <button className="flex items-center px-4 py-2 bg-emerald-700 hover:bg-emerald-800 rounded-md text-white shadow-lg transform active:scale-y-90 transition-transform">
                <IoIosMail size={24} />
                <span className="ml-2 md:text-lg">Contact</span>
              </button>
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
});

export default About;
