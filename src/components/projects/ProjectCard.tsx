"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";

type ProjectCardProps = {
  title: string;
  tech: string[];
  featured?: boolean;
  description?: string;
  github?: string;
  live?: string;
  year?: string;
};

export default function ProjectCard({ title, tech, featured, description, github, live, year }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const href = live ?? github;

  const card = (
    <motion.article
      className={`group glass glass-hover rounded-2xl p-6 relative overflow-hidden h-full ${href ? "cursor-pointer" : ""} ${featured ? "md:col-span-2" : ""}`}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" as const }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
    >
      <div className="aspect-video rounded-xl bg-gradient-to-br from-bg-secondary to-bg-tertiary overflow-hidden mb-4 relative group-hover:shadow-xl transition-shadow">
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/[0.03] dark:bg-white/[0.02] backdrop-blur-sm grid place-items-center">
            <div className="w-8 h-8 rounded-full bg-white/[0.05] dark:bg-white/[0.03]" />
          </div>
        </div>
        {year && (
          <div className="absolute top-3 left-3 text-[10px] px-3 py-1.5 rounded-full bg-bg/50 backdrop-blur-sm text-muted">
            {year}
          </div>
        )}
        {href && (
          <div className="absolute bottom-3 right-3 text-[10px] px-3 py-1.5 rounded-full bg-bg/50 backdrop-blur-sm text-muted">
            {live ? "View Project" : "View Code"}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-fg-secondary dark:text-fg">{title}</h3>
      </div>
      {description && (
        <p className="mt-2 text-sm text-fg-tertiary dark:text-muted leading-relaxed">{description}</p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-[11px] px-3 py-1 rounded-full bg-white/[0.03] dark:bg-white/[0.02] text-muted">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );

  if (!href) return card;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`block h-full ${featured ? "md:col-span-2" : ""}`}>
      {card}
    </a>
  );
}
