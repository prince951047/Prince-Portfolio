import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download, Terminal, Cloud, Shield, Database, Cpu, Server, Lock } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';
import resumeData from '../data/resume.json';

const FloatingIcon = ({ icon: Icon, color, className, delay, size = 32 }: any) => (
  <motion.div
    animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute p-4 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl ${className}`}
  >
    <Icon size={size} className={color} />
  </motion.div>
);

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
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

        {/* Right side graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:flex relative h-[600px] w-full items-center justify-center"
        >
          {/* Central glowing orbs */}
          <div className="absolute w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]" />
          <div className="absolute w-56 h-56 bg-cyan-500/20 rounded-full blur-[80px] translate-x-10 translate-y-10" />
          
          {/* Central Core */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 p-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl"
          >
            <Cloud size={100} className="text-emerald-400 drop-shadow-[0_0_25px_rgba(52,211,153,0.6)]" />
          </motion.div>

          {/* Floating Icons */}
          <FloatingIcon icon={Shield} color="text-cyan-400" className="top-[15%] left-[15%]" delay={0} size={36} />
          <FloatingIcon icon={Server} color="text-violet-400" className="top-[20%] right-[15%]" delay={1.5} size={32} />
          <FloatingIcon icon={Database} color="text-amber-400" className="bottom-[20%] left-[20%]" delay={2.5} size={40} />
          <FloatingIcon icon={Cpu} color="text-rose-400" className="bottom-[25%] right-[20%]" delay={1} size={36} />
          <FloatingIcon icon={Lock} color="text-blue-400" className="top-[45%] left-[5%]" delay={3} size={28} />
          <FloatingIcon icon={Terminal} color="text-emerald-400" className="top-[55%] right-[5%]" delay={2} size={32} />
          
          {/* Connecting lines (decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
            <motion.circle 
              cx="50%" cy="50%" r="180" 
              fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" 
              className="text-emerald-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle 
              cx="50%" cy="50%" r="260" 
              fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" 
              className="text-cyan-400"
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            />
          </svg>
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
