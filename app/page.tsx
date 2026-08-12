import { Hero } from "@/components/Hero";
import { Propuestas } from "@/components/Propuestas";
import { Pie } from "@/components/Pie";

export default function Home() {
  return (
    <main className="mx-auto max-w-lg">
      <Hero />
      <Propuestas />
      <Pie />
    </main>
  );
}