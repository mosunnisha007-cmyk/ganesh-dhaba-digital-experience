import logoMark from "@/assets/ganesh-logo.png.asset.json";
import wordmark from "@/assets/ganesh-wordmark.png.asset.json";

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
        src={logoMark.url}
        alt="Ganesh Dhaba"
        className={`shrink-0 rounded-full object-contain transition group-hover:scale-105 ${logoClassName}`}
      />
      {!compact && !hideWordmark && (
        <img
          src={wordmark.url}
          alt="Ganesh Dhaba"
          className="h-7 w-auto object-contain sm:h-8"
        />
      )}
    </a>
  );
}
