import { retunrIcons } from "../utils/returnIcons";
import { contact } from "../data/contact";
import TerminalWindow from "./TerminalWindow";

export default function Information() {
  return (
    <TerminalWindow title="contact.sh" className="w-full">
      {contact.map((info) => {
        return (
          <div className="flex gap-4 items-center" key={info.id}>
            <span>{retunrIcons(info.icon)}</span>
            {info.link ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={info.link}
                className="text-muted text-sm hover:text-accent transition-colors"
              >
                {info.info}
              </a>
            ) : (
              <span className="text-muted text-sm">{info.info}</span>
            )}
          </div>
        );
      })}
    </TerminalWindow>
  );
}
