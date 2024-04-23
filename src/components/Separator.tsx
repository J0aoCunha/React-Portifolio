interface HeaderProps {
  nameHeader: string;
  link?: string;
}

export default function Separator({ nameHeader, link }: HeaderProps) {
  return (
    <header className="flex items-center p-8 h-[86px] w-full rounded-[20px] bg-[#302F3D] gap-8 justify-between shadow-md">
      <h1 className="font-bold text-xl not-italic text-[#837E9F]">
        {nameHeader}
      </h1>

      <a
        href="https://github.com/J0aoCunha?tab=repositories"
        className="text-[#837E9F] font-normal text-sm leading-normal not-italic"
      >
        {link}
      </a>
    </header>
  );
}
