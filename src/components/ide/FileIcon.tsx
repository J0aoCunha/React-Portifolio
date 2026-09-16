import { FileText, BracketsCurly, Folder, FolderOpen } from "@phosphor-icons/react";
import { FileType } from "../../@types/ExplorerType";

interface FileIconProps {
  type?: FileType;
  folder?: boolean;
  open?: boolean;
  size?: number;
}

const typeColor: Record<FileType, string> = {
  md: "#519ABA",
  json: "#CBCB41",
  log: "#8A8A8A",
};

export default function FileIcon({ type, folder, open, size = 16 }: FileIconProps) {
  if (folder) {
    const Icon = open ? FolderOpen : Folder;
    return <Icon size={size} color="#DCB67A" weight="fill" />;
  }

  if (type === "json") {
    return <BracketsCurly size={size} color={typeColor.json} />;
  }

  return <FileText size={size} color={type ? typeColor[type] : "#8A8A8A"} />;
}
