// src/components/ProjectsSection.tsx

import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;

  tech: string[];
   href?: string;
  linkLabel?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  
}

const projects: Project[] = [
  // {
  //   number: '01',
  //   title: 'HYPER',
  //   category: 'WEB APPLICATION / FINANCIAL PLATFORM',
  //   description:
  //     'A comprehensive web application developed for Hyniva featuring Dynamic Advisor, Portfolio Planner and CRM components. The platform provides personalized recommendations through interactive questionnaires along with risk analysis, simulations and administrative functionality.',
  //   tech: [
  //     'React.js',
  //     'Redux',
  //     'Material-UI',
  //     'MySQL',
  //     'Java',
  //     'REST APIs',
  //     'Styled Components',
  //   ],
  //   metrics: [
  //     {
  //       label: 'TYPE',
  //       value: 'WEB APPLICATION',
  //     },
  //     {
  //       label: 'TEAM',
  //       value: '8 MEMBERS',
  //     },
  //     {
  //       label: 'CLIENT',
  //       value: 'HYNIVA',
  //     },
  //   ],
  // },

  // {
  //   number: '02',
  //   title: 'ALL WAYS-TRACK',
  //   category: 'LOGISTICS / MOBILE + WEB',
  //   description:
  //     'A logistics and transportation management solution supporting fleet-based businesses. The React Native mobile application enables drivers and field staff to manage loads, update trip status, track routes, log hours and monitor vehicle maintenance. The ReactJS admin portal provides load management, driver performance, vehicle health, reporting, scheduling, accounting and compliance features.',
  //   tech: [
  //     'React Native',
  //     'React.js',
  //     'Redux',
  //     'PHP',
  //     'Laravel',
  //     'AWS',
  //     'REST APIs',
  //     'Styled Components',
  //   ],
  //   metrics: [
  //     {
  //       label: 'TYPE',
  //       value: 'CLIENT PROJECT',
  //     },
  //     {
  //       label: 'TEAM',
  //       value: '9 MEMBERS',
  //     },
  //     {
  //       label: 'PLATFORMS',
  //       value: 'MOBILE + WEB',
  //     },
  //   ],
  // },

  {
    number: '01',
    title: 'VITOXYZ',
    category: 'HEALTHCARE /WEB & MOBILE APPLICATION',
    description:
      'A healthcare and wellness mobile application providing users with medicine ordering, healthcare staff booking, diet plans and fitness tracking. The application also integrates Razorpay for secure payments, subscriptions and plan purchases while providing a smooth cross-platform experience.',
    tech: [
      'React.js',
      'React Native',
      'Redux',
      'Styled Components',
      'REST APIs',
      'Razorpay',
      'AWS',
    ],
     href: "https://vitoxyz.com/medicines",
    linkLabel: "Explore medicines",
    metrics: [
      {
        label: 'TYPE',
        value: 'HEALTHCARE APP',
      },
      {
        label: 'TEAM',
        value: '6 MEMBERS',
      },
      {
        label: 'PAYMENTS',
        value: 'RAZORPAY',
      },
    ],
    
  },
    {
    number: '02',
    title: 'Tredixo',
    category: 'Financial technology · Web APPLICATION',
    description:
      'A trading platform built around live market information, portfolio tracking, and visual tools for following investments and performance.',
    tech: [
      'React.js',
      'Redux',
      'Styled Components',
      'REST APIs',
      'Razorpay',
      'AWS',
    ],
    href: "https://tredixo.co.in/",
    linkLabel: "Visit Tredixo",
    metrics: [
      {
        label: 'TYPE',
        value: 'Trading &Stockmarket APP',
      },
      {
        label: 'TEAM',
        value: '6 MEMBERS',
      },
      {
        label: 'PAYMENTS',
        value: 'RAZORPAY',
      },
    ],
    
  },
];




