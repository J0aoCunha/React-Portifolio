import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

export default function TerminalWindow({
  title,
  className = "",
  children,
}: TerminalWindowProps) {
  return (
    <div
      className={`rounded-xl bg-panel border border-line shadow-lg overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-panel-alt border-b border-line">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        {title && <span className="ml-2 text-xs text-muted">{title}</span>}
      </div>
      <div className="p-6 flex flex-col gap-5">{children}</div>
    </div>
  );
}
