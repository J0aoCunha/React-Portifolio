import { useState } from "react";
import { CaretRight, CaretDown } from "@phosphor-icons/react";
import { explorerTree } from "../../data/files";
import { isFolder } from "../../@types/ExplorerType";
import FileIcon from "./FileIcon";

interface ExplorerProps {
  activeTab: string | null;
  onOpenFile: (id: string) => void;
}

export default function Explorer({ activeTab, onOpenFile }: ExplorerProps) {
  const [expanded, setExpanded] = useState<string[]>([]);

  function toggleFolder(id: string) {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  return (
    <div className="h-full flex flex-col bg-sidebar text-sm">
      <div className="px-4 pt-3 pb-2 text-xs tracking-wide text-muted uppercase truncate">
        Explorer
      </div>

      <div className="px-2 pb-1 text-xs font-bold text-ink tracking-wide truncate">
        JOAO-CUNHA
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        {explorerTree.map((node) => {
          if (isFolder(node)) {
            const open = expanded.includes(node.id);

            return (
              <div key={node.id}>
                <button
                  onClick={() => toggleFolder(node.id)}
                  className="w-full flex items-center gap-1 px-2 py-1 hover:bg-white/5 text-muted"
                >
                  {open ? <CaretDown size={12} /> : <CaretRight size={12} />}
                  <FileIcon folder open={open} size={16} />
                  <span className="truncate">{node.name}</span>
                </button>
                {open &&
                  node.children.map((file) => (
                    <button
                      key={file.id}
                      onClick={() => onOpenFile(file.id)}
                      className={`w-full flex items-center gap-2 pl-9 pr-2 py-1 text-left hover:bg-white/5 ${
                        activeTab === file.id ? "bg-white/10 text-ink" : "text-muted"
                      }`}
                    >
                      <FileIcon type={file.type} size={14} />
                      <span className="truncate">{file.name}</span>
                    </button>
                  ))}
              </div>
            );
          }

          return (
            <button
              key={node.id}
              onClick={() => onOpenFile(node.id)}
              className={`w-full flex items-center gap-2 pl-5 pr-2 py-1 text-left hover:bg-white/5 ${
                activeTab === node.id ? "bg-white/10 text-ink" : "text-muted"
              }`}
            >
              <FileIcon type={node.type} size={14} />
              <span className="truncate">{node.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
