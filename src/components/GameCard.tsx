"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  index: number;
};

const tagColors: string[] = [
  "rgba(122,255,178,0.15)",
  "rgba(255,111,255,0.15)",
  "rgba(111,178,255,0.15)",
  "rgba(255,210,111,0.15)",
];

const tagAccents: string[] = [
  "var(--accent)",
  "var(--accent2)",
  "#6fb2ff",
  "#ffd26f",
];

export default function GameCard({ title, description, href, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const accent = tagAccents[index % tagAccents.length];
  const tagBg = tagColors[index % tagColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "relative" }}
    >
      <motion.div
        whileHover="hover"
        initial="rest"
        style={{
          position: "relative",
          borderRadius: 20,
          padding: "2px",
          background: "var(--border)",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 20,
            background: `linear-gradient(135deg, ${accent}55, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        {/* Card body */}
        <div
          style={{
            background: "var(--surface)",
            borderRadius: 18,
            padding: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background number */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-0.5rem",
              right: "1.5rem",
              fontFamily: "var(--font-display)",
              fontSize: "7rem",
              color: "rgba(255,255,255,0.025)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Tag dot */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.3rem 0.75rem",
              background: tagBg,
              borderRadius: 100,
              marginBottom: "1.25rem",
              fontSize: "0.7rem",
              color: accent,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: accent,
                display: "inline-block",
              }}
            />
            Browser Game
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              lineHeight: 1,
              letterSpacing: "0.02em",
              color: "var(--text)",
              textTransform: "uppercase",
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.9rem",
              color: "var(--muted)",
              lineHeight: 1.6,
              fontWeight: 300,
              maxWidth: 320,
            }}
          >
            {description}
          </p>

          {/* Divider */}
          <div
            style={{
              marginTop: "1.75rem",
              height: 1,
              background: "var(--border)",
            }}
          />

          {/* Footer */}
          <div
            style={{
              marginTop: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href={href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: accent,
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Play Now
              <motion.span
                variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ display: "inline-flex" }}
              >
                →
              </motion.span>
            </Link>

            {/* Animated corner accent */}
            <motion.div
              variants={{ rest: { scale: 0, rotate: -45 }, hover: { scale: 1, rotate: 0 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: tagBg,
                border: `1px solid ${accent}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
              transformOrigin: "left",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}