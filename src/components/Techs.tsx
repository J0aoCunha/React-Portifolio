const techs = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Prisma",
  "Docker",
  "Git",
  "GitHub",
  "Fastify",
  "Bancos SQL",
];

export default function Techs() {
  return (
    <div className="flex flex-col px-5 py-[30px] h-auto w-[348px] rounded-3xl bg-[#302F3D] shadow-sm gap-5">
      <h2 className="text-[#837E9F] text-xl leading-normal font-bold not-italic">
        Technologies
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {techs.map((tech) => {
          return (
            <div
              className="flex items-center justify-center w-[86px] h-6 rounded-[30px] bg-[#CB92B1]"
              key={tech}
            >
              <h3 className="text-center text-black text-xs font-bold not-italic leading-normal">
                {tech}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
