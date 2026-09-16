export default function TitleBar() {
  return (
    <div className="h-9 shrink-0 bg-activitybar flex items-center px-4 select-none">
      <div className="flex gap-2 w-16">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <span className="flex-1 text-center text-xs text-muted truncate">
        joaocunha — portfolio
      </span>
      <div className="w-16" />
    </div>
  );
}
