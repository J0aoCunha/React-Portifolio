import { experiences } from "../data/experiences";
import TerminalWindow from "./TerminalWindow";

export default function Experiences() {
  return (
    <TerminalWindow title="experience/" className="w-full xl:w-[952px]">
      {experiences.map((exp, index) => {
        return (
          <div
            key={exp.company}
            className={
              index !== experiences.length - 1
                ? "pb-5 border-b border-line"
                : ""
            }
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-base font-bold text-ink">{exp.company}</h3>
              <span className="text-accent text-sm">{exp.role}</span>
            </div>
            <p className="text-muted text-xs mt-1">
              {exp.start} - {exp.end}
              {exp.location ? ` · ${exp.location}` : ""}
            </p>

            {exp.highlights && (
              <ul className="mt-3 flex flex-col gap-2">
                {exp.highlights.map((line) => (
                  <li
                    key={line}
                    className="text-muted text-sm leading-normal flex gap-2"
                  >
                    <span className="text-accent shrink-0">$</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </TerminalWindow>
  );
}
