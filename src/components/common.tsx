import type { ReactNode } from "react";
import { Check, ChevronDown, Search, UploadCloud } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { MetricCard, NavItem } from "@/types/models";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border text-lg font-extrabold",
          light
            ? "border-white/25 bg-white/10 text-white"
            : "border-brand-200 bg-brand-50 text-brand-600",
        )}
      >
        CE
      </div>
      <div className={cn("text-[15px] font-extrabold", light ? "text-white" : "text-ink-900")}>
        Closing Engage
      </div>
    </div>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5",
        variant === "primary" && "bg-brand-600 text-white shadow-[0_10px_24px_rgba(24,90,188,0.25)] hover:bg-brand-700",
        variant === "secondary" && "bg-white text-brand-600 shadow-[0_16px_38px_rgba(20,48,112,0.08)] hover:bg-brand-50",
        variant === "outline" && "border border-ink-200 bg-white text-ink-900 hover:border-brand-200",
        variant === "ghost" && "bg-transparent text-brand-600 hover:bg-brand-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Input({
  label,
  icon,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: ReactNode;
}) {
  return (
    <label className="block">
      {label ? <span className="mb-2 block text-sm font-semibold text-ink-900">{label}</span> : null}
      <span
        className={cn(
          "flex h-13 items-center gap-3 rounded-xl border border-ink-100 bg-ink-50 px-4 text-sm text-ink-500 focus-within:border-brand-200 focus-within:bg-white",
          className,
        )}
      >
        {icon}
        <input className="h-full w-full bg-transparent outline-none placeholder:text-ink-300" {...props} />
      </span>
    </label>
  );
}

export function Textarea({
  label,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) {
  return (
    <label className="block">
      {label ? <span className="mb-2 block text-sm font-semibold text-ink-900">{label}</span> : null}
      <textarea
        className={cn(
          "min-h-28 w-full rounded-xl border border-ink-100 bg-white px-4 py-3 text-sm text-ink-700 outline-none placeholder:text-ink-300 focus:border-brand-200",
          className,
        )}
        {...props}
      />
    </label>
  );
}

export function Select({
  label,
  options,
  className,
}: {
  label?: string;
  options: string[];
  className?: string;
}) {
  return (
    <label className="block">
      {label ? <span className="mb-2 block text-sm font-semibold text-ink-900">{label}</span> : null}
      <span
        className={cn(
          "flex h-13 items-center justify-between rounded-xl border border-ink-100 bg-white px-4 text-sm text-ink-700",
          className,
        )}
      >
        <span>{options[0]}</span>
        <ChevronDown className="h-4 w-4 text-ink-400" />
      </span>
    </label>
  );
}

export function Badge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Received: "bg-slate-100 text-slate-600",
    Assigned: "bg-brand-50 text-brand-600",
    "Under Review": "bg-warning-100 text-warning-600",
    Approved: "bg-green-100 text-success-600",
    Completed: "bg-success-100 text-success-600",
    Pending: "bg-warning-100 text-warning-600",
    "Pending Invite": "bg-warning-100 text-warning-600",
    Active: "bg-success-100 text-success-600",
    Inactive: "bg-slate-100 text-slate-600",
    Submitted: "bg-brand-50 text-brand-600",
    "In Progress": "bg-warning-100 text-warning-600",
    "Pending Upload": "bg-danger-100 text-danger-600",
    Verified: "bg-success-100 text-success-600",
    Admin: "bg-brand-50 text-brand-600",
    Member: "bg-slate-100 text-slate-600",
    "Pending Review": "bg-warning-100 text-warning-600",
  };

  return (
    <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", map[status] ?? "bg-slate-100 text-slate-600")}>
      {status}
    </span>
  );
}

export function Surface({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("surface", className)}>{children}</div>;
}

export function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-ink-900">{title}</h1>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-500">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function MetricCards({ items }: { items: MetricCard[] }) {
  const toneClass = {
    brand: "bg-brand-50 text-brand-600",
    warning: "bg-warning-100 text-warning-600",
    success: "bg-success-100 text-success-600",
  };

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Surface key={item.title} className="p-6">
          <div className="mb-5 flex items-start justify-between">
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl",
                toneClass[item.tone ?? "brand"],
              )}
            >
              <Check className="h-5 w-5" />
            </span>
            {item.helper ? <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-300">{item.helper}</span> : null}
          </div>
          <div className="text-sm font-semibold text-ink-500">{item.title}</div>
          <div className="mt-2 text-5xl font-extrabold tracking-[-0.04em] text-ink-900">{item.value}</div>
        </Surface>
      ))}
    </div>
  );
}

export function SearchField({ placeholder = "Search orders, notaries, or documents..." }: { placeholder?: string }) {
  return (
    <div className="flex h-12 w-full items-center gap-3 rounded-xl border border-white/80 bg-white px-4 shadow-[0_8px_30px_rgba(20,48,112,0.05)]">
      <Search className="h-4 w-4 text-ink-300" />
      <span className="text-sm text-ink-300">{placeholder}</span>
    </div>
  );
}

export function SidebarNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="space-y-2">
      {items.map(({ href, label, icon: Icon }) => (
        <NavLink
          key={href}
          to={href}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-semibold text-ink-900 transition",
              isActive && "bg-brand-50 text-brand-600",
            )
          }
        >
          {Icon ? <Icon className="h-5 w-5" /> : null}
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export function FooterBand() {
  return (
    <div className="border-t border-ink-100 pt-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-500 md:flex md:justify-between">
      <span>© 2026 Closing Engage System</span>
      <span>Privacy Policy</span>
    </div>
  );
}

export function UploadZone({
  title = "Drag & Drop Scanbacks",
  subtitle = "Drop your PDF files here or click to browse your computer.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-[28px] border border-dashed border-ink-200 bg-white px-6 py-12 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <UploadCloud className="h-8 w-8" />
      </div>
      <div className="text-3xl font-extrabold tracking-[-0.03em] text-ink-900">{title}</div>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-ink-500">{subtitle}</p>
      <Button variant="outline" className="mt-8">
        Browse Files
      </Button>
    </div>
  );
}

export function Table({
  headers,
  children,
  footer,
}: {
  headers: string[];
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <Surface className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-ink-50 text-xs uppercase tracking-[0.14em] text-ink-400">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-6 py-4 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      {footer ? <div className="border-t border-ink-100 px-6 py-4">{footer}</div> : null}
    </Surface>
  );
}