export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        text-[#E8DFD8]
        font-sans
        selection:bg-[#cbb59d]
        selection:text-black
        pt-16
        sm:pt-20
        md:pt-24
        pb-24
        sm:pb-28
        md:pb-32
        px-5
        sm:px-8
        md:px-10
        lg:px-20
      "
    >
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div
        className="
          absolute
          top-1/4
          left-1/2
          -translate-x-1/2
          lg:left-1/3
          lg:translate-x-0
          w-[18rem]
          h-[18rem]
          sm:w-[24rem]
          sm:h-[24rem]
          md:w-[30rem]
          md:h-[30rem]
          lg:w-[36rem]
          lg:h-[36rem]
          bg-[#D4AF37]/5
          rounded-full
          blur-[100px]
          sm:blur-[130px]
          lg:blur-[180px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-1/4
          right-1/2
          translate-x-1/2
          lg:right-1/4
          lg:translate-x-0
          w-[16rem]
          h-[16rem]
          sm:w-[22rem]
          sm:h-[22rem]
          md:w-[26rem]
          md:h-[26rem]
          lg:w-[30rem]
          lg:h-[30rem]
          bg-[#8C6D4F]/5
          rounded-full
          blur-[100px]
          sm:blur-[130px]
          lg:blur-[170px]
          pointer-events-none
        "
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* =======================================================
            SECTION LABEL
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            flex
            items-center
            gap-3
            sm:gap-4
            mb-4
            sm:mb-5
          "
        >
          <span
            className="
              text-[9px]
              sm:text-[10px]
              md:text-[11px]
              font-medium
              tracking-[0.25em]
              sm:tracking-[0.3em]
              md:tracking-[0.35em]
              uppercase
              text-[#D4AF37]
              whitespace-nowrap
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            02 / FEATURED WORK
          </span>

          <div
            className="
              w-12
              sm:w-16
              md:w-20
              h-[1px]
              bg-gradient-to-r
              from-[#D4AF37]/80
              via-[#8C6D4F]/40
              to-transparent
              flex-shrink-0
            "
          />
        </motion.div>

        {/* =======================================================
            HEADING
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            justify-between
            gap-6
            md:gap-10
            mb-10
            sm:mb-14
            md:mb-16
          "
        >
          <h2
            className="
              text-[3.5rem]
              leading-[0.84]
              tracking-tight
              uppercase
              sm:text-5xl
              md:text-6xl
              lg:text-[5.5rem]
              max-w-full
            "
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-b
                from-[#FFFFFF]
                via-[#D5CBC0]
                to-[#605448]
              "
            >
              FEATURED
            </span>

            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-b
                from-[#F7E7C4]
                via-[#C99E5D]
                to-[#543B1A]
              "
            >
              PROJECTS.
            </span>
          </h2>

          <p
            className="
              text-[11px]
              sm:text-xs
              md:text-sm
              font-light
              text-[#A8988B]
              w-full
              max-w-[340px]
              sm:max-w-sm
              mt-2
              md:mt-0
              leading-relaxed
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            A selection of web and mobile products built across
            financial, logistics and healthcare domains.
          </p>
        </motion.div>

        {/* =======================================================
            PROJECT STACK
        ======================================================= */}

        <ScrollStack
          itemDistance={12}
          itemScale={0.035}
          itemStackDistance={18}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>

              {/* =================================================
                  PROJECT CARD
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  rounded-2xl
                  border
                  border-[#8C6D4F]/50
                  bg-[#0E0C0A]
                  p-5
                  sm:p-7
                  md:p-10
                  lg:p-12
                  shadow-[0_25px_70px_rgba(0,0,0,0.98)]
                  group
                  overflow-hidden
                  transition-colors
                  duration-500
                  hover:border-[#D4AF37]
                "
              >

                {/* Top gold line */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-[#D4AF37]/80
                    to-transparent
                  "
                />

                {/* Corner decorations */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-3
                    h-3
                    sm:w-4
                    sm:h-4
                    border-t-2
                    border-l-2
                    border-[#D4AF37]/60
                    group-hover:border-[#D4AF37]
                    transition-colors
                  "
                />

                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-3
                    h-3
                    sm:w-4
                    sm:h-4
                    border-t-2
                    border-r-2
                    border-[#D4AF37]/60
                    group-hover:border-[#D4AF37]
                    transition-colors
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-3
                    h-3
                    sm:w-4
                    sm:h-4
                    border-b-2
                    border-l-2
                    border-[#D4AF37]/60
                    group-hover:border-[#D4AF37]
                    transition-colors
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-3
                    h-3
                    sm:w-4
                    sm:h-4
                    border-b-2
                    border-r-2
                    border-[#D4AF37]/60
                    group-hover:border-[#D4AF37]
                    transition-colors
                  "
                />

                {/* =================================================
                    WATERMARK NUMBER
                ================================================= */}

                <span
                  className="
                    absolute
                    -bottom-4
                    -right-2
                    text-[6rem]
                    sm:text-8xl
                    md:text-9xl
                    font-bold
                    text-[#EAD8C7]/5
                    select-none
                    pointer-events-none
                    leading-none
                  "
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  {project.number}
                </span>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-12
                    gap-8
                    items-start
                    relative
                    z-10
                  "
                >

                  {/* =================================================
                      MAIN PROJECT CONTENT
                  ================================================= */}

                  <div className="lg:col-span-7 min-w-0">

                    {/* Category */}

                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-x-3
                        gap-y-1
                        mb-4
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          sm:text-[10px]
                          font-mono
                          font-bold
                          text-[#D4AF37]
                          whitespace-nowrap
                        "
                      >
                        {project.number} //
                      </span>

                      <span
                        className="
                          text-[9px]
                          sm:text-[10.5px]
                          font-mono
                          tracking-[0.18em]
                          sm:tracking-[0.25em]
                          uppercase
                          text-[#A8988B]
                          break-words
                        "
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}

                    <h3
                      className="
                        text-[2.7rem]
                        leading-[0.88]
                        tracking-tight
                        text-white
                        mb-4
                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl
                        font-normal
                        uppercase
                        group-hover:text-[#F7E7C4]
                        transition-colors
                      "
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        text-[11px]
                        sm:text-xs
                        md:text-[14px]
                        font-light
                        text-[#BDB0A4]
                        leading-[1.8]
                        sm:leading-[1.85]
                        tracking-wide
                        mb-7
                        sm:mb-8
                        max-w-2xl
                      "
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* =================================================
                        TECHNOLOGY BADGES
                    ================================================= */}

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-1.5
                        sm:gap-2
                        pt-5
                        sm:pt-6
                        border-t
                        border-[#8C6D4F]/25
                      "
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-2.5
                            sm:px-3
                            py-1
                            text-[8px]
                            sm:text-[10px]
                            font-medium
                            tracking-[0.12em]
                            sm:tracking-[0.16em]
                            uppercase
                            rounded-sm
                            border
                            border-[#8C6D4F]/40
                            bg-[#16120E]
                            text-[#E8D7C5]
                            group-hover:border-[#D4AF37]/50
                            transition-all
                            max-w-full
                            break-words
                          "
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div>

                    </div>
                     <div  className="
                        flex
                        flex-wrap
                        items-center
                        gap-x-3
                        gap-y-1
                        mb-4
                      ">
                        <a  className="
                          text-[9px]
                          sm:text-[15px]
                          font-mono
                          font-bold
                          text-[#D4AF37]
                          whitespace-nowrap
                        " href={project.href} target="_blank" rel="noreferrer">
                  {project.linkLabel} 
                </a>
                  </div>
                  </div>
                 
                  {/* =================================================
                      PROJECT METRICS
                  ================================================= */}

                  <div
                    className="
                      lg:col-span-5
                      flex
                      flex-col
                      justify-between
                      h-full
                      space-y-5
                      sm:space-y-6
                      mt-8
                      lg:mt-0
                      lg:pl-6
                      lg:border-l
                      lg:border-[#8C6D4F]/25
                      min-w-0
                    "
                  >
                    <div className="space-y-3">

                      {/* Details heading */}

                      <span
                        className="
                          text-[9px]
                          sm:text-[9.5px]
                          font-mono
                          tracking-[0.2em]
                          sm:tracking-[0.25em]
                          uppercase
                          text-[#8C6D4F]
                          block
                          mb-2
                        "
                      >
                        // PROJECT DETAILS
                      </span>

                      {/* Metrics */}

                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="
                            p-3
                            sm:p-3.5
                            rounded-sm
                            border
                            border-[#8C6D4F]/25
                            bg-[#050403]
                            flex
                            items-center
                            justify-between
                            gap-4
                            min-w-0
                          "
                        >
                          <span
                            className="
                              text-[9px]
                              sm:text-[10px]
                              font-mono
                              text-[#A8988B]
                              flex-shrink-0
                            "
                          >
                            {metric.label}
                          </span>

                          <span
                            className="
                              text-[9px]
                              sm:text-[11px]
                              font-mono
                              font-medium
                              text-[#F7E7C4]
                              text-right
                              break-words
                              min-w-0
                            "
                          >
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;