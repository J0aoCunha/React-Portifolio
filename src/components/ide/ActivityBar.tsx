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
 * Basicamente decorativa — mesmo conjunto de ícones do fala.dev
 * (lucide-react). O único ícone interativo é "Files", que abre/fecha
 * o Explorer como painel sobreposto abaixo do breakpoint `sm`; acima
 * dele o Explorer fica sempre visível e esse ícone é inerte.
 */
const topIcons = [Files, Search, GitFork, Bug, Puzzle, Monitor, FlaskConical];

interface ActivityBarProps {
  explorerOpen: boolean;
  onToggleExplorer: () => void;
}

export default function ActivityBar({
  explorerOpen,
  onToggleExplorer,
}: ActivityBarProps) {
  return (
    <div className="w-12 shrink-0 bg-activitybar flex flex-col justify-between py-3 relative z-40">
      <div className="flex flex-col">
        {topIcons.map((Icon, index) => {
          const isFiles = index === 0;
          const isActive = isFiles;
          return (
            <button
              key={Icon.displayName}
              type="button"
              onClick={isFiles ? onToggleExplorer : undefined}
              aria-pressed={isFiles ? explorerOpen : undefined}
              className={`h-12 flex justify-center items-center border-l-2 sm:pointer-events-none ${
                isFiles ? "pointer-events-auto" : ""
              } ${isActive ? "border-ink" : "border-transparent"}`}
            >
              <Icon
                strokeWidth={1.5}
                size={22}
                color={isActive ? "#FAFAFA" : "#888888"}
              />
            </button>
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
