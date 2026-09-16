import { techs } from "../../../data/techs";
import { retunrIcons } from "../../../utils/returnIcons";
import { Line, Key, Str, Punct } from "../Syntax";

export default function StackView() {
  return (
    <div>
      <Line>
        <Punct>{"{"}</Punct>
      </Line>
      {techs.map((group, groupIndex) => {
        const key = group.category.replace(/\/$/, "");
        return (
          <div key={group.category}>
            <Line indent={1}>
              <Key>{key}</Key>
              <Punct>: [</Punct>
            </Line>
            {group.items.map((item, itemIndex) => (
              <Line indent={2} key={item}>
                <span className="inline-flex items-center gap-2">
                  {retunrIcons(item)}
                  <Str>{item}</Str>
                </span>
                {itemIndex < group.items.length - 1 && <Punct>,</Punct>}
              </Line>
            ))}
            <Line indent={1}>
              <Punct>]{groupIndex < techs.length - 1 ? "," : ""}</Punct>
            </Line>
          </div>
        );
      })}
      <Line>
        <Punct>{"}"}</Punct>
      </Line>
    </div>
  );
}
