"use client";
import { useEffect, useMemo, useRef } from "react";
import { useFilterStore } from "@/store/filters";

type Node = { id: string; x: number; y: number; r: number };

export default function Constellation({ skills }: { skills: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setActive = useFilterStore((s) => s.setActiveTag);
  const nodes = useMemo<Node[]>(() => {
    const n = skills.length;
    const arr: Node[] = [];
    const radius = 100;
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2;
      arr.push({ id: skills[i], x: Math.cos(t) * radius, y: Math.sin(t) * radius, r: 18 });
    }
    return arr;
  }, [skills]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context = ctx as CanvasRenderingContext2D;
    const c = canvas;
    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      const w = c.clientWidth;
      const h = c.clientHeight;
      c.width = Math.floor(w * DPR);
      c.height = Math.floor(h * DPR);
      context.setTransform(DPR, 0, 0, DPR, Math.floor(w / 2), Math.floor(h / 2));
    }
    function draw() {
      const { width, height } = c;
      context.save();
      context.clearRect(-width, -height, width * 2, height * 2);
      context.strokeStyle = document.documentElement.classList.contains('dark') ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
      context.lineWidth = 1;
      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            context.globalAlpha = 0.15 * (1 - d / 140);
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }
      // nodes
      context.globalAlpha = 1;
      for (const n of nodes) {
        context.fillStyle = document.documentElement.classList.contains('dark') ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
        context.beginPath();
        context.arc(n.x, n.y, 3, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
      raf = requestAnimationFrame(draw);
    }
    resize();
    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(c);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [nodes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    function onClick(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const hit = nodes.find((n) => Math.hypot(n.x - x, n.y - y) < n.r);
      if (hit) setActive(hit.id);
    }
    canvas.addEventListener("click", onClick);
    return () => canvas.removeEventListener("click", onClick);
  }, [nodes, setActive]);

  return (
    <div className="glass glass-hover rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-lg text-fg-secondary dark:text-fg">Technical Stack</h3>
          <p className="text-xs text-muted mt-1">Click on nodes to filter projects</p>
        </div>
        <button className="text-xs text-muted hover:text-fg transition-colors underline-offset-4 hover:underline" onClick={() => setActive(null)}>Clear filter</button>
      </div>
      <div className="relative h-80">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-4 flex flex-wrap items-center justify-center gap-3">
          {skills.map((skill, i) => {
            const node = nodes[i];
            // Scale down the positioning to keep within bounds
            const scaleFactor = 0.35; // Reduce from 0.45 to keep more contained
            return (
              <button
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] dark:bg-white/[0.02] hover:bg-white/[0.05] dark:hover:bg-white/[0.03] text-muted hover:text-fg-tertiary dark:hover:text-fg-secondary transition-all cursor-pointer"
                style={{
                  position: 'absolute',
                  left: `${50 + (node.x * scaleFactor)}%`,
                  top: `${50 + (node.y * scaleFactor)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setActive(skill)}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


