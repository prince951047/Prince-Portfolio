import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 relative z-10 bg-slate-950/50"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <GraduationCap className="text-amber-400" size={36} />
            Education & Certifications
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-amber-500/50 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-amber-400" size={24} />
              Academic Background
            </h3>
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-amber-500/30 transition-all hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.15)]"
              >
                <div className="text-sm font-mono text-amber-400 mb-2">
                  {edu.dates}
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {edu.degree}
                </h4>
                <div className="text-slate-400 mb-4">{edu.institution}</div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
                  {edu.details}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-amber-400" size={24} />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex items-start gap-4 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-amber-500/30 transition-all hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.15)]"
                >
                  <div className="mt-1 p-2 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="text-slate-300 group-hover:text-white transition-colors font-medium leading-snug">
                    {cert}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
