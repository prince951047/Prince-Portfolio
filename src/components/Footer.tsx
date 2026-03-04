import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  ExternalLink,
  Github,
  Linkedin,
  Terminal,
} from "lucide-react";
import resumeData from "../data/resume.json";

export default function Footer() {
  const { name, email, phone, links } = resumeData.basics;

  return (
    <footer className="py-12 px-6 relative z-10 border-t border-white/5 bg-slate-950">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="text-2xl font-bold text-white mb-2 tracking-tighter">
            {name}
          </div>
          <div className="text-sm text-slate-500 font-mono flex items-center gap-2">
            <Terminal size={14} />
            System Terminated
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm">{email}</span>
          </a>
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm">{phone}</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          {links.map((link, index) => {
            let Icon = ExternalLink;
            if (link.name.toLowerCase() === "linkedin") Icon = Linkedin;
            if (link.name.toLowerCase() === "github") Icon = Github;

            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                aria-label={link.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </footer>
  );
}
