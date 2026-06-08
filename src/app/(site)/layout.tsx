import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/common/CustomCursor";

/**
 * Site layout — applies to all public website pages.
 * Intentionally NOT applied to /studio (which lives outside this group).
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col bg-white text-slate font-body grain">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
