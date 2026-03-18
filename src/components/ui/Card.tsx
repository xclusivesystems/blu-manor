import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({ children, hover = true, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-bg-card border border-border p-6 shadow-[0_4px_24px_rgba(15,22,35,0.4)]",
        hover &&
          "hover:border-border-hover hover:shadow-[0_8px_32px_rgba(201,168,76,0.08)] hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
