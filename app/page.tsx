import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SkillsOrbit from "@/components/SkillsOrbit";
import ProcessScroll from "@/components/ProcessScroll";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10 flex-1">
        <Hero />
        <SkillsOrbit />
        <ProcessScroll />
      </main>
      <Footer />
    </>
  );
}
