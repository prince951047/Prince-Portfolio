import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, ChevronDown, Calendar, MapPin, Zap } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <Briefcase className="text-emerald-400" size={36} />
            Experience
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-8 space-y-6">
            {resumeData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {job.role}
                    </h3>
                    <div className="text-lg text-slate-400 mb-4">
                      {job.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {job.dates}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 bg-white/5 rounded-full text-white/50"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-white/5">
                        <ul className="space-y-4 mt-4">
                          {job.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-slate-300 leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Impact Highlights Panel */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-6 text-emerald-400 font-mono text-sm uppercase tracking-wider">
                <Zap size={16} />
                Impact Highlights
              </div>
              <div className="space-y-6">
                {resumeData.achievements.map((achievement, i) => (
                  <div key={i} className="group">
                    <div className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-slate-400 leading-relaxed">
                      {achievement.context}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
