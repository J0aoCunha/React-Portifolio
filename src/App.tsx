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
    <div className="w-full min-h-screen bg-base p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-8 font-mono lg:justify-center lg:items-start">
      <aside className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-6 lg:gap-8 w-full lg:w-[340px] lg:shrink-0">
        <Profile />
        <Information />
        <Techs />
        <Certifications />
        <Educations />
      </aside>

      <main className="flex flex-col gap-6 lg:gap-8 w-full lg:flex-1 lg:max-w-[952px] min-w-0">
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
        <section className="h-auto gap-6 grid grid-cols-1 md:grid-cols-2 items-stretch">
          <ProjectCard />
        </section>
      </main>
    </div>
  );
}

export default App;
