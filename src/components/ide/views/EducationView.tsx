import { educations } from "../../../data/education";
import { Punct, Comment } from "../Syntax";

export default function EducationView() {
  return (
    <div className="flex flex-col gap-4">
      {educations.map((education) => (
        <div key={education.school}>
          <div className="text-ink font-bold">
            <Punct>## </Punct>
            {education.school}
          </div>
          <div className="pl-4 text-ink/90">
            <Punct>- </Punct>
            {education.course}
          </div>
          <div className="pl-4">
            <Punct>- </Punct>
            <Comment>{`${education.start} - ${education.end}`}</Comment>
          </div>
        </div>
      ))}
    </div>
  );
}
