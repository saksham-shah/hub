import Hero from "@/components/Hero";
import GameCard from "@/components/GameCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saksham Shah",
  description: "For now just a bunch of browser game I've made.",
};

const games = [
  {
    title: "Jump Shoot",
    description: "Fast-paced physics-based online shooter.",
    href: "/play/jump-shoot",
  },
  {
    title: "Bullet Wall",
    description: "Bullet hell where time slows down on every hit.",
    href: "/play/bullet-wall",
  },
  {
    title: "Bowman",
    description: "Puzzle game with genuinely such good level-design I can't believe I made it.",
    href: "/play/bowman",
  },
  {
    title: "Second Chance",
    description: "Somehow yet another time-based bullet hell.",
    href: "/play/second-chance",
  },
];

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 2 }}>
      <Hero />

      <section
        id="projects"
        style={{
          padding: "6rem 1.5rem 8rem",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.72rem",
                color: "var(--accent)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                marginBottom: "0.75rem",
              }}
            >
              — Projects
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 0.95,
                letterSpacing: "0.01em",
                color: "var(--text)",
                textTransform: "uppercase",
              }}
            >
              The Games
            </h2>
          </div>

          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--muted)",
              maxWidth: 260,
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Each game is playable in your browser, no install needed.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {games.map((game, i) => (
            <GameCard key={i} {...game} index={i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "2rem 1.5rem",
          textAlign: "center",
          fontSize: "0.78rem",
          color: "var(--muted)",
          letterSpacing: "0.05em",
          position: "relative",
          zIndex: 2,
        }}
      >
        © {new Date().getFullYear()} Saksham Shah — Built with Next.js
      </footer>
    </main>
  );
}