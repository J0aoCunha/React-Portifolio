import { ReactNode } from "react";

export function Line({
  indent = 0,
  children,
}: {
  indent?: number;
  children: ReactNode;
}) {
  return (
    <div
      style={{ paddingLeft: `${indent * 1.25}rem` }}
      className="whitespace-pre-wrap break-words"
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
