// Shared SectionHeader component — used across all sections for uniform styling
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  headline: string;                  // can contain HTML (rendered via dangerouslySetInnerHTML)
  description?: string;
  center?: boolean;                  // default: true
  light?: boolean;                   // true = white text (for dark backgrounds)
  className?: string;
}

export const SectionHeader = ({
  badge,
  headline,
  description,
  center = true,
  light = false,
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
      className={`mb-12 md:mb-16 ${center ? "text-center" : ""} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}>
          {/* Left accent line */}
          <span className="w-6 h-px bg-red-500 opacity-70" />
          <span
            className={`text-[11px] font-bold tracking-[0.25em] uppercase ${
              light ? "text-red-400" : "text-red-600"
            }`}
          >
            {badge}
          </span>
          {/* Right accent line */}
          <span className="w-6 h-px bg-red-500 opacity-70" />
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
        dangerouslySetInnerHTML={{ __html: headline }}
      />

      {/* Decorative underline */}
      <div className={`flex gap-1.5 mb-5 ${center ? "justify-center" : ""}`}>
        <span className="w-10 h-1 bg-red-600 rounded-full" />
        <span className="w-5 h-1 bg-red-400 rounded-full" />
        <span className="w-2.5 h-1 bg-red-300 rounded-full" />
      </div>

      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/75" : "text-gray-500"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
