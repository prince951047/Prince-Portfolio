import React from "react";
import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Code2 } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10 bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <FolderGit2 className="text-cyan-400" size={36} />
            Featured Projects
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
                  <Code2 size={24} />
                </div>
                <div className="text-sm font-mono text-slate-500">
                  {project.dates}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.split(", ").map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-mono text-cyan-400 bg-cyan-400/10 rounded-lg border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                >
                  View Details
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
