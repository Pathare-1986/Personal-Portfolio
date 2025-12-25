import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const hackathons = [
  {
    title: "NASA Space Apps Challenge",
    role: "Frontend Developer",
    duration: "24 Hours",
    description:
      "Participated in a global hackathon focused on space and Earth data challenges. Contributed to frontend UI planning,and basic interface implementation using React under tight time constraints.",
  },
  {
    title: "AgriTech Hackathon",
    role: "Frontend Developer",
    duration: "24 Hours",
    description:
      "Took part in an agriculture-focused hackathon, working primarily on the frontend to design user-friendly screen layouts and improve application flow for technology-driven farming solutions.",
  },
];

function HackathonItem({ hack, idx, start, end, scrollYProgress, layout }) {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [idx % 2 === 0 ? 30 : -30, 0]
  );
  const x = useTransform(scrollYProgress, [start, end], [-24, 0]);

  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        <motion.div
          style={{ scale, opacity }}
          className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
        />
        <motion.div
          style={{ height: 40, opacity }}
          className={`absolute ${
            idx % 2 === 0 ? "-top-8" : "-bottom-8"
          } w-[3px] bg-white/40`}
        />
        <motion.article
          style={{ opacity, y, maxWidth: "90vw" }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
          className={`absolute ${
            idx % 2 === 0 ? "bottom-12" : "top-12"
          } bg-gray-900/80 backdrop-blur border-gray-700/70 rounded-xl p-7 w-[320px] shadow-lg`}
        >
          <h3 className="text-xl font-semibold">{hack.title}</h3>
          <p className="text-md text-gray-400 mb-3">
            {hack.role} | {hack.duration}
          </p>
          <p className="text-md text-gray-300 break-words">
            {hack.description}
          </p>
        </motion.article>
      </div>
    );
  }

  return (
    <div className="relative flex items-start">
      <motion.div
        className="absolute -left-[14px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale, opacity }}
      />
      <motion.article
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
      >
        <h3 className="text-lg font-smibold break-words">{hack.title}</h3>
        <p className="text-sm text-gray-400 mb-2 break-words">
          {hack.role} | {hack.duration}
        </p>
        <p className="text-sm text-gray-300 break-words">
          {hack.description}
        </p>
      </motion.article>
    </div>
  );
}

const Hackathons = () => {
  const sceneREf = useRef(null);
  const mobileListRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  
  const SCENE_HEIGHT_VH = isMobile
    ? 120 * hackathons.length
    : 120 * hackathons.length;

  
  const { scrollYProgress } = useScroll({
    target: sceneREf,
    offset: ["start start", "end end"],
  });

 
  const lineSize = isMobile
    ? useTransform(scrollYProgress, [0, 0.92], ["0%", "100%"])
    : useTransform(scrollYProgress, (v) => `${Math.min(v * 100, 100)}%`);

  const threshold = useMemo(
    () => hackathons.map((_, i) => i / hackathons.length),
    []
  );

  return (
    <section className="relative bg-black text-white" id="hackathons">
      <div
        ref={sceneREf}
        style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh" }}
        className="relative"
      >
        <div
          className={
            isMobile
              ? "sticky top-0 min-h-screen flex flex-col"
              : "sticky top-0 h-screen flex flex-col"
          }
        >
          <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center">
            Hackathons & Technical Events
          </h2>

          <div className="flex flex-1 items-center justify-center px-6 pb-10">
            {!isMobile && (
              <div className="relative w-full max-w-7xl">
                <div className="relative h-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-[6px] bg-white rounded origin-left"
                    style={{ width: lineSize }}
                  />
                </div>
                <div className="relative flex justify-between mt-0">
                  {hackathons.map((hack, idx) => (
                    <HackathonItem
                      key={idx}
                      hack={hack}
                      idx={idx}
                      start={idx === 0 ? 0 : threshold[idx - 1]}
                      end={threshold[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}

            {isMobile && (
              <div className="relative w-full max-w-md">
                <div className="absolute left-0 top-6 bottom-6 w-[6px] bg-white/20 rounded overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-[6px] bg-white rounded origin-top"
                    style={{ height: lineSize }}
                  />
                </div>

                <div
                  ref={mobileListRef}
                  className="relative flex flex-col gap-6 ml-10 mt-6 pb-16"
                >
                  {hackathons.map((hack, idx) => (
                    <HackathonItem
                      key={idx}
                      hack={hack}
                      idx={idx}
                      start={idx / hackathons.length}
                      end={(idx + 1) / hackathons.length}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
