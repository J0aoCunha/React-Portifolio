import { CheckCircle } from "@phosphor-icons/react";
import { certifications } from "../data/certifications";
import TerminalWindow from "./TerminalWindow";

export default function Certifications() {
  return (
    <TerminalWindow title="certifications.log" className="w-full xl:w-[348px]">
      {certifications.map((cert) => (
        <div className="flex gap-3 items-start" key={cert.id}>
          <CheckCircle size={18} color="#7EE787" className="mt-0.5 shrink-0" />
          <span className="text-muted text-sm leading-normal">{cert.name}</span>
        </div>
      ))}
    </TerminalWindow>
  );
}
