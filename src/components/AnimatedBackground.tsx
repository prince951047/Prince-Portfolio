import React, { useEffect, useRef, useState } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasWidth) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvasHeight) this.vy = -this.vy;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 30 : 80;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.05})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      drawLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-slate-950">
      {/* Soft gradient mesh */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-900/20 blur-[150px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-emerald-900/10 blur-[100px]" />
      </div>

      {!prefersReducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
    </div>
  );
}
