// src/components/SkillsSection.tsx

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const skillCategories = [
  {
    title: 'FRONTEND ENGINEERING',
    badge: 'CORE STACK',
    items: [
      'React.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Material-UI',
      'Styled Components',
    ],
    description:
      'Building responsive and scalable web interfaces using reusable components, clean architecture and modern React development practices.',
    stat: '4 YEARS',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'MOBILE DEVELOPMENT',
    badge: 'CROSS PLATFORM',
    items: [
      'React Native',
      'Expo',
      'Android',
      'iOS',
    ],
    description:
      'Developing cross-platform mobile applications with React Native, reusable UI components and REST API integrations.',
    stat: 'WEB + MOBILE',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'STATE & API',
    badge: 'APPLICATION LOGIC',
    items: [
      'Redux Toolkit',
      'Redux',
      'Axios',
      'REST APIs',
      'Asynchronous Operations',
    ],
    description:
      'Implementing scalable state management and reliable API communication for data-driven web and mobile applications.',
    stat: 'REST API',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'QUALITY & WORKFLOW',
    badge: 'ENGINEERING',
    items: [
      'React Hook Form',
      'Jest',
      'Git',
      'GitLab',
      'Azure DevOps',
      'Jira',
      'VS Code',
    ],
    description:
      'Focused on reusable components, DRY code, testing, version control and collaborative development workflows.',
    stat: 'DRY & TESTED',
    colSpan: 'lg:col-span-7',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >

      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            03 / TECH STACK
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              FRONTEND
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              PRECISION.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-60px',
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >

          {skillCategories.map((block) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] cursor-pointer group`}
            >

              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37]" />

              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37]" />

              {/* Meta */}
              <div className="flex items-center justify-between mb-4">

                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                  {block.badge}
                </span>

                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#8C6D4F]/40 text-[#C4B5A5] bg-[#17130F]">
                  {block.stat}
                </span>

              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F7E7C4]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed mb-7 max-w-xl"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {block.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/20">

                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#171310] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 group-hover:bg-[#1F1914] group-hover:text-white transition-all duration-300"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;