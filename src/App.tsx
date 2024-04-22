import Educations from "./components/Education";
import Experiences from "./components/Experiences";
import ProjectCard from "./components/ProjectCard";
import Techs from "./components/Techs";
import Information from "./components/information";
import Profile from "./components/profile";

import "./index.css";

function App() {
  return (
    <div className="w-full h-full bg-[#22212C] p-10 flex gap-[60px] font-MerriweatherSans justify-center">
      <aside className="flex flex-col grid-cols-1 gap-8">
        <Profile
          name="João Victor Da Silva Cunha"
          image="https://github.com/J0aoCunha.png"
          role="Computer science student"
        />
        <Information />
        <Techs />
        <Experiences />
        <Educations />
      </aside>
      <main className="flex flex-col w-[952px] gap-8">
        <header className="flex items-center p-8 h-[86px] w-full rounded-[20px] bg-[#302F3D] gap-8 justify-between">
          <h1 className="font-bold text-xl not-italic text-[#837E9F]">
            My Projects
          </h1>

          <a
            href="https://github.com/J0aoCunha?tab=repositories"
            className="text-[#837E9F] font-normal text-sm leading-normal not-italic"
          >
            ver todos
          </a>
        </header>

        <section className=" h-auto gap-8 grid grid-cols-2 items-start justify-center">
          <ProjectCard />
        </section>
      </main>
    </div>
  );
}

export default App;
