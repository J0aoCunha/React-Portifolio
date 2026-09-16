import { educations } from "../data/education";
import TerminalWindow from "./TerminalWindow";

export default function Educations() {
  return (
    <TerminalWindow title="education.md" className="w-full">
      {educations.map((education) => {
        return (
          <div key={education.school}>
            <div className="flex gap-2 items-center">
              <span className="text-accent text-sm font-bold">&gt;</span>
              <h3 className="text-sm font-bold text-ink">
                {education.school}
              </h3>
            </div>
            <p className="text-muted font-light text-xs ml-4 mt-1">
              {education.start} - {education.end}
            </p>
            <p className="text-muted text-xs ml-4">{education.course}</p>
          </div>
        );
      })}
    </TerminalWindow>
  );
}
