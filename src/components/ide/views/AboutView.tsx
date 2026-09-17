import Photo from "../../Photo";
import { profile, about } from "../../../data/profile";
import { Punct, Comment } from "../Syntax";

export default function AboutView() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4">
        <Photo image="https://github.com/J0aoCunha.png" />
        <div>
          <div className="text-ink text-lg font-bold">
            <Punct>#</Punct> {profile.name}
          </div>
          <div className="text-syn-comment">&gt; {profile.role}</div>
          <div className="text-syn-comment">&gt; {profile.location}</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {about.map((paragraph, index) => (
          <p key={index} className="text-ink/90 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <Comment>{"// veja contact.json, stack.json e experience.json no Explorer pra saber mais"}</Comment>
    </div>
  );
}
