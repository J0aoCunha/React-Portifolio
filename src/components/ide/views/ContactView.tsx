import { contact } from "../../../data/contact";
import { Line, Key, Str, Punct } from "../Syntax";

const keyLabel: Record<string, string> = {
  MapPin: "location",
  Suitcase: "company",
  GithubLogo: "github",
  LinkedinLogo: "linkedin",
  TwitterLogo: "twitter",
  EnvelopeSimple: "email",
};

export default function ContactView() {
  return (
    <div>
      <Line>
        <Punct>{"{"}</Punct>
      </Line>
      {contact.map((entry, index) => (
        <Line indent={1} key={entry.id}>
          <Key>{keyLabel[entry.icon] ?? entry.icon}</Key>
          <Punct>: </Punct>
          {entry.link ? (
            <a
              href={entry.link}
              target="_blank"
              rel="noreferrer"
              className="text-syn-string hover:underline"
            >
              "{entry.info}"
            </a>
          ) : (
            <Str>{entry.info}</Str>
          )}
          {index < contact.length - 1 && <Punct>,</Punct>}
        </Line>
      ))}
      <Line>
        <Punct>{"}"}</Punct>
      </Line>
    </div>
  );
}
