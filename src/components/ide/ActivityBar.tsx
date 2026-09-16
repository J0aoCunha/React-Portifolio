import {
  Files,
  Search,
  GitFork,
  Bug,
  Puzzle,
  Monitor,
  FlaskConical,
  User,
  Cog,
} from "lucide-react";

/**
 * Puramente decorativa — mesmo conjunto de ícones do fala.dev
 * (lucide-react), sem nenhuma interação de clique. A navegação real
 * acontece só pelo Explorer, que fica sempre visível ao lado.
 */
const topIcons = [Files, Search, GitFork, Bug, Puzzle, Monitor, FlaskConical];

export default function ActivityBar() {
  return (
    <div className="w-12 shrink-0 bg-activitybar flex flex-col justify-between py-3">
      <div className="flex flex-col">
        {topIcons.map((Icon, index) => {
          const isActive = index === 0;
          return (
            <div
              key={Icon.displayName}
              className={`h-12 flex justify-center items-center border-l-2 ${
                isActive ? "border-ink" : "border-transparent"
              }`}
            >
              <Icon
                strokeWidth={1.5}
                size={22}
                color={isActive ? "#FAFAFA" : "#888888"}
              />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col">
        <div className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <User strokeWidth={1.5} size={22} color="#888888" />
        </div>
        <div className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <Cog strokeWidth={1.5} size={22} color="#888888" />
        </div>
      </div>
    </div>
  );
}
