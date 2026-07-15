"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    degree: "MTech in Computer Science",
    institution: "Walchand College of Engineering, Sangli",
    year: "2023 - 2025",
    description: "Relevant coursework: Machine Learning, Advance Data Structures, Cloud Computing, Distributed Systems, and Software Engineering",
    icon: <FaGraduationCap size={20} />
  },
  {
    id: 2,
    degree: "BTech in Computer Science and Information Technology",
    institution: "RIT College",
    year: "2019 - 2023",
    description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Machine Learning",
    icon: <FaSchool size={20} />
  },
];

const Education = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const colorSchemes = [
    { 
      border: "border-emerald-500 dark:border-emerald-400", 
      bg: "bg-emerald-500 dark:bg-emerald-400",
      badge: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
    },
    { 
      border: "border-blue-500 dark:border-blue-400", 
      bg: "bg-blue-500 dark:bg-blue-400",
      badge: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
    },
    { 
      border: "border-purple-500 dark:border-purple-400", 
      bg: "bg-purple-500 dark:bg-purple-400",
      badge: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
    },
  ];

  return (
    <main
      className="min-h-[calc(85svh-4.03rem)] lg:p-6 p-4 flex flex-col gap-4 dark:text-white"
      id="education"
    >
      <section className="w-full lg:w-[100%] p-6 flex flex-col justify-start gap-6 rounded-xl shadow-lg card dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50">
        {/* Header */}
        <section className="flex items-center gap-4 pb-2 border-b-2 border-emerald-500 dark:border-emerald-400">
          <div className="w-2 h-8 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
          <p className="font-bold text-2xl lg:text-3xl text-gray-800 dark:text-white">
            My Education
          </p>
        </section>

        {/* Education Timeline */}
        <section className="w-full">
          <div className="space-y-8">
          {educationData.map((edu, index) => {
            const colors = colorSchemes[index % colorSchemes.length];
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={edu.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative p-6 lg:p-8 rounded-xl border-l-4 ${colors.border} card dark:bg-gray-800/80 shadow-lg hover:shadow-2xl transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Timeline Dot with Icon */}
                <div className={`absolute -left-3 top-10 w-6 h-6 ${colors.bg} rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-lg`}>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  {/* Header with Year Badge */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-lg ${colors.bg} text-white shadow-md`}>
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-base font-semibold text-gray-600 dark:text-gray-400 mt-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <span className={`${colors.badge} text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-sm border border-current/20`}>
                      {edu.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-0 sm:pl-14">
                    {edu.description}
                  </p>
                </div>

                {/* Decorative Corner Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bg} opacity-5 rounded-bl-full`}></div>
              </div>
            );
          })}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Education;