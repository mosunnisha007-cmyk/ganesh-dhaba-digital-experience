import logoMark from "@/assets/ganesh-logo.png.asset.json";
import wordmark from "@/assets/ganesh-wordmark.png.asset.json";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <img
        src={logoMark.url}
        alt="Ganesh Dhaba"
        className="h-16 w-16 shrink-0 rounded-full object-contain transition group-hover:scale-105 sm:h-20 sm:w-20"
      />
      {!compact && (
        <img
          src={wordmark.url}
          alt="Ganesh Dhaba"
          className="h-10 w-auto object-contain sm:h-12"
        />
      )}
    </a>
  );
}
