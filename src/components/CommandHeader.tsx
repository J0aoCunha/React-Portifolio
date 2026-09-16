interface CommandHeaderProps {
  command: string;
  link?: string;
  linkHref?: string;
}

export default function CommandHeader({
  command,
  link,
  linkHref,
}: CommandHeaderProps) {
  return (
    <header className="flex flex-wrap items-center p-4 sm:p-6 w-full rounded-xl bg-panel border border-line gap-4 sm:gap-8 justify-between shadow-lg">
      <h1 className="font-bold text-base sm:text-lg text-ink flex items-center gap-2 min-w-0">
        <span className="text-accent shrink-0">$</span>
        <span className="truncate">{command}</span>
        <span className="cursor-blink text-accent shrink-0">_</span>
      </h1>

      {link && (
        <a
          href={linkHref}
          target="_blank"
          rel="noreferrer"
          className="text-muted text-sm hover:text-accent transition-colors shrink-0"
        >
          {link}
        </a>
      )}
    </header>
  );
}
