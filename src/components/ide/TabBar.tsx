import { X } from "@phosphor-icons/react";
import { findFile } from "../../data/files";
import FileIcon from "./FileIcon";

interface TabBarProps {
  openTabs: string[];
  activeTab: string | null;
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
}

export default function TabBar({ openTabs, activeTab, onSelect, onClose }: TabBarProps) {
  return (
    <div className="flex bg-tab-inactive overflow-x-auto shrink-0">
      {openTabs.map((id) => {
        const file = findFile(id);
        if (!file) return null;
        const active = id === activeTab;

        return (
          <div
            key={id}
            onClick={() => onSelect(id)}
            className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer shrink-0 ${
              active ? "bg-editor text-ink" : "bg-tab-inactive text-muted"
            }`}
          >
            <FileIcon type={file.type} size={14} />
            <span>{file.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose(id);
              }}
              aria-label={`Fechar ${file.name}`}
              className="ml-1 rounded hover:bg-white/10 hover:text-ink"
            >
              <X size={12} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
