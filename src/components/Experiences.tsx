import { ExpType } from "../@types/ExpType";

const experiences: ExpType[] = [
  {
    company: "Banestes",
    start: "2024",
    end: "at the moment",
    role: "Trainee",
  },
  {
    company: "Ivox contact center",
    start: "2022",
    end: "2023",
    role: "telemarketing attendant",
  },
];

export default function Experiences() {
  return (
    <div className="w-[348px] h-auto rounded-3xl bg-[#302F3D] px-5 py-[30px] gap-5 flex flex-col">
      <h2 className="text-[#837E9F] text-xl leading-normal font-bold not-italic">
        Experiences
      </h2>
      {experiences.map((exp) => {
        return (
          <div className="ml-5">
            <h3 className="text-sm font-bold not-italic leading-normal text-[#837E9F] ">
              {exp.company}
            </h3>
            <p className="text-[#837E9F] font-light not-italic leading-normal text-xs">
              {exp.start} - {exp.end}
            </p>
            <p className="text-[#837E9F] font-normal not-italic leading-normal text-xs">
              {exp.role}
            </p>
          </div>
        );
      })}
    </div>
  );
}
