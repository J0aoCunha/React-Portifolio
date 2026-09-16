import { CheckCircle } from "@phosphor-icons/react";
import { certifications } from "../data/certifications";
import TerminalWindow from "./TerminalWindow";

const categoryColor: Record<string, string> = {
  "power-platform/": "text-accent",
  "react-node/": "text-magenta",
};

export default function Certifications() {
  return (
    <TerminalWindow title="certifications.log" className="w-full xl:w-[348px]">
      {certifications.map((group) => (
        <div key={group.category} className="flex flex-col gap-3">
          <h3 className="text-muted text-xs">
            {group.category}{" "}
            <span className="text-muted/70">// {group.issuer}</span>
          </h3>
          <div className="flex flex-col gap-2">
            {group.items.map((cert) => (
              <div className="flex gap-3 items-start" key={cert.name}>
                <CheckCircle
                  size={16}
                  color={
                    group.category === "power-platform/"
                      ? "#7EE787"
                      : "#D2A8FF"
                  }
                  className="mt-0.5 shrink-0"
                />
                <div className="flex flex-col">
                  <span
                    className={`text-sm font-bold ${categoryColor[group.category]}`}
                  >
                    {cert.name}
                  </span>
                  <span className="text-muted text-xs">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </TerminalWindow>
  );
}
