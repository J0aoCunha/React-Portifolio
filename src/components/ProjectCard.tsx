import { FolderSimple, GitBranch, Star } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { RepoType } from "../@types/RepoType";
import { axiosClient } from "../services/AxiosClient";

export default function ProjectCard() {
  const [repos, setRepos] = useState<RepoType[]>([]);

  const getRepos = async () => {
    const response = await axiosClient.get("/repos");
    const data = response.data;
    setRepos(data);
    console.log(repos);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      {repos.length == 0 ? (
        <div className="w-[461px] h-[186px] rounded-3xl bg-[#302F3D] shadow-sm flex flex-col justify-evenly  p-[30px] gap-5 opacity-15 animate-pulse "></div>
      ) : (
        repos.map((repo) => {
          return (
            <a
              href={repo.svn_url}
              target="_blank"
              className="w-[461px] h-[186px] rounded-3xl bg-[#302F3D] shadow-sm flex flex-col justify-evenly  p-[30px] gap-5  "
              key={repo.name}
            >
              <div className="flex gap-4" key={repo.name}>
                <FolderSimple size={20} color="#837E9F" />
                <h2 className="font-bold text-base leading-normal not-italic text-[#837E9F]">
                  {repo.name}
                </h2>
              </div>
              <p className="text-sm font-normal leading-5 not-italic text-[#837E9F]">
                {repo.description}
              </p>

              <section className="flex gap-12 justify-between">
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <Star size={20} color="#837E9F" />
                    <p className="text-sm font-normal leading-normal not-italic text-[#837E9F]">
                      {repo.stargazers_count}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <GitBranch size={20} color="#837E9F" />
                    <p className="text-sm font-normal leading-normal not-italic text-[#837E9F]">
                      {repo.forks_count}
                    </p>
                  </div>
                </div>
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
        })
      )}
    </>
  );
}
