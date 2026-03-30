import { useEffect, useRef, useState } from "react";
import { Bell, ChevronDown, Plus, Repeat2 } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button, SearchField, SidebarNav } from "@/components/common";
import { companyNav, notaryNav } from "@/data/mock-data";
import { themeTokens } from "@/theme/tokens";

export function DashboardLayout({ variant }: { variant: "company" | "notary" }) {
  const location = useLocation();
  const items = variant === "company" ? companyNav : notaryNav;
  const profile = themeTokens[variant];
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const switchTarget = variant === "company"
    ? { href: "/notary/dashboard", label: "Switch to Notary Dashboard", helper: "Open your notary workspace" }
    : { href: "/company/dashboard", label: "Switch to Title Company Dashboard", helper: "Open your company workspace" };

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [menuOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-[#f8f8fe]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[272px] border-r border-[#e5ebf5] bg-white lg:flex lg:flex-col">
        <div className="border-b border-[#d9e7da] px-6 py-5">
          <img
            src="/branding/closing-engage-logo.svg"
            alt="Closing Engage"
            className="h-12 w-auto object-contain"
          />
        </div>
        <div className="flex-1 px-4 py-5">
          <SidebarNav items={items} />
        </div>
        {variant === "company" ? (
          <div className="px-5 pb-6">
            <Link to="/company/orders/new" className="block">
              <Button className="h-[48px] w-full rounded-[12px] text-[14px] font-semibold shadow-[0_14px_32px_rgba(24,90,188,0.18)]">
                <Plus className="mr-2 h-4 w-4" />
                Create New Order
              </Button>
            </Link>
          </div>
        ) : null}
      </aside>

      <div className="flex min-h-screen flex-1 flex-col lg:pl-[272px]">
        <header className="sticky top-0 z-20 border-b border-[#e5ebf5] bg-white/96 backdrop-blur">
          <div className="flex items-center justify-between gap-5 px-5 py-4 md:px-8">
            <div className="min-w-0 flex-1 max-w-[880px]">
              <SearchField />
            </div>
            <div className="flex shrink-0 items-center gap-5 border-l border-[#e5ebf5] pl-5">
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e5ebf5] bg-white text-ink-500">
                <Bell className="h-4 w-4" />
              </button>
              <div ref={menuRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="flex items-center gap-3 rounded-2xl px-2 py-1.5 transition-colors hover:bg-[#f6f8fd]"
              >
                <div className="text-right">
                  <div className="text-sm font-extrabold text-ink-900">{profile.name}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">{profile.label}</div>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#18253f,#68506a)] text-xs font-bold text-white">
                  AS
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-ink-400 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {menuOpen ? (
                <div className="absolute right-0 top-[calc(100%+10px)] z-30 w-[252px] overflow-hidden rounded-[18px] border border-[#dfe6f2] bg-white p-2.5 shadow-[0_18px_38px_rgba(20,48,112,0.11)]">
                  <div className="mb-2 rounded-[14px] bg-[#f7f9fe] px-3.5 py-3">
                    <div className="text-[13px] font-extrabold text-ink-900">{profile.name}</div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      {profile.label}
                    </div>
                  </div>
                  <Link
                    to={switchTarget.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-start gap-3 rounded-[14px] px-3.5 py-3 text-left transition-colors hover:bg-[#f6f8fd]"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-[#eef4ff] text-brand-600">
                      <Repeat2 className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold leading-[1.4] text-ink-900">{switchTarget.label}</div>
                      <div className="mt-1 text-[12px] leading-[1.55] text-ink-500">{switchTarget.helper}</div>
                    </div>
                  </Link>
                </div>
              ) : null}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-5 py-8">
          <div className="mx-auto max-w-[1520px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
