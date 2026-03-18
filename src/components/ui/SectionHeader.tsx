import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <span className="text-sm uppercase tracking-wide text-primary font-medium">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-libre)] tracking-tight mt-2"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted text-lg mt-4 max-w-2xl",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
