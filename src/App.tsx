import Educations from "./components/Education";
import Experiences from "./components/Experiences";
import Separator from "./components/Separator";
import ProjectCard from "./components/ProjectCard";
import Techs from "./components/Techs";
import Information from "./components/information";
import Profile from "./components/profile";

import "./index.css";
import { HandWaving } from "@phosphor-icons/react";

function App() {
  return (
    <div className="w-full h-full bg-[#22212C] p-10 flex flex-col xl:flex-row gap-[60px] font-MerriweatherSans justify-center md:flex-col">
      <aside className="flex xl:flex-col lg:flex lg:flex-row lg:flex-wrap gap-8 flex-wrap justify-center md:grid md:grid-cols-2 ">
        <Profile
          name="João Victor Da Silva Cunha"
          role="Computer science student"
        />
        <Information />
        <Techs />
        <Experiences />
        <Educations />
      </aside>
      <main className="flex flex-col xl:w-[952px] gap-8 md:w-auto ">
        <Separator nameHeader="My Projects" link="See More" />

        <section className=" h-auto gap-8 grid xl:grid-cols-2 items-start justify-center md:grid-cols-1">
          <ProjectCard />
        </section>
        <Separator nameHeader="About me" />
        <section className="xl:w-[952px] h-auto rounded-[20px] bg-[#302F3D] shadow-md flex flex-col items-center justify-center p-8 gap-4 md:w-auto">
          <h3 className="text-[#837E9F] text-lg not-italic font-bold leading-normal self-start p-6 pb-0 flex gap-2 items-center">
            Hi ! <HandWaving size={24} />
          </h3>

          <p className="text-[#837E9F] text-base not-italic font-normal leading-normal p-6 pt-0 gap-7 flex flex-col">
            <span>
              my name is João Victor da Silva, I'm 20 years old, and I live in
              Vitória - ES. After completing high school, I discovered my
              passion for programming, which led me to start my academic journey
              in this field. Upon entering college, I found my true calling and
              immersed myself in a universe that immediately captivated me.
            </span>

            <span>
              Currently, I am employed at Banestes, where I secured an
              internship that not only allows me to enhance my technical skills
              but also to develop valuable relationships with colleagues who
              support my journey.
            </span>

            <span>
              With determination and focus, my goal is to become a full stack
              developer and contribute to a major technology company
            </span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
