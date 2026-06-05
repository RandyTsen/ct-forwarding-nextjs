import { cn } from "@/lib/utils";

interface InnerLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function InnerLayout({ children, className }: InnerLayoutProps) {
  return (
    <main className={cn("min-h-screen pt-20", className)}>
      {children}
    </main>
  );
}
