"use client";
type FiltersProps = {
  tags: string[];
  active: string | null;
  onChange: (tag: string | null) => void;
};

export default function Filters({ tags, active, onChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
          active === null 
            ? "bg-fg text-bg dark:bg-fg dark:text-bg" 
            : "glass glass-hover text-muted hover:text-fg-tertiary dark:hover:text-fg-secondary"
        }`}
      >
        All
      </button>
      {tags.map((t) => (
        <button
          key={t}
          onClick={() => onChange(active === t ? null : t)}
          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
            active === t 
              ? "bg-fg text-bg dark:bg-fg dark:text-bg" 
              : "glass glass-hover text-muted hover:text-fg-tertiary dark:hover:text-fg-secondary"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}


