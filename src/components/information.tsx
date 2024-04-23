import { retunrIcons } from "../utils/returnIcons";
import { mapType } from "../@types/mapType";

const informations: mapType[] = [
  {
    id: 1,
    icon: "MapPin",
    info: "Brasil",
  },
  {
    id: 2,
    icon: "Suitcase",
    info: "Banestes",
    link: "https://www.banestes.com.br/",
  },
  {
    id: 3,
    icon: "GithubLogo",
    info: "J0aoCunha",
    link: "https://github.com/J0aoCunha",
  },
  {
    id: 4,
    icon: "LinkedinLogo",
    info: "j0aocunha",
    link: "https://www.linkedin.com/in/j0aocunha/",
  },
  {
    id: 5,
    icon: "TwitterLogo",
    info: "Jvjunger1",
    link: "https://twitter.com/Jvjunger1",
  },
  {
    id: 7,
    icon: "EnvelopeSimple",
    info: "jvscunha04@gmail.com",
    link: "mailto:jvscunha04@gmail.com",
  },
];

export default function Information() {
  return (
    <div className="w-[348px] xl:h-auto bg-[#302F3D] rounded-[20px] flex flex-col gap-5 px-10 py-[30px] shadow-md">
      {informations.map((info) => {
        return (
          <div className="flex gap-5 " key={info.id}>
            <span>{retunrIcons(info.icon)}</span>
            <a
              target="_blank"
              href={info.link}
              className="text-[#837E9F] text-sm leading-normal font-normal"
            >
              {info.info}
            </a>
          </div>
        );
      })}
    </div>
  );
}
