"use client";
import { FaInstagram, FaReact } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import React from "react";

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

const About = () => {
  return (
    <main
      className="min-h-screen lg:p-10 p-4 flex flex-col gap-8 dark:text-white"
      id="about"
    >
      

      {/* ======= Main Grid - Work Experience LEFT (60%) + Skills RIGHT (40%) ======= */}
      <section className="flex flex-col lg:flex-row gap-6 lg:p-6 p-4">
        
        {/* LEFT: Work Experience (60%) */}
        <section className="w-full lg:w-[60%] p-6 flex flex-col justify-start gap-6 rounded-xl shadow-lg card dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50">
          {/* Header */}
          <section className="flex items-center gap-4 pb-2 border-b-2 border-emerald-500 dark:border-emerald-400">
            <div className="w-2 h-8 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
            <p className="font-bold text-2xl lg:text-3xl text-gray-800 dark:text-white">
              Work Experience
            </p>
          </section>

          {/* Experience List */}
          <div className="space-y-6">
            {/* 🧑‍💻 Current Role */}
            <div className="relative p-6 rounded-xl border-l-4 border-emerald-500 dark:border-emerald-400 bg-white/5 dark:bg-gray-800/40 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-emerald-500 dark:bg-emerald-400 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Software Developer
                </h3>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                  Sept 2025 – Present
                </span>
              </div>
              
              <p className="text-base font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                Climatescence Pvt. Ltd.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                📍 Pune, India
              </p>
              
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">▸</span>
                  <span>Developing and deploying backend systems and APIs for production use.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">▸</span>
                  <span>Implementing machine learning model integration and cloud deployment workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">▸</span>
                  <span>Collaborating with cross-functional teams for scalable software delivery.</span>
                </li>
              </ul>
            </div>

            {/* 🤖 Python Developer Intern */}
            <div className="relative p-6 rounded-xl border-l-4 border-blue-500 dark:border-blue-400 bg-white/5 dark:bg-gray-800/40 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Python Developer Intern
                </h3>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full whitespace-nowrap">
                  June 2021 – Aug 2021
                </span>
              </div>
              
              <p className="text-base font-semibold text-blue-700 dark:text-blue-300 mb-3">
                Global Engineering Deans Council (India Chapter)
              </p>
              
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>Technologies – Python, Jupyter, R, Machine Learning, Deep Learning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>Managed ML/DL projects implementing critical functionalities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>Designed and deployed a CNN-based image detection model.</span>
                </li>
              </ul>
            </div>

            {/* 📱 Android Developer Intern */}
            <div className="relative p-6 rounded-xl border-l-4 border-purple-500 dark:border-purple-400 bg-white/5 dark:bg-gray-800/40 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-purple-500 dark:bg-purple-400 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Android Developer Intern
                </h3>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full whitespace-nowrap">
                  Jan 2023 – June 2023
                </span>
              </div>
              
              <p className="text-base font-semibold text-purple-700 dark:text-purple-300 mb-1">
                Technolite Info Solutions
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                📍 Pune, India
              </p>
              
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Technologies – Android Studio, Java, Firebase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Developed Android applications and implemented client features on time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Performed manual testing and release version verification.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* RIGHT: Skills (40%) */}
        <section className="w-full lg:w-[40%] p-6 rounded-xl shadow-lg bg-white/5 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex flex-col gap-6">
          {/* Header */}
          <section className="flex items-center gap-4 pb-2 border-b-2 border-blue-500 dark:border-blue-400">
            <div className="w-2 h-8 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
            <p className="font-bold text-2xl lg:text-3xl text-gray-800 dark:text-white">
              My Skills
            </p>
          </section>

          {/* Skills Grid */}
          <div className="space-y-6 overflow-y-auto max-h-[800px] pr-2 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {skillGroups.map((group) => (
              <div key={group.title} className="relative p-6 rounded-xl border-l-4 border-emerald-500 dark:border-emerald-400 bg-white/5 dark:bg-gray-800/40 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 dark:border-blue-400 pl-3">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.icons.map((icon) => (
                    <div
                      key={icon.name}
                      className="relative group transition-transform transform hover:scale-110 hover:rotate-3"
                    >
                      <img
                        src={icon.url}
                        alt={icon.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer drop-shadow-md"
                      />
                      <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-semibold bg-gray-800 dark:bg-gray-700 text-white rounded-md px-3 py-1.5 whitespace-nowrap transition-opacity duration-200 shadow-lg z-10">
                        {icon.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;