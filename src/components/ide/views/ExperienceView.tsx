import { experiences } from "../../../data/experiences";
import { Line, Key, Str, Punct } from "../Syntax";

export default function ExperienceView() {
  return (
    <div>
      <Line>
        <Punct>[</Punct>
      </Line>
      {experiences.map((exp, index) => (
        <div key={exp.company}>
          <Line indent={1}>
            <Punct>{"{"}</Punct>
          </Line>
          <Line indent={2}>
            <Key>company</Key>
            <Punct>: </Punct>
            <Str>{exp.company}</Str>
            <Punct>,</Punct>
          </Line>
          <Line indent={2}>
            <Key>role</Key>
            <Punct>: </Punct>
            <Str>{exp.role}</Str>
            <Punct>,</Punct>
          </Line>
          <Line indent={2}>
            <Key>period</Key>
            <Punct>: </Punct>
            <Str>{`${exp.start} - ${exp.end}`}</Str>
            <Punct>,</Punct>
          </Line>
          {exp.location && (
            <Line indent={2}>
              <Key>location</Key>
              <Punct>: </Punct>
              <Str>{exp.location}</Str>
              <Punct>,</Punct>
            </Line>
          )}
          {exp.highlights && (
            <>
              <Line indent={2}>
                <Key>highlights</Key>
                <Punct>: [</Punct>
              </Line>
              {exp.highlights.map((line, lineIndex, highlights) => (
                <Line indent={3} key={line}>
                  <Str>{line}</Str>
                  {lineIndex < highlights.length - 1 && <Punct>,</Punct>}
                </Line>
              ))}
              <Line indent={2}>
                <Punct>]</Punct>
              </Line>
            </>
          )}
          <Line indent={1}>
            <Punct>{"}"}{index < experiences.length - 1 ? "," : ""}</Punct>
          </Line>
        </div>
      ))}
      <Line>
        <Punct>]</Punct>
      </Line>
    </div>
  );
}
