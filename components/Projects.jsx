import Image from "next/image";
import "../app/globals.css";
import { PiGithubLogoFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { FaLink, FaExternalLinkAlt } from "react-icons/fa";
import { project_data } from "../project_data";

const Projects = () => {
  // Color schemes for different projects
  const colorSchemes = [
  { 
    gradient: "from-emerald-300 to-teal-300",
    badge: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700",
    overlay: "from-emerald-100/70 to-teal-100/70 dark:from-emerald-700/60 dark:to-teal-700/60"
  },
  { 
    gradient: "from-blue-300 to-indigo-300",
    badge: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-blue-700",
    overlay: "from-blue-100/70 to-indigo-100/70 dark:from-blue-700/60 dark:to-indigo-700/60"
  },
  { 
    gradient: "from-purple-300 to-pink-300",
    badge: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200 border-purple-200 dark:border-purple-700",
    overlay: "from-purple-100/70 to-pink-100/70 dark:from-purple-700/60 dark:to-pink-700/60"
  },
  { 
    gradient: "from-orange-300 to-red-300",
    badge: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-200 border-orange-200 dark:border-orange-700",
    overlay: "from-orange-100/70 to-red-100/70 dark:from-orange-700/60 dark:to-red-700/60"
  },
  { 
    gradient: "from-cyan-300 to-blue-300",
    badge: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-200 border-cyan-200 dark:border-cyan-700",
    overlay: "from-cyan-100/70 to-blue-100/70 dark:from-cyan-700/60 dark:to-blue-700/60"
  },
];


  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-10 p-4 flex flex-col gap-8"
      id="projects"
    >
      {/* Header */}
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
              <div
                key={index}
                className="group relative card dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 pointer-events-none`}></div>
                <div className={`absolute inset-0 border-4 ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                <div className="absolute inset-[2px] card dark:bg-gray-800 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Image with Overlay */}
                  <div className="relative overflow-hidden rounded-xl mb-4 shadow-md h-64">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={`/projects/${project.image}`}
                      alt={`${project.title} by Rohan Patil`}
                      priority={false}
                      height={300}
                      width={600}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${colors.overlay} opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center`}>
                      <div className="text-gray-900 dark:text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-2xl font-bold mb-2">View Project</p>
                        <div className="flex gap-4 justify-center">
                          <div className="w-12 h-1 bg-gray-900 dark:bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:${colors.gradient} transition-all duration-300">
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
                    {/* GitHub Button */}
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

                    {/* Live Project Button */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="view live project"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group/btn`}
                    >
                      <CgWebsite className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="font-medium text-sm">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </section>
    </main>
  );
};

export default Projects;