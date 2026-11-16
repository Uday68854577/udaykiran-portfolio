// src/components/ContactSection.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:karriudaykiran389@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="
        relative
        w-full
        max-w-full
        bg-black
        text-[#E8DFD8]
        font-sans
        selection:bg-[#cbb59d]
        selection:text-black
        pt-12
        pb-12
        px-4
        sm:pt-16
        sm:pb-16
        sm:px-8
        lg:px-20
        overflow-hidden
        box-border
      "
    >
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-7xl mx-auto min-w-0 relative z-10">
        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            sm:gap-12
            lg:gap-16
            items-start
            min-w-0
          "
        >
          {/* ===================================================== */}
          {/* LEFT SIDE */}
          {/* ===================================================== */}

          <div className="lg:col-span-5 min-w-0 flex flex-col justify-between">
            <div className="min-w-0">
              {/* SECTION LABEL */}
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
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                  mb-5
                  min-w-0
                "
              >
                <span
                  className="
                    text-[9px]
                    sm:text-[11px]
                    font-medium
                    tracking-[0.2em]
                    sm:tracking-[0.35em]
                    uppercase
                    text-[#D4AF37]
                    whitespace-nowrap
                  "
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  05 / CONTACT
                </span>

                <div
                  className="
                    flex-1
                    max-w-16
                    h-[1px]
                    bg-gradient-to-r
                    from-[#D4AF37]/80
                    via-[#8C6D4F]/40
                    to-transparent
                  "
                />
              </motion.div>

              {/* HEADING */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-7 sm:mb-8"
              >
                <h2
                  className="
                    text-[3.25rem]
                    leading-[0.82]
                    tracking-tight
                    uppercase
                    sm:text-6xl
                    md:text-7xl
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
                    LET&apos;S
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
                    CONNECT.
                  </span>
                </h2>
              </motion.div>

              {/* DESCRIPTION */}
              <p
                className="
                  w-full
                  max-w-md
                  text-[11px]
                  leading-[1.7]
                  sm:text-[13px]
                  font-light
                  text-[#A8988B]
                  mb-8
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Looking for a React.js developer, React Native developer,
                or frontend engineer for your next product? Let&apos;s
                discuss the idea, requirements and possibilities.
              </p>

              {/* ===================================================== */}
              {/* CONTACT INFORMATION */}
              {/* ===================================================== */}

              <div className="space-y-5 min-w-0">
                {/* EMAIL */}
                <a
                  href="mailto:karrinagababu10@gmail.com"
                  className="block group min-w-0"
                >
                  <span
                    className="
                      block
                      text-[8px]
                      sm:text-[9px]
                      font-mono
                      tracking-[0.18em]
                      sm:tracking-[0.25em]
                      text-[#8C6D4F]
                      uppercase
                      mb-1
                    "
                  >
                    // EMAIL
                  </span>

                  <span
                    className="
                      block
                      max-w-full
                      text-xs
                      sm:text-sm
                      text-[#E8D7C5]
                      group-hover:text-[#D4AF37]
                      transition-colors
                      break-words
                    "
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      overflowWrap: 'anywhere',
                    }}
                  >
                    karriudaykiran389@gmail.com
                  </span>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+917995484649"
                  className="block group min-w-0"
                >
                  <span
                    className="
                      block
                      text-[8px]
                      sm:text-[9px]
                      font-mono
                      tracking-[0.18em]
                      sm:tracking-[0.25em]
                      text-[#8C6D4F]
                      uppercase
                      mb-1
                    "
                  >
                    // PHONE
                  </span>

                  <span
                    className="
                      block
                      max-w-full
                      text-xs
                      sm:text-sm
                      text-[#E8D7C5]
                      group-hover:text-[#D4AF37]
                      transition-colors
                    "
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    +91 7995484649
                  </span>
                </a>

                {/* LOCATION */}
                <div className="min-w-0">
                  <span
                    className="
                      block
                      text-[8px]
                      sm:text-[9px]
                      font-mono
                      tracking-[0.18em]
                      sm:tracking-[0.25em]
                      text-[#8C6D4F]
                      uppercase
                      mb-1
                    "
                  >
                    // LOCATION
                  </span>

                  <span
                    className="
                      block
                      max-w-full
                      text-xs
                      sm:text-sm
                      text-[#E8D7C5]
                      break-words
                    "
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      overflowWrap: 'anywhere',
                    }}
                  >
                    Kakinada, Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* FORM */}
          {/* ===================================================== */}

        
        </div>

        {/* ===================================================== */}
        {/* FOOTER */}
        {/* ===================================================== */}

        <div
          className="
            pt-10
            mt-10
            sm:pt-16
            sm:mt-16
            border-t
            border-[#8C6D4F]/15
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            text-center
            sm:text-left
            gap-3
            min-w-0
          "
        >
          <span
            className="
              max-w-full
              text-[8px]
              sm:text-[10px]
              font-mono
              tracking-[0.12em]
              sm:tracking-widest
              text-[#8C6D4F]
              uppercase
              break-words
            "
          >
            KARRI UDAYKIRAN // SOFTWARE DEVELOPER
          </span>

          <span
            className="
              max-w-full
              text-[8px]
              sm:text-[10px]
              font-mono
              tracking-[0.08em]
              sm:tracking-normal
              text-[#8C6D4F]
              break-words
            "
          >
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;