import { FolderSimple } from "@phosphor-icons/react";
import { repos } from "../data/projects";

export default function ProjectCard() {
  return (
    <>
      {repos.map((repo) => {
        return (
          <a
            href={repo.svn_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-panel border border-line shadow-lg flex flex-col px-6 py-5 gap-4 hover:border-accent transition-colors"
            key={repo.id}
          >
            <div className="flex gap-3 items-center">
              <FolderSimple size={20} color="#7EE787" />
              <h2 className="font-bold text-base text-ink">{repo.name}</h2>
            </div>
            <p className="text-sm leading-5 text-muted">{repo.description}</p>

            <div className="flex gap-2 items-center mt-auto">
              {repo.language === "TypeScript" ? (
                <div className="w-3 h-3 rounded-full bg-info" />
              ) : repo.language === "JavaScript" ? (
                <div className="w-3 h-3 rounded-full bg-amber" />
              ) : null}
              <span className="text-xs text-muted">{repo.language}</span>
            </div>
          </a>
        );
      })}
    </>
  );
}
