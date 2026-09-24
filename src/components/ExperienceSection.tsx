// src/components/ExperienceSection.tsx

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: '3 YEARS',
    title: 'SOFTWARE DEVELOPER',
    organization: 'HYNIVA CONSULTING SERVICES PVT. LTD. • BANGALORE',
    description:
      'Worked as a React.js developer building dynamic and responsive user interfaces. Worked extensively with Material-UI, Redux Toolkit, Axios, React Hook Form, reusable components, Styled Components and RESTful APIs. Contributed to web and mobile application development and received the Star Performer recognition in December 2022.',
  },
  {
    id: '02',
    year: '1 YEAR',
    title: 'SOFTWARE DEVELOPER',
    organization: 'ROHTEK SOLUTIONS • HYDERABAD',
    description:
      'Worked on frontend and mobile application development using React.js and React Native. Applied reusable component architecture, state management, API integration and modern development workflows to deliver responsive application experiences.',
  },
  {
    id: '03',
    year: 'DEC 2022',
    title: 'STAR PERFORMER',
    organization: 'HYNIVA CONSULTING SERVICES PVT. LTD.',
    description:
      'Recognized as a Star Performer of Hyniva for professional contribution and performance.',
  },
  {
    id: '04',
    year: '2021',
    title: 'B.TECH — COMPUTER SCIENCE',
    organization:
      'ADARSH COLLEGE OF ENGINEERING, CHEBROLU • JNTUK',
    description:
      'Completed B.Tech in Computer Science and Engineering with 63% from Adarsh College of Engineering, affiliated with JNTUK.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  /*
   * Scroll progress of the complete experience section.
   *
   * Using the section itself as the target makes the animation
   * work consistently on desktop, tablet and mobile.
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  /*
   * Smooth the raw scroll progress.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });

  /*
   * Animated timeline height.
   */
  const lineHeight = useTransform(
    smoothProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="
  relative
  w-full
  max-w-full
  bg-black
  text-[#E8DFD8]
  font-sans
  selection:bg-[#cbb59d]
  selection:text-black
  pt-8
  pb-16
  px-3
  sm:pt-10
  sm:pb-20
  sm:px-6
  md:px-12
  lg:pt-4
  lg:pb-24
  lg:px-20
  overflow-x-hidden
"
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[18rem]
          h-[18rem]
          sm:w-[28rem]
          sm:h-[28rem]
          lg:w-[40rem]
          lg:h-[40rem]
          bg-[#D4AF37]/[0.03]
          rounded-full
          blur-[100px]
          sm:blur-[130px]
          lg:blur-[150px]
          pointer-events-none
        "
      />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto w-full min-w-0 relative z-10">

        {/* ================= HEADER ================= */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            flex
            items-center
            gap-3
            sm:gap-4
            mb-6
            sm:mb-7
            min-w-0
          "
        >
          <span
            className="
              shrink-0
              text-[9px]
              sm:text-[10px]
              md:text-[11px]
              font-medium
              tracking-[0.22em]
              sm:tracking-[0.3em]
              md:tracking-[0.35em]
              uppercase
              text-[#D4AF37]
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            04 / EXPERIENCE
          </span>

          <div
            className="
              flex-1
              min-w-0
              max-w-20
              h-[1px]
              bg-gradient-to-r
              from-[#D4AF37]/80
              via-[#8C6D4F]/40
              to-transparent
            "
          />
        </motion.div>

        {/* ================= HEADING ================= */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-10
            sm:mb-12
            md:mb-14
            lg:mb-16
          "
        >
          <h2
            className="
              w-full
              max-w-full
              text-[3rem]
              xs:text-[3.25rem]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              lg:text-[5.5rem]
              tracking-tight
              uppercase
              leading-[0.84]
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
              EXPERIENCE &
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
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative w-full min-w-0">

          {/* ---------------------------------
              MOBILE TRACK
          ---------------------------------- */}

          <div
            className="
              md:hidden
              absolute
              left-[10px]
              top-2
              bottom-4
              w-[1px]
              bg-[#8C6D4F]/20
            "
          />

          {/* Mobile animated line */}
          <motion.div
            style={{
              height: lineHeight,
            }}
            className="
              md:hidden
              absolute
              left-[9px]
              top-2
              w-[2px]
              bg-gradient-to-b
              from-[#D4AF37]
              via-[#C99E5D]
              to-[#8C6D4F]/10
              shadow-[0_0_10px_#D4AF37]
              origin-top
              pointer-events-none
            "
          />

          {/* ---------------------------------
              DESKTOP TRACK
          ---------------------------------- */}

          <div
            className="
              hidden
              md:block
              absolute
              left-[140px]
              top-2
              bottom-4
              w-[1px]
              bg-[#8C6D4F]/20
            "
          />

          {/* Desktop animated line */}
          <motion.div
            style={{
              height: lineHeight,
            }}
            className="
              hidden
              md:block
              absolute
              left-[139px]
              top-2
              w-[2px]
              bg-gradient-to-b
              from-[#D4AF37]
              via-[#C99E5D]
              to-[#8C6D4F]/10
              shadow-[0_0_10px_#D4AF37]
              origin-top
              pointer-events-none
            "
          />

          {/* ================= TIMELINE ITEMS ================= */}

          <div className="space-y-12 sm:space-y-14 md:space-y-16">

            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                  margin: '-40px',
                }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  relative
                  w-full
                  max-w-full
                  min-w-0
                  flex
                  flex-col
                  md:flex-row
                  items-start
                  group
                "
              >

                {/* ================= DESKTOP YEAR ================= */}

                <div
                  className="
                    hidden
                    md:block
                    w-[140px]
                    shrink-0
                    pr-8
                    pt-0.5
                    text-right
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-mono
                      tracking-[0.2em]
                      text-[#8C6D4F]
                      group-hover:text-[#D4AF37]
                      transition-colors
                    "
                  >
                    {stop.year}
                  </span>
                </div>

                {/* ================= DESKTOP NODE ================= */}

                <div
                  className="
                    hidden
                    md:flex
                    absolute
                    left-[140px]
                    top-1
                    -translate-x-1/2
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      absolute
                      w-6
                      h-6
                      rounded-full
                      border
                      border-transparent
                      group-hover:border-[#D4AF37]/40
                      group-hover:scale-150
                      transition-all
                      duration-700
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-[#120F0C]
                      border
                      border-[#8C6D4F]
                      group-hover:bg-[#D4AF37]
                      group-hover:border-[#D4AF37]
                      group-hover:shadow-[0_0_12px_#D4AF37]
                      transition-all
                      duration-300
                    "
                  />
                </div>

                {/* ================= MOBILE NODE ================= */}

                <div
                  className="
                    md:hidden
                    absolute
                    left-[10px]
                    top-1
                    -translate-x-1/2
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      absolute
                      w-5
                      h-5
                      rounded-full
                      border
                      border-transparent
                      group-hover:border-[#D4AF37]/40
                      group-hover:scale-150
                      transition-all
                      duration-700
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-[#120F0C]
                      border
                      border-[#8C6D4F]
                      group-hover:bg-[#D4AF37]
                      group-hover:border-[#D4AF37]
                      group-hover:shadow-[0_0_12px_#D4AF37]
                      transition-all
                      duration-300
                    "
                  />
                </div>

                {/* ================= CONTENT ================= */}

                <div
  className="
    min-w-0
    w-[calc(100%-1.5rem)]
    ml-6
    pl-4
    pr-0

    sm:w-[calc(100%-2rem)]
    sm:ml-8
    sm:pl-5

    md:w-auto
    md:flex-1
    md:ml-12
    md:pl-2
    md:pr-0
  "
>

                  {/* Mobile Year */}
                  <div className="md:hidden mb-2">
                    <span
                      className="
                        text-[9px]
                        sm:text-[10px]
                        font-mono
                        tracking-[0.16em]
                        sm:tracking-[0.2em]
                        text-[#D4AF37]
                      "
                    >
                      {stop.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
  className="
    w-full
    min-w-0
    text-[1.55rem]
    leading-[0.95]
    tracking-[0.02em]
    text-white
    group-hover:text-[#F7E7C4]
    transition-colors
    mb-2
    break-words
  "
  style={{
    fontFamily: "'Bebas Neue', sans-serif",
  }}
>
  {stop.title}
</h3>

                  {/* Organization */}
                 {/* Organization */}
<span
  className="
    block
    w-full
    min-w-0
    text-[8px]
    sm:text-[10px]
    font-medium
    tracking-[0.05em]
    sm:tracking-[0.12em]
    md:tracking-[0.2em]
    uppercase
    text-[#8C6D4F]
    mb-2.5
    leading-[1.55]
    break-words
  "
  style={{
    fontFamily: "'Montserrat', sans-serif",
    overflowWrap: 'anywhere',
  }}
>
  {stop.organization}
</span>
                  {/* Description */}
                  {/* Description */}
<p
  className="
    w-full
    min-w-0
    text-[10.5px]
    sm:text-xs
    md:text-[13px]
    font-light
    text-[#A8988B]
    leading-[1.7]
    break-words
    group-hover:text-[#D5CBC0]
    transition-colors
  "
  style={{
    fontFamily: "'Montserrat', sans-serif",
    overflowWrap: 'break-word',
    wordBreak: 'normal',
  }}
>
  {stop.description}
</p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;