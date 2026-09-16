import { GitBranch } from "@phosphor-icons/react";
import { findFile } from "../../data/files";
import { FileType } from "../../@types/ExplorerType";

const languageLabel: Record<FileType, string> = {
  md: "Markdown",
  json: "JSON",
  log: "Log",
};

export default function StatusBar({ activeTab }: { activeTab: string | null }) {
  const file = activeTab ? findFile(activeTab) : undefined;

  return (
    <div className="h-6 shrink-0 bg-statusbar text-muted flex items-center justify-between px-3 text-xs select-none">
      <div className="flex items-center gap-1">
        <GitBranch size={14} />
        <span>main</span>
      </div>
      {file && (
        <div className="hidden sm:flex items-center gap-3">
          <span>UTF-8</span>
          <span>{languageLabel[file.type]}</span>
        </div>
      )}
    </div>
  );
}
