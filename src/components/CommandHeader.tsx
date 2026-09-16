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
    <header className="flex items-center p-6 h-[72px] w-full rounded-xl bg-panel border border-line gap-8 justify-between shadow-lg">
      <h1 className="font-bold text-lg text-ink flex items-center gap-2">
        <span className="text-accent">$</span>
        {command}
        <span className="cursor-blink text-accent">_</span>
      </h1>

      {link && (
        <a
          href={linkHref}
          target="_blank"
          rel="noreferrer"
          className="text-muted text-sm hover:text-accent transition-colors"
        >
          {link}
        </a>
      )}
    </header>
  );
}
