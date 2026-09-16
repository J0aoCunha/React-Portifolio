import { techs } from "../data/techs";
import TerminalWindow from "./TerminalWindow";
import { retunrIcons } from "../utils/returnIcons";

const categoryColor: Record<string, string> = {
  "power-platform/": "border-accent text-accent",
  "languages/": "border-info text-info",
  "web-dev/": "border-magenta text-magenta",
  "tools/": "border-amber text-amber",
};

export default function Techs() {
  return (
    <TerminalWindow title="ls stack/" className="w-full">
      {techs.map((group) => (
        <div key={group.category} className="flex flex-col gap-3">
          <h3 className="text-muted text-xs">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md border text-xs bg-panel-alt ${categoryColor[group.category]}`}
              >
                {retunrIcons(item)}
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </TerminalWindow>
  );
}
