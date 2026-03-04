import React from "react";
import { motion } from "motion/react";
import { Cpu, Layers, Shield, Cloud, Database, Wrench } from "lucide-react";
import resumeData from "../data/resume.json";

const iconMap: Record<string, React.ReactNode> = {
  Languages: <Code2 size={24} />,
  "Cloud & DevOps": <Cloud size={24} />,
  "AWS Services": <Layers size={24} />,
  "Azure Services": <Layers size={24} />,
  "GCP Services": <Layers size={24} />,
  "Monitoring & Observability": <Cpu size={24} />,
  "FinOps & Cost Management": <Wrench size={24} />,
  "Backup & Disaster Recovery": <Shield size={24} />,
  Databases: <Database size={24} />,
  "Tools & Platforms": <Wrench size={24} />,
  "Transferable Skills": <Layers size={24} />,
};

import { Code2 } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <Cpu className="text-violet-400" size={36} />
            Technical Arsenal
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-violet-500/50 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 hover:border-violet-500/30 transition-all hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-violet-500/10 rounded-2xl text-violet-400">
                  {iconMap[skillGroup.group] || <Layers size={24} />}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {skillGroup.group}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-white/5 rounded-xl border border-white/10 hover:bg-violet-500/20 hover:text-violet-200 hover:border-violet-500/30 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
