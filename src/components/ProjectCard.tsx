import { FolderSimple } from "@phosphor-icons/react";
import { RepoType } from "../@types/RepoType";

const repos: RepoType[] = [
  {
    id: 1,
    name: "API JUJUTSU KAISEN",
    description:
      "Esta é uma API dedicada ao anime JUJUTSU KAISEN. Ela fornece uma ampla gama de informações relacionadas ao anime. Esta API foi desenvolvida usando Node.js e Express",
    language: "TypeScript",
    svn_url: "https://github.com/J0aoCunha/API-JJK",
  },
  {
    id: 2,
    name: "Login Page",
    description:
      "Este é um projeto simples de uma página de login desenvolvida usando React, React Hook Form e Zod para validação de formulários.",
    language: "TypeScript",
    svn_url: "https://github.com/J0aoCunha/React-Login-Page",
  },
  {
    id: 3,
    name: "API THE VAMPIRE DIARIES",
    description:
      "API simples para administrar informações sobre personagens de Diários de Vampiros. Esta API foi desenvolvida usando Node.js e Fastify.",
    language: "TypeScript",
    svn_url: "https://github.com/J0aoCunha/Ts-node-api-tvd",
  },
];

export default function ProjectCard() {
  return (
    <>
      {repos.map((repo) => {
        return (
          <a
            href={repo.svn_url}
            target="_blank"
            className="xl:w-[461px] xl:h-[186px] rounded-3xl bg-[#302F3D] shadow-md flex flex-col px-8 py-6 gap-5 md:w-auto"
            key={repo.id}
          >
            <div className="flex gap-4">
              <FolderSimple size={20} color="#837E9F" />
              <h2 className="font-bold text-base leading-normal not-italic text-[#837E9F]">
                {repo.name}
              </h2>
            </div>
            <p className="text-sm font-normal leading-5 not-italic text-[#837E9F]">
              {repo.description}
            </p>

            <section className="flex gap-12">
              <div className="flex gap-2 items-center">
                {repo.language === "TypeScript" ? (
                  <div className="w-4 h-4 rounded-full border-4 border-[#837E9F] bg-blue-600"></div>
                ) : repo.language === "JavaScript" ? (
                  <div className="w-4 h-4 rounded-full border-4 border-[#837E9F] bg-[#E7DE79] "></div>
                ) : null}
                <span className="text-sm font-normal leading-normal not-italic text-[#837E9F]">
                  {repo.language}
                </span>
              </div>
            </section>
          </a>
        );
      })}
    </>
  );
}
