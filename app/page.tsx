import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Events } from "@/components/events";
import { WhoItsFor } from "@/components/who-its-for";
import { ProblemSolution } from "@/components/problem-solution";
import { HowItWorks } from "@/components/how-it-works";
import { Deliverables } from "@/components/deliverables";
import { UseCases } from "@/components/use-cases";
import { Comparison } from "@/components/comparison";
import { Trust } from "@/components/trust";
import { FAQ } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Events />
        <WhoItsFor />
        <ProblemSolution />
        <HowItWorks />
        <Deliverables />
        <UseCases />
        <Comparison />
        <Trust />
        <FAQ />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
