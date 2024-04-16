import Information from "./components/information";
import Profile from "./components/profile";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen bg-[#22212C] p-10 flex grid-cols-2 gap-[60px] font-MerriweatherSans">
      <aside className="flex flex-col grid-cols-1 gap-8">
        <Profile
          name="João Victor Da Silva Cunha"
          image="https://github.com/J0aoCunha.png"
          role="Computer science student"
        />
        <Information />
      </aside>
      <main className="flex-1">
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
      </main>
    </div>
  );
}

export default App;
