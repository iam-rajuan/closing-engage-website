import {
  CheckCircle2,
  FileText,
  Lock,
  Shield,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const capabilityItems = [
  "Efficient Notary Assignment",
  "Real-Time Order Tracking",
  "Secure Document Handling",
  "Centralized Workflow Management",
  "Built for High-Volume Closings",
];

const featureCards = [
  {
    icon: FileText,
    title: "Secure Document\nManagement",
    body: "Securely store and manage closing documents with encrypted access and controlled permissions",
  },
  {
    icon: Users,
    title: "Efficient Notary\nAssignment",
    body: "Connect title companies with qualified notaries while helping notaries receive consistent, relevant assignments",
  },
  {
    icon: Zap,
    title: "Real-Time Order\nTracking",
    body: "Provide full visibility for all parties with live updates throughout the closing process",
  },
  {
    icon: Shield,
    title: "High-Volume Document\nHandling",
    body: "Handle large closing packages efficiently for both title teams and signing professionals",
  },
];

const workflowSteps = [
  {
    number: "1",
    title: "Notary assignment",
    body: "Enter closing details and securely upload required documents.",
  },
  {
    number: "2",
    title: "Signing Completion",
    body: "The notary completes the signing in accordance with closing requirements",
  },
  {
    number: "3",
    title: "Scanback Review",
    body: "Documents are reviewed and approved prior to shipment to reduce errors and delays.",
  },
  {
    number: "4",
    title: "Secure Upload",
    body: "Signed documents are uploaded through the portal.",
  },
];

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "SSL Encryption",
    body: "256-bit bank-level encryption",
  },
  {
    icon: Shield,
    title: "Secure Cloud Storage",
    body: "SOC 2-compliant infrastructure for secure document storage",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    body: "Granular permissions to protect sensitive information",
  },
  {
    icon: Zap,
    title: "Activity Tracking",
    body: "Full visibility into every action for compliance and accountability",
  },
];

// ─── HERO SECTION ────────────────────────────────────────────────────────────

