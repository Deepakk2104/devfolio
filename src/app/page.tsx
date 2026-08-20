import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}