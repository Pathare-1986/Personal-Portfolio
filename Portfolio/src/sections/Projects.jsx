import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import medinest from "../assets/medinest-h.png";
import quickgpt from "../assets/quickgpt-h.png";
import resumecraft from "../assets/resume-h.png";

const projects = [
  {
    title: "MediNest",
    description:
      "A full-stack medical appointment platform with patient, doctor, and admin dashboards, secure authentication, image uploads, and appointment management.",
    image: medinest,
    live: "https://medinestweb.vercel.app/",
    github: "https://github.com/Pathare-1986/MediNest-webApp",
    tech: [
      "React",
      "Tailwind CSS",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Stripe",
    ],
  },
  {
    title: "QuickGPT",
    description:
      "An AI-powered assistant web application supporting intelligent conversations and AI image generation with secure authentication and credit-based usage.",
    image: quickgpt,
    live: "https://quick-gpt-ggh7-h1g50advu-pathare-1986s-projects.vercel.app/",
    github: "https://github.com/Pathare-1986/QuickGpt",
    tech: [
      "React",
      "Tailwind CSS",
      "Node",
      "Express",
      "JWT",
      "MongoDB",
      "OpenAI",
      "Stripe",
    ],
  },
  {
    title: "ResumeCraft",
    description:
      "A modern resume builder with customizable templates, AI-generated summaries, real-time preview, and secure authentication.",
    image: resumecraft,
    live: "https://resume-craft-git-main-pathare-1986s-projects.vercel.app/",
    github: "https://github.com/Pathare-1986/resume-craft",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "OpenAI",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] opacity-20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[140px]" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mt-4 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Some things I’ve built using modern web technologies
      </motion.p>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden hover:border-[#1cd8d2]/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#1cd8d2]/20 to-[#00bf8f]/20 border border-[#1cd8d2]/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black font-medium hover:opacity-90"
                >
                  <FaExternalLinkAlt /> View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-white/30 hover:border-[#1cd8d2]"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
