import Information from "./components/information";
import Profile from "./components/profile";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen bg-[#22212C] p-10 flex flex-row">
      <aside className="flex flex-col grid-cols-1 gap-8">
        <Profile
          name="João Victor Da Silva Cunha"
          image="https://github.com/J0aoCunha.png"
          role="Computer science student"
        />
        <Information />
      </aside>
    </div>
  );
}

export default App;
