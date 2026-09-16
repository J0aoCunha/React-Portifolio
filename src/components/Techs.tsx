import { techs } from "../data/techs";
import TerminalWindow from "./TerminalWindow";

const categoryColor: Record<number, string> = {
  0: "border-accent text-accent",
  1: "border-info text-info",
  2: "border-amber text-amber",
};

export default function Techs() {
  return (
    <TerminalWindow title="ls stack/" className="w-full xl:w-[348px]">
      {techs.map((group, index) => (
        <div key={group.category} className="flex flex-col gap-3">
          <h3 className="text-muted text-xs">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className={`px-3 py-1 rounded-md border text-xs bg-panel-alt ${categoryColor[index % 3]}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </TerminalWindow>
  );
}
