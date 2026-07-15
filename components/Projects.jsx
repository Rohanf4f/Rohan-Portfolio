"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "../app/globals.css";
import { PiGithubLogoFill } from "react-icons/pi";
import { project_data } from "../project_data";

const colorSchemes = [
  {
    gradient: "from-emerald-300 to-teal-300",
    badge: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700",
    overlay: "from-emerald-100/70 to-teal-100/70 dark:from-emerald-700/60 dark:to-teal-700/60",
  },
  {
    gradient: "from-blue-300 to-indigo-300",
    badge: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-blue-700",
    overlay: "from-blue-100/70 to-indigo-100/70 dark:from-blue-700/60 dark:to-indigo-700/60",
  },
  {
    gradient: "from-purple-300 to-pink-300",
    badge: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200 border-purple-200 dark:border-purple-700",
    overlay: "from-purple-100/70 to-pink-100/70 dark:from-purple-700/60 dark:to-pink-700/60",
  },
  {
    gradient: "from-orange-300 to-red-300",
    badge: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-200 border-orange-200 dark:border-orange-700",
    overlay: "from-orange-100/70 to-red-100/70 dark:from-orange-700/60 dark:to-red-700/60",
  },
  {
    gradient: "from-cyan-300 to-blue-300",
    badge: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-200 border-cyan-200 dark:border-cyan-700",
    overlay: "from-cyan-100/70 to-blue-100/70 dark:from-cyan-700/60 dark:to-blue-700/60",
  },
];

const ProjectCard = ({ project, colors }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const images = project.images;
  const hasSlideshow = Array.isArray(images) && images.length > 1;

  useEffect(() => {
    if (isHovered && hasSlideshow) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 1200);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, hasSlideshow, images]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentSlide(0);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative card dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Gradient Border Effect */}
      <div
        className={`absolute inset-0 border-4 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
      ></div>
      <div className="absolute inset-[2px] card dark:bg-gray-800 rounded-2xl pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Image / Slideshow */}
        <div className="relative overflow-hidden rounded-xl mb-4 shadow-md h-64">
          {hasSlideshow ? (
            <>
              {/* Filmstrip slider */}
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{
                  width: `${images.length * 100}%`,
                  transform: `translateX(-${(currentSlide * 100) / images.length}%)`,
                }}
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-full flex-shrink-0"
                    style={{ width: `${100 / images.length}%` }}
                  >
                    <Image
                      src={`/projects/${img}`}
                      alt={`${project.title} screenshot ${i + 1}`}
                      width={600}
                      height={300}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>

              {/* Slide counter */}
              <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full z-10">
                {currentSlide + 1} / {images.length}
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 shadow ${
                      i === currentSlide ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              {project.image && (
                <Image
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={`/projects/${project.image}`}
                  alt={`${project.title} by Rohan Patil`}
                  width={600}
                  height={300}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${colors.overlay} opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center`}
              >
                <div className="text-gray-900 dark:text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-2xl font-bold mb-2">View Project</p>
                  <div className="flex gap-4 justify-center">
                    <div className="w-12 h-1 bg-gray-900 dark:bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.badges.map((badge, badgeIndex) => (
            <span
              key={badgeIndex}
              className={`${colors.badge} text-xs font-semibold px-3 py-1 rounded-full border transition-transform duration-300 hover:scale-110`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="View project source code on github"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group/btn"
          >
            <PiGithubLogoFill className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
            <span className="font-medium text-sm">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-4 flex flex-col gap-4"
      id="projects"
    >
      <section className="w-full lg:w-[100%] p-6 flex flex-col justify-start gap-6 rounded-xl shadow-lg card dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50">
        {/* Header */}
        <section className="flex items-center gap-4 pb-2 border-b-2 border-emerald-500 dark:border-emerald-400">
          <div className="w-2 h-8 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
          <p className="font-bold text-2xl lg:text-3xl text-gray-800 dark:text-white">
            My Projects
          </p>
        </section>

        {/* Projects Grid */}
        <section className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-2">
            {project_data.map((project, index) => {
              const colors = colorSchemes[index % colorSchemes.length];
              return (
                <ProjectCard key={index} project={project} colors={colors} />
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Projects;
