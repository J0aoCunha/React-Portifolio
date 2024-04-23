import { EducationType } from "../@types/EducationType";

const educations: EducationType[] = [
  {
    school: "Maria Leonor Pereira da Silva",
    start: "2010",
    end: "2018",
    course: "basic education",
  },
  {
    school: "Irmã Maria Horta",
    start: "2019",
    end: "2021",
    course: "high school",
  },
  {
    school: "Universidade Vila Velha",
    start: "2023",
    end: "studying",
    course: "Computer Science",
  },
  {
    school: "Núcleo de Línguas UFES",
    start: "2016",
    end: "Paralyzed",
    course: "English course",
  },
];

export default function Educations() {
  return (
    <div className="w-[348px] xl:h-auto rounded-3xl bg-[#302F3D] px-5 py-[30px] gap-5 flex flex-col shadow-md">
      <h2 className="text-[#837E9F] text-xl leading-normal font-bold not-italic">
        Education
      </h2>
      {educations.map((education) => {
        return (
          <div className="ml-5" key={education.school}>
            <div className="flex gap-2 items-center">
              <span className="text-sm font-bold not-italic leading-normal text-[#837E9F] ">
                ·
              </span>
              <h3 className="text-sm font-bold not-italic leading-normal text-[#837E9F] ">
                {education.school}
              </h3>
            </div>
            <p className="text-[#837E9F] font-light not-italic leading-normal text-xs ml-3">
              {education.start} - {education.end}
            </p>
            <p className="text-[#837E9F] font-normal not-italic leading-normal text-xs ml-3">
              {education.course}
            </p>
          </div>
        );
      })}
    </div>
  );
}
