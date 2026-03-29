import { CheckCircle2, Lock, Quote, Shield } from "lucide-react";
import { Button, Surface } from "@/components/common";

const capabilityItems = [
  "Efficient Notary Assignment",
  "Real-Time Order Tracking",
  "Secure Document Handling",
  "Centralized Workflow Management",
  "Built for High-Volume Closings",
];

const featureCards = [
  {
    title: "Secure Document\nManagement",
    body: "Securely store and manage closing documents with encrypted access and controlled permissions",
  },
  {
    title: "Efficient Notary\nAssignment",
    body: "Connect title companies with qualified notaries while helping notaries receive consistent, relevant assignments",
  },
  {
    title: "Real-Time Order\nTracking",
    body: "Provide full visibility for all parties with live updates throughout the closing process",
  },
  {
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

const securityCards = [
  {
    title: "SSL Encryption",
    body: "256-bit bank-level encryption",
  },
  {
    title: "Secure Cloud Storage",
    body: "SOC 2-compliant infrastructure for secure document storage",
  },
  {
    title: "Role-Based Access Control",
    body: "Granular permissions to protect sensitive information",
  },
  {
    title: "Activity Tracking",
    body: "Full visibility into every action for compliance and accountability",
  },
];

export function HomeHeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-ink-900 py-24 text-white">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/branding/closing-engage-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container-custom relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block rounded-full bg-brand-600/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-400">
            Built for Title & Escrow Teams
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl xl:text-7xl">
            A Modern Platform for managing Closing Orders
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-300 md:text-xl">
            Streamline your entire closing process with a centralized platform designed to manage signing orders, coordinate with notaries, and maintain full visibility from start to finish.
          </p>
          <div className="mt-10">
            <Button className="h-14 rounded-xl bg-white px-10 text-lg font-bold text-brand-600 shadow-xl transition-all hover:bg-ink-50 hover:shadow-2xl">
              Get Started
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl md:p-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-400">
              Platform Capabilities
            </h3>
            <ul className="mt-8 space-y-5">
              {capabilityItems.map((item) => (
                <li key={item} className="flex items-center gap-4 text-lg font-medium text-white/90">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFeatureCards() {
  return (
    <section className="bg-ink-50 py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
            Engineered for Reliability and Performance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Our platform is designed to support the demands of modern closing workflows, delivering consistent performance, secure document handling, and dependable coordination.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((card) => (
            <Surface key={card.title} className="flex flex-col p-8 transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-ink-900">
                {card.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
                {card.body}
              </p>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeWorkflowSection() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
            The closing workflow, Simplified
          </h2>
          <p className="mt-4 text-base text-ink-500">
            A structured process designed to improve coordination, reduce delays, and provide full visibility from order placement to completion.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-4">
          {workflowSteps.map((step, idx) => (
            <div key={step.number} className="relative">
              {idx < workflowSteps.length - 1 && (
                <div className="absolute left-[40px] top-[20px] hidden h-[2px] w-[calc(100%-40px)] bg-ink-100 md:block" />
              )}
              <div className="relative mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-lg">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeAudienceSection() {
  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* For Title Companies */}
          <div className="group relative overflow-hidden rounded-3xl bg-brand-50 p-10 transition-all hover:-translate-y-1">
            <h3 className="text-3xl font-bold tracking-tight text-ink-900">For Title Companies</h3>
            <ul className="mt-8 space-y-4">
              {[
                "Submit orders in under 60 seconds",
                "Live tracking of signing status",
                "Instant download of scanbacks",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-ink-700">
                  <CheckCircle2 className="h-5 w-5 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button className="h-12 rounded-xl bg-brand-600 px-8 text-base font-bold text-white transition-all hover:bg-brand-700">
                Register Company
              </Button>
            </div>
          </div>

          {/* For Notaries */}
          <div className="group relative overflow-hidden rounded-3xl bg-ink-900 p-10 text-white transition-all hover:-translate-y-1">
            <h3 className="text-3xl font-bold tracking-tight">For Notaries</h3>
            <ul className="mt-8 space-y-4">
              {[
                "Receive premium local assignments",
                "Mobile-friendly task completion",
                "Simplified scanback uploading",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-ink-300">
                  <CheckCircle2 className="h-5 w-5 text-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button className="h-12 rounded-xl bg-brand-500 px-8 text-base font-bold text-white transition-all hover:bg-brand-400">
                Join Notary Pool
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeSecuritySection() {
  return (
    <section className="bg-ink-50 py-24">
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
              Security is Our Foundation
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              Closing Engage is built on enterprise-grade infrastructure to protect sensitive data and ensure compliance at every stage.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {securityCards.map((card) => (
                <div key={card.title}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-600 shadow-sm">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-ink-900">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex h-64 w-full max-w-sm flex-col items-center justify-center rounded-3xl bg-white shadow-xl">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Lock className="h-10 w-10" />
              </div>
              <span className="mt-6 text-sm font-bold uppercase tracking-widest text-ink-300">
                Enterprise Grade
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonialSection() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <Surface className="overflow-hidden rounded-3xl bg-ink-50 px-8 py-12 md:px-20 md:py-20 lg:px-32">
          <div className="relative">
            <Quote className="absolute -left-8 -top-8 h-12 w-12 text-ink-200" />
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="text-brand-500">★</div>
              ))}
            </div>
            <blockquote className="mt-8 text-2xl font-semibold leading-relaxed text-ink-800 md:text-3xl">
              "Closing Engage has completely redefined how we manage our settlement workflows. The transparency and efficiency provided by the platform are unmatched in the industry."
            </blockquote>
            <footer className="mt-12 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-brand-100" />
              <div>
                <div className="text-lg font-bold text-ink-900">Sarah J. Miller</div>
                <div className="text-base text-ink-500">COO, Elite Title & Escrow</div>
              </div>
            </footer>
          </div>
        </Surface>
      </div>
    </section>
  );
}
