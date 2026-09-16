import { repos } from "../../../data/projects";
import { Punct, Comment } from "../Syntax";

export default function ProjectView({ repoId }: { repoId: number }) {
  const repo = repos.find((r) => r.id === repoId);
  if (!repo) return null;

  return (
    <div className="flex flex-col gap-4 max-w-3xl">
      <div className="text-ink text-lg font-bold">
        <Punct># </Punct>
        {repo.name}
      </div>
      <p className="text-ink/90 leading-relaxed">{repo.description}</p>
      <div className="flex flex-col gap-1">
        <div>
          <Comment>&gt; language: </Comment>
          <span className="text-ink">{repo.language}</span>
        </div>
        <div>
          <Comment>&gt; repo: </Comment>
          <a
            href={repo.svn_url}
            target="_blank"
            rel="noreferrer"
            className="text-syn-string hover:underline"
          >
            {repo.svn_url}
          </a>
        </div>
      </div>
    </div>
  );
}