export function HomeHeroSection() {
  return (
    <section className="w-full">
      <div
        className="relative w-full flex items-center bg-[#07162E]"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(6,18,42,0.92) 0%, rgba(9,28,62,0.85) 30%, rgba(15,38,80,0.70) 55%, rgba(20,48,100,0.35) 75%, rgba(22,52,104,0.10) 100%), url('/branding/closing-engage-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-32 pb-20 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            {/* LEFT: Text content */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
                Built for Title &amp; Escrow Teams
              </div>
              <h1 className="text-[52px] font-extrabold leading-[1.06] tracking-[-0.02em] text-white md:text-[60px] lg:text-[64px]">
                A Modern Platform
                <br />
                for managing
                <br />
                Closing Orders
              </h1>
              <p className="mt-7 max-w-[500px] text-[15px] leading-[1.75] text-white/75">
                Streamline your entire closing process with a centralized
                platform designed to manage signing orders, coordinate with
                notaries, and maintain full visibility from start to finish.
              </p>
              <div className="mt-9">
                <button className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/12 px-8 py-3.5 text-[14px] font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-black/20">
                  Get Started
                </button>
              </div>
            </div>

            {/* RIGHT: Platform Capabilities card */}
            <div className="flex justify-end">
              <div
                className="w-full max-w-[330px] rounded-2xl p-7 shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              >
                <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#185abc]">
                  Platform Capabilities
                </p>
                <ul className="space-y-3.5">
                  {capabilityItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[13px] font-medium text-[#1e293b]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#185abc]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURE SECTION (4 CARDS) ───────────────────────────────────────────────

export function HomeFeatureCards() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        {/* Centered heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-[30px] font-extrabold tracking-[-0.02em] text-[#0f172a] md:text-[34px]">
            Engineered for Reliability and Performance
          </h2>
          <p className="mt-4 text-[14px] leading-[1.75] text-[#64748b]">
            Our platform is designed to support the demands of modern closing
            workflows, delivering consistent performance, secure document
            handling, and dependable coordination.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group flex flex-col rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-[0_2px_12px_rgba(20,48,112,0.07)] transition-all hover:shadow-[0_8px_32px_rgba(20,48,112,0.12)] hover:-translate-y-0.5"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff6ff] text-[#185abc] transition-colors group-hover:bg-[#dbeafe]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="whitespace-pre-line text-[15px] font-bold leading-snug text-[#0f172a]">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-[#64748b]">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── WORKFLOW SECTION ─────────────────────────────────────────────────────────

export function HomeWorkflowSection() {
  return (
    <section className="w-full bg-[#f8fafc] py-24">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        {/* Left-aligned heading */}
        <div className="max-w-lg">
          <h2 className="text-[30px] font-extrabold tracking-[-0.02em] text-[#0f172a] md:text-[34px]">
            The closing workflow, Simplified
          </h2>
          <p className="mt-4 text-[14px] leading-[1.75] text-[#64748b]">
            A structured process designed to improve coordination, reduce
            delays, and provide full visibility from order placement to
            completion.
          </p>
        </div>

        {/* 4-step horizontal flow */}
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {workflowSteps.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {idx < workflowSteps.length - 1 && (
                <div
                  className="absolute hidden md:block"
                  style={{
                    top: "20px",
                    left: "44px",
                    right: "-16px",
                    height: "1.5px",
                    background: "linear-gradient(90deg, #bfdbfe 0%, #dbeafe 100%)",
                  }}
                />
              )}
              {/* Circle */}
              <div className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#185abc] text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(24,90,188,0.35)]">
                {step.number}
              </div>
              <h3 className="text-[14px] font-bold text-[#0f172a]">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-[#64748b]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AUDIENCE SECTION ─────────────────────────────────────────────────────────

export function HomeAudienceSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT – For Title Companies (light blue tint) */}
          <div className="flex flex-col rounded-2xl border border-[#e8edf5] bg-[#f0f5ff] p-10">
            <h3 className="text-[24px] font-bold tracking-[-0.02em] text-[#0f172a]">
              For Title Companies
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Submit orders in under 60 seconds",
                "Live tracking of signing status",
                "Instant download of scanbacks",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-[#334155]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#185abc]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <button className="inline-flex items-center justify-center rounded-xl bg-[#185abc] px-7 py-3 text-[13.5px] font-semibold text-white shadow-[0_4px_14px_rgba(24,90,188,0.30)] transition-all hover:bg-[#1d4ed8] hover:shadow-[0_6px_20px_rgba(24,90,188,0.38)]">
                Register Company
              </button>
            </div>
          </div>

          {/* RIGHT – For Notaries (dark) */}
          <div className="flex flex-col rounded-2xl bg-[#0f172a] p-10">
            <h3 className="text-[24px] font-bold tracking-[-0.02em] text-white">
              For Notaries
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Receive premium local assignments",
                "Mobile-friendly task completion",
                "Simplified scanback uploading",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-[#94a3b8]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#60a5fa]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <button className="inline-flex items-center justify-center rounded-xl bg-[#185abc] px-7 py-3 text-[13.5px] font-semibold text-white shadow-[0_4px_14px_rgba(24,90,188,0.30)] transition-all hover:bg-[#2563eb] hover:shadow-[0_6px_20px_rgba(37,99,235,0.38)]">
                Join Notary Pool
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECURITY SECTION ────────────────────────────────────────────────────────

export function HomeSecuritySection() {
  return (
    <section className="w-full bg-[#f8fafc] py-24">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-[30px] font-extrabold tracking-[-0.02em] text-[#0f172a] md:text-[34px]">
              Security is Our Foundation
            </h2>
            <p className="mt-5 text-[14px] leading-[1.75] text-[#64748b]">
              Closing Engage is built on enterprise-grade infrastructure to
              protect sensitive closing data, ensure compliance, and maintain
              secure document handling at every stage of the transaction.
            </p>

            {/* 2×2 grid of mini feature cards */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {securityFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="rounded-xl border border-[#e8edf5] bg-white p-5 shadow-[0_2px_8px_rgba(20,48,112,0.06)]"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff6ff] text-[#185abc]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h4 className="text-[13.5px] font-bold text-[#0f172a]">{feat.title}</h4>
                    <p className="mt-1.5 text-[12.5px] leading-[1.65] text-[#64748b]">{feat.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT – Enterprise Grade card */}
          <div className="flex items-start justify-end pt-2">
            <div
              className="flex w-full items-center justify-center rounded-2xl border border-[#e2e8f0]"
              style={{
                background: "linear-gradient(145deg, #f0f4ff 0%, #f8fafc 60%, #eef2f8 100%)",
                minHeight: "340px",
              }}
            >
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(20,48,112,0.12)]">
                  <Lock className="h-9 w-9 text-[#94a3b8]" />
                </div>
                <span className="mt-6 block text-[11px] font-bold uppercase tracking-[0.3em] text-[#94a3b8]">
                  Enterprise Grade
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIAL SECTION ──────────────────────────────────────────────────────

export function HomeTestimonialSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-[#e8edf5] bg-[#f4f7fc] px-10 py-12 shadow-[0_2px_16px_rgba(20,48,112,0.07)] md:px-16 md:py-16">
          {/* Stars */}
          <div className="flex gap-1 text-[18px] text-[#185abc]">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s}>★</span>
            ))}
          </div>

          {/* Large quote glyph */}
          <div
            className="absolute right-12 top-8 select-none text-[120px] leading-none font-serif text-[#185abc]/10"
            aria-hidden="true"
          >
            "
          </div>

          {/* Quote body */}
          <blockquote className="mt-7 max-w-3xl text-[20px] font-semibold leading-[1.65] tracking-[-0.01em] text-[#1e293b] md:text-[22px]">
            "Closing Engage has completely redefined how we manage our settlement
            workflows. The transparency and efficiency provided by the platform
            are unmatched in the industry."
          </blockquote>

          {/* Author */}
          <footer className="mt-9 flex items-center gap-4">
            <div className="h-11 w-11 rounded-full bg-[#dbeafe]" />
            <div>
              <div className="text-[14px] font-bold text-[#0f172a]">Sarah J. Miller</div>
              <div className="text-[12.5px] text-[#64748b]">COO, Elite Title &amp; Escrow</div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────

export function HomeCTASection() {
  return (
    <section
      className="w-full py-24"
      style={{
        background: "linear-gradient(135deg, #1345a0 0%, #185abc 45%, #1d6fca 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 text-center lg:px-12">
        <h2 className="mx-auto max-w-lg text-[36px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white md:text-[44px]">
          Ready to streamline your closing workflow?
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center justify-center rounded-xl bg-white px-9 py-3.5 text-[14px] font-bold text-[#185abc] shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all hover:bg-[#f0f5ff] hover:shadow-[0_8px_30px_rgba(0,0,0,0.24)]">
            Get Started
          </button>
          <button className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-9 py-3.5 text-[14px] font-bold text-white backdrop-blur-sm transition-all hover:bg-white/18 hover:border-white/50">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}
