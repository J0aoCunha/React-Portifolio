import { ReactNode, CSSProperties } from "react";

export function Line({
  indent = 0,
  children,
}: {
  indent?: number;
  children: ReactNode;
}) {
  return (
    <div
      style={{ "--indent": indent } as CSSProperties}
      className="pl-[calc(var(--indent)*0.75rem)] sm:pl-[calc(var(--indent)*1.25rem)] whitespace-pre-wrap break-words"
    >
      {children}
    </div>
  );
}

export function Key({ children }: { children: ReactNode }) {
  return <span className="text-syn-key">"{children}"</span>;
}

export function Str({ children }: { children: ReactNode }) {
  return <span className="text-syn-string">"{children}"</span>;
}

export function Punct({ children }: { children: ReactNode }) {
  return <span className="text-syn-punct">{children}</span>;
}

export function Comment({ children }: { children: ReactNode }) {
  return <span className="text-syn-comment">{children}</span>;
}
