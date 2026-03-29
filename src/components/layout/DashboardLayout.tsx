import { Bell } from "lucide-react";
import { Outlet } from "react-router-dom";
import { BrandMark, SearchField, SidebarNav } from "@/components/common";
import { companyNav, notaryNav } from "@/data/mock-data";
import { themeTokens } from "@/theme/tokens";

export function DashboardLayout({ variant }: { variant: "company" | "notary" }) {
  const items = variant === "company" ? companyNav : notaryNav;
  const profile = themeTokens[variant];

  return (
    <div className="flex min-h-screen bg-[#f6f7fc]">
      <aside className="hidden w-[248px] border-r border-ink-100 bg-white lg:flex lg:flex-col">
        <div className="border-b border-emerald-500/40 px-6 py-5">
          <BrandMark />
        </div>
        <div className="flex-1 px-4 py-6">
          <SidebarNav items={items} />
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-white/80 bg-white/90 backdrop-blur">
          <div className="flex items-center gap-4 px-5 py-4 md:px-8">
            <div className="flex-1">
              <SearchField />
            </div>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-500">
              <Bell className="h-4 w-4" />
            </button>
            <div className="hidden items-center gap-3 border-l border-ink-100 pl-4 sm:flex">
              <div className="text-right">
                <div className="text-sm font-extrabold text-ink-900">{profile.name}</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">{profile.label}</div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#18253f,#68506a)] text-xs font-bold text-white">
                AS
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-5 py-8 md:px-8">
          <div className="mx-auto max-w-[1200px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
