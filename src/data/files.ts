import { ExplorerFile, ExplorerNode } from "../@types/ExplorerType";
import { repos } from "./projects";

function slugify(name: string) {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}

const projectFiles: ExplorerFile[] = repos.map((repo) => ({
  id: `project-${repo.id}`,
  name: `${slugify(repo.name)}.md`,
  type: "md",
}));

export const explorerTree: ExplorerNode[] = [
  { id: "about", name: "about.md", type: "md" },
  { id: "contact", name: "contact.json", type: "json" },
  { id: "stack", name: "stack.json", type: "json" },
  { id: "experience", name: "experience.json", type: "json" },
  { id: "education", name: "education.md", type: "md" },
  { id: "certifications", name: "certifications.log", type: "log" },
  { id: "projects", name: "projects", children: projectFiles },
];

export const DEFAULT_OPEN_TABS = ["about"];

const flatFiles: ExplorerFile[] = explorerTree.flatMap((node) =>
  "children" in node ? node.children : [node]
);

export function findFile(id: string): ExplorerFile | undefined {
  return flatFiles.find((file) => file.id === id);
}
