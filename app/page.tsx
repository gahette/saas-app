import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companion</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura thr Brainy Explorer"
          topic="Neural Network of the brain"
          subject="science"
          duration= {45}
          color="#ffda6e"
        />

        <CompanionCard
          id="456"
          name="Cousty the Number Wizard"
          topic="Derivatives & Integrals"
          subject="maths"
          duration={30}
          color="#e5d0ff"
        />

        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="language"
          subject="English Literature"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionsList
        title="Recent completed Sessions"
        companions={recentSessions}
        className="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
