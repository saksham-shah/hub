import Hero from "@/components/Hero";
import GameCard from "@/components/GameCard";

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
    <main>
      <Hero />

      <section
        id="projects"
        className="px-6 md:px-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {games.map((game, i) => (
          <GameCard key={i} {...game} />
        ))}
      </section>
    </main>
  );
}