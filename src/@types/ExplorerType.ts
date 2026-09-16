export type FileType = "md" | "json" | "log";

export type ExplorerFile = {
  id: string;
  name: string;
  type: FileType;
};

export type ExplorerFolder = {
  id: string;
  name: string;
  children: ExplorerFile[];
};

export type ExplorerNode = ExplorerFile | ExplorerFolder;

export function isFolder(node: ExplorerNode): node is ExplorerFolder {
  return "children" in node;
}
