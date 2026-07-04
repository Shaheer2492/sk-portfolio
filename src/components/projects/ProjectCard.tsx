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
  image?: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
};

export default function ProjectCard({
  title, tech, featured, description, github, live, year, image, imageFit, imageBg,
}: ProjectCardProps) {
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
      <div
        className={`aspect-video rounded-xl overflow-hidden mb-4 relative group-hover:shadow-xl transition-shadow ${
          imageBg ? "" : "bg-gradient-to-br from-bg-secondary to-bg-tertiary"
        }`}
        style={imageBg ? { backgroundColor: imageBg } : undefined}
      >
        {image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out ${
              imageFit === "contain"
                ? "object-contain p-8 group-hover:scale-105"
                : "object-cover object-top saturate-[0.85] scale-[1.03] group-hover:saturate-100 group-hover:scale-100"
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/[0.03] dark:bg-white/[0.02] backdrop-blur-sm grid place-items-center">
              <div className="w-8 h-8 rounded-full bg-white/[0.05] dark:bg-white/[0.03]" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        {year && (
          <div className="absolute top-3 left-3 text-[10px] px-3 py-1.5 rounded-full bg-bg/60 backdrop-blur-sm text-fg-secondary dark:text-muted">
            {year}
          </div>
        )}
        {href && (
          <div className="absolute bottom-3 right-3 text-[10px] px-3 py-1.5 rounded-full bg-bg/60 backdrop-blur-sm text-fg-secondary dark:text-muted translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {live ? "View Project ↗" : "View Code ↗"}
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
          <span key={t} className="text-[11px] px-3 py-1 rounded-full bg-black/[0.05] dark:bg-white/[0.02] text-fg-tertiary dark:text-muted">
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
