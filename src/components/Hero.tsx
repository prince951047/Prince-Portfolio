import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download, Terminal } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';
import resumeData from '../data/resume.json';

export default function Hero() {
  const { name, title, summary } = resumeData.basics;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <Terminal size={14} />
            <span>System Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4">
            {name.split(' ').map((part, i) => (
              <span key={i} className={i === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400' : ''}>
                {part}{' '}
              </span>
            ))}
          </h1>

          <h2 className="text-xl md:text-3xl font-light text-slate-300 mb-8 max-w-3xl leading-relaxed">
            {title}
          </h2>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            {summary}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToExperience}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Experience
                <ChevronDown size={18} className="transition-transform group-hover:translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {isClient && (
              <PDFDownloadLink
                document={<ResumePDF />}
                fileName="Prince_Patel_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/50 hover:bg-slate-800 text-white border border-white/10 rounded-full font-medium transition-all hover:border-white/20 w-full sm:w-auto backdrop-blur-sm"
              >
                {/* @ts-ignore */}
                {({ loading }) => (
                  <>
                    <Download size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                    {loading ? 'Generating PDF...' : 'Download Resume'}
                  </>
                )}
              </PDFDownloadLink>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
