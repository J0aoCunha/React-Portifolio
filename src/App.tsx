import Educations from "./components/Education";
import Experiences from "./components/Experiences";
import Certifications from "./components/Certifications";
import CommandHeader from "./components/CommandHeader";
import ProjectCard from "./components/ProjectCard";
import Techs from "./components/Techs";
import Information from "./components/information";
import Profile from "./components/profile";
import TerminalWindow from "./components/TerminalWindow";

import "./index.css";
import { about } from "./data/profile";

function App() {
  return (
    <div className="w-full min-h-screen bg-base p-10 flex flex-col xl:flex-row gap-8 font-mono justify-center md:flex-col">
      <aside className="flex xl:flex-col lg:flex lg:flex-row lg:flex-wrap gap-8 flex-wrap justify-center md:grid md:grid-cols-2">
        <Profile />
        <Information />
        <Techs />
        <Certifications />
        <Educations />
      </aside>

      <main className="flex flex-col xl:w-[952px] gap-8 md:w-auto">
        <CommandHeader
          command="cat about.md"
          link="See More"
          linkHref="https://www.linkedin.com/in/j0aocunha/"
        />

        <TerminalWindow title="about.md">
          {about.map((paragraph, index) => (
            <p key={index} className="text-muted text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
        </TerminalWindow>

        <CommandHeader command="ls experience/" />
        <Experiences />

        <CommandHeader
          command="ls projects/"
          link="See More"
          linkHref="https://github.com/J0aoCunha?tab=repositories"
        />
        <section className="h-auto gap-6 grid xl:grid-cols-2 items-stretch justify-center md:grid-cols-1">
          <ProjectCard />
        </section>
      </main>
    </div>
  );
}

export default App;
