import logoMark from "@/assets/ganesh-logo.png";

export function Logo({
  compact = false,
  hideWordmark = false,
  logoClassName = "h-11 w-11",
}: {
  compact?: boolean;
  hideWordmark?: boolean;
  logoClassName?: string;
}) {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <img
        src={logoMark}
        alt="Ganesh Dhaba"
        className={`shrink-0 rounded-full object-contain transition group-hover:scale-105 ${logoClassName}`}
      />
      {!compact && !hideWordmark && (
        <span className="font-display text-xl font-bold tracking-wide text-foreground sm:text-2xl transition-colors group-hover:text-primary">
          Ganesh <span className="text-primary group-hover:text-gold transition-colors">Dhaba</span>
        </span>
      )}
    </a>
  );
}

