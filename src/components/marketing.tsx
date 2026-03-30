import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Lock, Mail, ShieldCheck } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { BrandMark, Button, Input, SectionTitle, Surface } from "@/components/common";
import { publicNav, reliabilityCards, serviceCards } from "@/data/mock-data";
import { placeholderAction } from "@/lib/utils";
import { themeTokens } from "@/theme/tokens";

export function PublicHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 lg:px-12">
        {/* LEFT: Logo (Icon only) */}
        <Link to="/" className="flex items-center">
          <div className="h-14 w-14 overflow-hidden rounded-lg">
            <img
              src="/branding/closing-engage-logo.svg"
              alt="Closing Engage logo"
              className="h-14 w-auto min-w-[300px] object-contain object-left"
            />
          </div>
        </Link>

        {/* CENTER: Nav links */}
        <nav className="hidden items-center gap-7 text-[13.5px] font-medium md:flex">
          {publicNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                clsx(
                  "transition-colors hover:text-brand-600",
                  isActive ? "font-semibold text-brand-600" : "text-ink-600",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT: Login + Sign Up */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-lg border border-ink-200 px-5 py-2 text-[13px] font-semibold text-ink-700 transition-all hover:border-brand-300 hover:text-brand-600 sm:inline-flex"
          >
            Login
          </Link>
          <Link to="/signup/role-selection">
            <button className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="page-shell pt-8 md:pt-10">
      <div
        className="overflow-hidden rounded-[34px] px-6 py-10 text-white shadow-[0_16px_38px_rgba(20,48,112,0.08)] md:px-10 md:py-14 xl:min-h-[700px] xl:px-14"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7, 22, 46, 0.88) 0%, rgba(10, 31, 66, 0.76) 38%, rgba(22, 52, 104, 0.38) 68%, rgba(22, 52, 104, 0.18) 100%), url('/branding/closing-engage-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid gap-8 xl:min-h-[560px] lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/12 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Built for Title & Escrow Teams
            </div>
            <h1 className="max-w-[680px] text-5xl font-extrabold leading-[0.92] tracking-[-0.05em] md:text-6xl xl:text-7xl">
              A Modern Platform for managing Closing Orders
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-7 text-white/82 xl:text-lg">
              Streamline your entire closing process with a centralized platform designed to manage signing orders, coordinate with notaries, and maintain full visibility from start to finish
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Get Started</Button>
            </div>
          </div>

          <Surface className="border-white/20 bg-white/90 p-6 text-ink-900 backdrop-blur md:p-7">
            <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-600">Platform Capabilities</div>
            <ul className="space-y-4 text-sm font-semibold">
              {[
                "Efficient Notary Assignment",
                "Real-Time Order Tracking",
                "Secure Document Handling",
                "Centralized Workflow Management",
                "Built for High-Volume Closings",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Surface>
        </div>
      </div>
    </section>
  );
}

export function ReliabilitySection() {
  return (
    <section className="page-shell py-20">
      <SectionTitle
        title="Engineered for Reliability and Performance"
        subtitle="Our platform is designed to support the demands of modern closing workflows, delivering consistent performance, secure document handling, and dependable coordination between title companies and notaries."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {reliabilityCards.map(({ title, body, icon: Icon }) => (
          <Surface key={title} className="p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-extrabold tracking-[-0.03em] text-ink-900">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-500">{body}</p>
          </Surface>
        ))}
      </div>
    </section>
  );
}

export function WorkflowSection() {
  const steps = [
    ["1", "Notary assignment", "Enter closing details and securely upload required documents."],
    ["2", "Signing Completion", "The notary completes the signing in accordance with closing requirements"],
    ["3", "Scanback Review", "Documents are reviewed and approved prior to shipment to reduce errors and delays."],
    ["4", "Secure Upload", "Signed documents are uploaded through the portal."],
  ];

  return (
    <section className="page-shell pb-20">
      <SectionTitle
        title="The closing workflow, Simplified"
        subtitle="A structured process designed to improve coordination, reduce delays, and provide full visibility from order placement to completion"
      />
      <div className="grid gap-5 md:grid-cols-4">
        {steps.map(([number, title, body]) => (
          <div key={number} className="relative pt-10">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-extrabold text-white">
              {number}
            </div>
            <div className="h-px bg-brand-100" />
            <div className="pt-5">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-ink-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-500">{body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Surface className="bg-[#eff3ff] p-8">
          <div className="text-2xl font-extrabold tracking-[-0.03em] text-ink-900">For Title Companies</div>
          <ul className="mt-5 space-y-3 text-sm text-ink-600">
            <li>Submit orders in under 60 seconds</li>
            <li>Live tracking of signing status</li>
            <li>Instant download of scanbacks</li>
          </ul>
          <Button className="mt-8">Register Company</Button>
        </Surface>
        <Surface className="bg-[#1f2430] p-8 text-white">
          <div className="text-2xl font-extrabold tracking-[-0.03em]">For Notaries</div>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>Receive premium local assignments</li>
            <li>Mobile-friendly task completion</li>
            <li>Simplified scanback uploading</li>
          </ul>
          <Button className="mt-8 bg-brand-500 hover:bg-brand-400">Join Notary Pool</Button>
        </Surface>
      </div>
    </section>
  );
}

export function SecuritySection() {
  return (
    <section className="page-shell pb-20">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionTitle
            title="Security is Our Foundation"
            subtitle="Closing Engage is built on enterprise-grade infrastructure to protect sensitive closing data, ensure compliance, and maintain secure document handling at every stage of the transaction"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["SSL Encryption", "256-bit bank-level encryption"],
              ["Secure Cloud Storage", "SOC 2-compliant infrastructure for secure document storage"],
              ["Role-Based Access Control", "Granular permissions to protect sensitive information"],
              ["Activity Tracking", "Full visibility into every action for compliance and accountability"],
            ].map(([title, body]) => (
              <Surface key={title} className="p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="font-extrabold text-ink-900">{title}</div>
                <div className="mt-2 text-sm leading-6 text-ink-500">{body}</div>
              </Surface>
            ))}
          </div>
        </div>
        <Surface className="flex items-center justify-center bg-[linear-gradient(135deg,#eef3ff,#f4f7fb)] p-8">
          <div className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-brand-600 shadow-[0_16px_38px_rgba(20,48,112,0.08)]">
              <Lock className="h-9 w-9" />
            </div>
            <div className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-ink-300">Enterprise Grade</div>
          </div>
        </Surface>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="page-shell pb-20">
      <Surface className="bg-[#eef2fb] p-10">
        <div className="text-2xl font-extrabold leading-10 tracking-[-0.03em] text-ink-900">
          "Closing Engage has completely redefined how we manage our settlement workflows. The transparency and efficiency provided by the platform are unmatched in the industry."
        </div>
        <div className="mt-8">
          <div className="font-extrabold text-ink-900">Sarah J. Miller</div>
          <div className="text-sm text-ink-500">COO, Elite Title & Escrow</div>
        </div>
      </Surface>
    </section>
  );
}

export function FooterBandSection() {
  return (
    <section className="bg-brand-600 py-20">
      <div className="container-custom text-center text-white">
        <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Ready to streamline your closing workflow?
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button className="h-12 rounded-lg bg-white px-8 text-base font-bold text-brand-600 hover:bg-ink-50">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-lg border-white/40 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PublicFooter() {
  return (
    <footer className="w-full bg-white pb-12 pt-20">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Col 1: Logo + description */}
          <div>
            <div className="flex items-center">
              <div className="h-10 w-10 overflow-hidden">
                <img
                  src="/branding/closing-engage-logo.svg"
                  alt="Closing Engage"
                  className="h-10 w-auto min-w-[200px] object-contain object-left"
                />
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              The Digital Notary Standard. Redefining how closings happen in the digital age.
            </p>
          </div>

          {/* Col 2: Platform links */}
          <FooterList
            title="Platform"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "How It Works", href: "/" },
              { label: "Pricing", href: "/" },
            ]}
          />

          {/* Col 3: Company links */}
          <FooterList
            title="Company"
            items={[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ]}
          />

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-ink-900">Newsletter</h4>
            <p className="mt-3 text-sm text-ink-500">
              Stay updated with the latest in legal-tech.
            </p>
            <div className="mt-5 flex items-center overflow-hidden rounded-lg border border-ink-200 bg-white">
              <input
                className="flex-1 px-4 py-2.5 text-sm text-ink-700 outline-none placeholder:text-ink-300"
                placeholder="Enter your email"
              />
              <button className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-600 text-white transition-colors hover:bg-brand-700">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 border-t border-ink-100 pt-8 text-center text-xs font-medium text-ink-400">
          {themeTokens.footer}
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-bold text-ink-900">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.href}
              className="text-sm text-ink-500 transition-colors hover:text-brand-600"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-5 py-14">
      <div className="w-full max-w-[920px]">
        <Surface className="p-8 md:p-12">
          <div className="mb-8 flex justify-center">
            <BrandMark />
          </div>
          <h1 className="text-center text-5xl font-extrabold tracking-[-0.04em] text-ink-900">{title}</h1>
          <p className="mt-3 text-center text-base text-ink-500">{subtitle}</p>
          <div className="mt-10">{children}</div>
        </Surface>
        <div className="mt-10 border-t border-ink-100 pt-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">
          {themeTokens.footer}
        </div>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {serviceCards.map(({ title, body, icon: Icon }) => (
        <Surface key={title} className="p-6">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-lg font-extrabold tracking-[-0.03em] text-ink-900">{title}</div>
          <div className="mt-3 text-sm leading-6 text-ink-500">{body}</div>
        </Surface>
      ))}
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="page-shell py-16">
      <div className="overflow-hidden rounded-[30px] bg-brand-600 px-8 py-10 text-white">
        <div className="text-4xl font-extrabold tracking-[-0.04em]">Ready to Simplify Your Closing Workflow?</div>
        <div className="mt-6">
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export function PrivacyArchitectureCard() {
  return (
    <Surface className="bg-brand-600 p-8 text-white">
      <div className="text-3xl font-extrabold tracking-[-0.04em]">Data Security Architecture</div>
      <p className="mt-4 max-w-xl text-sm leading-6 text-white/80">
        We employ bank-grade security protocols to ensure your data is never compromised.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        {["Cloud Storage", "SSL Encryption", "Role-based Access"].map((item) => (
          <div key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            {item}
          </div>
        ))}
      </div>
    </Surface>
  );
}

export function RoleCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      to="/signup"
      className="flex items-center justify-between rounded-[22px] bg-[linear-gradient(135deg,#2f6ad6,#4c8ef7)] px-5 py-6 text-white shadow-[0_16px_38px_rgba(20,48,112,0.08)]"
    >
      <div>
        <div className="text-2xl font-extrabold tracking-[-0.03em]">{title}</div>
        <div className="mt-2 text-sm text-white/80">{subtitle}</div>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
        <ChevronRight className="h-5 w-5" />
      </div>
    </Link>
  );
}

export function LoginForm() {
  return (
    <div className="mx-auto max-w-[680px] space-y-5">
      <Input label="Email" icon={<Mail className="h-5 w-5 text-ink-400" />} placeholder="Username" />
      <Input label="Password" icon={<ShieldCheck className="h-5 w-5 text-ink-400" />} placeholder="Enter password" />
      <div className="text-right text-sm font-semibold text-brand-600">Forgot Password?</div>
      <Button className="h-14 w-full text-2xl" onClick={placeholderAction("Login")}>
        Login
      </Button>
    </div>
  );
}
