import { BarChart3, FileText, Lock, Mail, MapPin, Phone, Shield, UserRound } from "lucide-react";
import { Navigate, useSearchParams } from "react-router-dom";
import {
  HomeAudienceSection,
  HomeCTASection,
  HomeFeatureCards,
  HomeHeroSection,
  HomeSecuritySection,
  HomeTestimonialSection,
  HomeWorkflowSection,
} from "@/components/homepage";
import {
  AuthShell,
  ForgotPasswordForm,
  LoginForm,
  OtpVerificationForm,
  RoleCard,
  SignupFlowForm,
  ServicesGrid,
} from "@/components/marketing";
import { Button, Input, Surface, Textarea } from "@/components/common";

export function HomePage() {
  return (
    <div>
      <HomeHeroSection />
      <HomeFeatureCards />
      <HomeWorkflowSection />
      <HomeAudienceSection />
      <HomeSecuritySection />
      <HomeTestimonialSection />
      <HomeCTASection />
    </div>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="overflow-hidden bg-white pt-0">
        <div
          className="relative w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 100% 36%, rgba(220,232,249,0.95) 0%, rgba(236,243,252,0.86) 20%, rgba(247,250,255,0.46) 38%, rgba(255,255,255,0) 58%)",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
            <div className="mx-auto max-w-[1440px] py-18 md:py-22">
              <div className="max-w-[680px]">
              <h1 className="text-[52px] font-extrabold leading-[1.04] tracking-[-0.045em] text-ink-900 md:text-[68px]">
                Our Services
              </h1>
              <p className="mt-6 text-[18px] leading-[1.8] text-ink-600">
                Closing Engage provides professional-grade tools to manage closing orders
                and document workflows securely, connecting title companies and notaries in
                one unified environment.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7fd] py-16 md:py-18">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <ServicesGrid />
        </div>
      </section>
      <section className="py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-[620px]">
              <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink-900 md:text-[42px]">
                Built for Performance
              </h2>
              <div className="mt-9 space-y-6">
                {[
                  ["Large File Upload Support", "Handle 150+ page PDFs with ease, optimized for high-volume document environments."],
                  ["Secure Cloud Document Storage", "Redundant, encrypted storage that meets rigorous legal and financial security standards."],
                  ["Role-Based Access Control", "Granular permissions for teams, ensuring individuals only see the data they need."],
                  ["Audit Logs for Transparency", "Complete history of every action taken on an order, providing a bulletproof audit trail."],
                ].map(([title, body]) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-brand-600">
                      <div className="h-3 w-3 rounded-full bg-brand-600" />
                    </div>
                    <div>
                      <div className="text-[18px] font-bold text-ink-900">{title}</div>
                      <p className="mt-1.5 text-[14px] leading-[1.8] text-ink-500">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative max-w-[620px] pb-14 pl-10">
              <div className="rounded-[34px] bg-white p-4 shadow-[0_12px_30px_rgba(20,48,112,0.05)] md:p-5">
                <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#e7f3ee,#ccdfd7)]">
                  <img
                    src="/branding/services-performance-dashboard.png"
                    alt="Secure financial dashboard interface"
                    className="block h-auto w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 rounded-[22px] bg-brand-600 px-8 py-6 text-white shadow-[0_22px_40px_rgba(24,90,188,0.26)]">
                <div className="text-[26px] font-extrabold leading-none">99.9%</div>
                <div className="mt-2 max-w-[210px] text-[12px] leading-[1.55] text-white/82">
                  Uptime reliability for critical closing operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 md:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
            <div className="max-w-[500px] rounded-[24px] bg-[#eef0fb] p-5 shadow-[0_12px_30px_rgba(20,48,112,0.05)] md:p-6">
              <div className="flex items-center justify-center overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#0f5053,#83c3cb)] p-0">
                <img
                  src="/branding/services-efficiency-workflow.png"
                  alt="Workflow efficiency diagram"
                  className="block h-auto w-full rounded-[18px] object-cover"
                />
              </div>
            </div>
            <div className="max-w-[680px]">
              <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink-900 md:text-[42px]">
                Engineered for Efficiency
              </h2>
              <p className="mt-6 text-[16px] leading-[1.9] text-ink-500">
                Closing Engage eliminates the friction inherent in traditional real estate transactions. By centralizing communication, we remove the need for manual emails and constant phone tag.
              </p>
              <p className="mt-6 text-[16px] leading-[1.9] text-ink-500">
                Our platform replaces disparate spreadsheets with a single source of truth, creating a direct and secure line between title agents and notaries. This architectural approach ensures data integrity while accelerating closing times by up to 40%.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div
            className="relative overflow-hidden rounded-[34px] px-8 py-12 text-center text-white shadow-[0_20px_50px_rgba(24,90,188,0.18)] md:px-12 md:py-14"
            style={{
              backgroundImage: "url('/branding/services-cta-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="mx-auto max-w-[980px] text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white md:text-[40px]">
              Start Managing Closing Orders with Confidence
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                className="min-w-[140px] rounded-xl bg-white px-8 py-3.5 text-[15px] font-bold text-brand-600 hover:bg-[#f4f7ff]"
                onClick={() => window.location.assign("/signup/role-selection")}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="min-w-[140px] rounded-xl border-white/30 bg-white/8 px-8 py-3.5 text-[15px] font-bold text-white hover:bg-white/14"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[340px] bg-cover bg-center bg-no-repeat md:min-h-[420px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(13,20,36,0.62) 0%, rgba(13,20,36,0.48) 28%, rgba(13,20,36,0.18) 100%), url('/branding/about-hero.png')",
          }}
        >
          <div className="mx-auto flex min-h-[340px] w-full max-w-[1440px] items-center px-6 lg:px-10 md:min-h-[420px]">
            <div className="max-w-[700px] text-white">
              <h1 className="text-[44px] font-extrabold leading-[1.05] tracking-[-0.045em] md:text-[64px]">
                About Closing Engage
              </h1>
              <p className="mt-5 max-w-[560px] text-[18px] leading-[1.8] text-white/82">
                Learn more about our mission to simplify closing order workflows
                between title companies and notaries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7fd] py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-[620px]">
              <div className="inline-flex rounded-full bg-[#edf4ff] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-600">
                Our Journey
              </div>
              <h2 className="mt-5 text-[38px] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink-900">
                Our Story
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-[1.85] text-ink-500">
                <p>Closing Engage was created to address the inefficiencies in managing closing orders between title companies and notaries.</p>
                <p>Many closing workflows still rely on fragmented communication, manual coordination, and limited visibility into order status. These gaps often lead to delays, errors, and unnecessary back-and-forth.</p>
                <p>Closing Engage was built to bring structure to this process, providing a centralized system to manage assignments, track progress, and handle documents with consistency and control.</p>
                <p>Today, the platform supports a more organized and reliable closing experience by reducing friction and improving coordination across every transaction.</p>
              </div>
            </div>
            <div className="max-w-[560px] justify-self-end rounded-[24px] bg-white p-4 shadow-[0_16px_38px_rgba(20,48,112,0.08)]">
              <img
                src="/branding/about-story-meeting.png"
                alt="Closing Engage team meeting"
                className="block w-full rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink-900">
              Our Team
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-brand-600" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Dyarramo", "Founder & CEO", "Former real estate attorney passionate about digital transformation in the legal industry.", "/branding/team-dyarramo.png"],
              ["Sarah Miller", "COO", "Operations expert with 15 years experience scaling fintech platforms across North America.", "/branding/team-sarah-miller.png"],
              ["Marcus Thorne", "CTO", "Cybersecurity specialist focused on building unbreakable document workflow environments.", "/branding/team-marcus-thorne.png"],
              ["Elena Rodriguez", "Head of Product", "Driving user-centric design that simplifies complex legal compliance tasks.", "/branding/team-elena-rodriguez.png"],
            ].map(([name, role, body, imageSrc]) => (
              <Surface
                key={name}
                className="rounded-[22px] border border-[#dbe3f0] bg-white p-5 shadow-[0_10px_28px_rgba(20,48,112,0.05)]"
              >
                <div className="mb-5 overflow-hidden rounded-[14px] bg-[linear-gradient(180deg,#d9dde7,#f3f5fa)]">
                  <img
                    src={imageSrc}
                    alt={name}
                    className="block h-[270px] w-full object-cover"
                  />
                </div>
                <div className="text-[20px] font-extrabold tracking-[-0.025em] text-ink-900">{name}</div>
                <div className="mt-1 text-[14px] font-semibold text-brand-600">{role}</div>
                <p className="mt-5 text-[14px] leading-[1.75] text-ink-500">{body}</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full overflow-hidden pb-24">
        <div className="relative">
          <img
            src="/branding/about-cta-fullwidth.png"
            alt="About page call to action background"
            className="block h-auto w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center text-white">
              <h2 className="text-[34px] font-extrabold leading-[1.12] tracking-[-0.04em] md:text-[56px]">
                Join Closing Engage Today
              </h2>
              <p className="mx-auto mt-5 max-w-[680px] text-[16px] leading-[1.8] text-white/80">
                Experience the future of closing order management. Secure, professional,
                and built for modern teams.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  className="min-w-[150px] rounded-xl bg-white px-8 py-3.5 text-[15px] font-bold text-brand-600 hover:bg-[#f4f7ff]"
                  onClick={() => window.location.assign("/signup/role-selection")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <section className="overflow-hidden bg-white pt-0">
        <div
          className="relative w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 100% 36%, rgba(220,232,249,0.95) 0%, rgba(236,243,252,0.86) 20%, rgba(247,250,255,0.46) 38%, rgba(255,255,255,0) 58%)",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
            <div className="mx-auto max-w-[1440px] py-18 md:py-22">
              <div className="max-w-[680px]">
                <h1 className="text-[52px] font-extrabold leading-[1.04] tracking-[-0.045em] text-ink-900 md:text-[68px]">
                  Contact Us
                </h1>
                <p className="mt-6 text-[18px] leading-[1.8] text-ink-600">
                  Have questions about Closing Engage or need help getting started?
                  Reach out and our team will assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7fd] py-16 md:py-18">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <Surface className="rounded-[20px] border border-[#dbe3f0] bg-white p-8 shadow-[0_8px_24px_rgba(20,48,112,0.05)]">
              <div className="grid gap-5 md:grid-cols-2">
                <Input label="Full Name" placeholder="John Doe" />
                <Input label="Email" placeholder="john@company.com" />
                <Input label="Company" placeholder="Acme Corp" />
                <Input label="Subject" placeholder="General Inquiry" />
              </div>
              <div className="mt-5">
                <Textarea label="Message" placeholder="How can we help you?" />
              </div>
              <Button className="mt-6 rounded-lg px-7">Send Message</Button>
            </Surface>
            <div className="px-2 pt-1 lg:px-6">
              <h2 className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em] text-ink-900">
                Contact Information
              </h2>
              <div className="mt-8 space-y-7">
                {[
                  { icon: Mail, title: "Email", body: "hello@closingengage.com" },
                  { icon: Phone, title: "Phone", body: "+1 (555) 123-4567" },
                  { icon: MapPin, title: "Address", body: "101 Financial District, Suite 500\nNew York, NY 10005" },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-brand-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[16px] font-bold text-ink-900">{title}</div>
                      <div className="mt-1 whitespace-pre-line text-[14px] leading-[1.7] text-ink-500">{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full overflow-hidden pb-24">
        <div className="relative">
          <img
            src="/branding/about-cta-fullwidth.png"
            alt="Contact page call to action background"
            className="block h-auto w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center text-white">
              <h2 className="text-[34px] font-extrabold leading-[1.12] tracking-[-0.04em] md:text-[56px]">
                Ready to Simplify Your Closing Workflow?
              </h2>
              <div className="mt-8 flex justify-center">
                <Button
                  className="min-w-[150px] rounded-xl bg-white px-8 py-3.5 text-[15px] font-bold text-brand-600 hover:bg-[#f4f7ff]"
                  onClick={() => window.location.assign("/signup/role-selection")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicyPage() {
  return (
    <>
      <section className="overflow-hidden bg-white pt-0">
        <div
          className="relative w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 100% 36%, rgba(220,232,249,0.95) 0%, rgba(236,243,252,0.86) 20%, rgba(247,250,255,0.46) 38%, rgba(255,255,255,0) 58%)",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
            <div className="mx-auto max-w-[1440px] py-16 md:py-20">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="max-w-[620px]">
                  <h1 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.045em] text-ink-900 md:text-[62px]">
                    Privacy Policy
                  </h1>
                  <p className="mt-5 text-[17px] leading-[1.8] text-ink-600">
                    Learn how Closing Engage collects, uses, and protects your
                    information. Our architecture is built on the foundation of
                    trust and technical transparency.
                  </p>
                </div>
                <div className="justify-self-end rounded-[30px] border border-[#d8e1f0] bg-[linear-gradient(135deg,#dfe8ff,#edf3ff)] px-10 py-9 shadow-[0_12px_32px_rgba(20,48,112,0.06)]">
                  <div className="flex min-w-[260px] flex-col items-center justify-center text-center">
                    <div className="flex h-22 w-22 items-center justify-center rounded-[24px] bg-white text-brand-600 shadow-[0_16px_38px_rgba(20,48,112,0.08)]">
                      <Shield className="h-10 w-10" />
                    </div>
                    <div className="mt-7 w-full rounded-[18px] bg-white/92 px-6 py-5">
                      <div className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-600">
                        Security Protocol 402.b
                      </div>
                      <div className="mt-2 text-[13px] leading-[1.6] text-ink-500">
                        Active Encryption Layers: AES-256
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7fd] py-16 md:py-18">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="mb-10 border-t border-[#dbe3f0] pt-8">
            <div className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-600">
              Introduction
            </div>
            <p className="max-w-[980px] text-[14px] leading-[1.9] text-ink-500">
              At Closing Engage, your privacy is not an afterthought; it is our
              primary engineering requirement. We are committed to maintaining the
              highest standards of data integrity and protection, ensuring that your
              sensitive legal and financial information remains confidential and
              secure throughout the closing process.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: UserRound,
                title: "Personal Information",
                body: "Name, contact details, and identifiers required for legal verification.",
              },
              {
                icon: Lock,
                title: "Account Info",
                body: "Login credentials and profile settings necessary for your secure workspace.",
              },
              {
                icon: FileText,
                title: "Documents",
                body: "Financial records and legal contracts processed through our secure vault.",
              },
              {
                icon: BarChart3,
                title: "Usage Data",
                body: "Technical metadata to improve performance and ensure platform security.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <Surface
                key={title}
                className="rounded-[18px] border border-[#dbe3f0] bg-white p-6 shadow-[0_8px_24px_rgba(20,48,112,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-[18px] font-extrabold tracking-[-0.02em] text-ink-900">
                  {title}
                </div>
                <div className="mt-2 text-[14px] leading-[1.75] text-ink-500">
                  {body}
                </div>
              </Surface>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-18 md:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink-900">
                How We Use Information
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  ["01", "Account Management", "Facilitating access to your closing dashboard and secure files."],
                  ["02", "Processing Orders", "Executing transactions and legal filings on your behalf."],
                  ["03", "Communication", "Sending critical updates, security alerts, and support responses."],
                ].map(([number, title, body]) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[12px] font-extrabold text-brand-600">
                      {number}
                    </div>
                    <div>
                      <div className="text-[16px] font-bold text-ink-900">{title}</div>
                      <div className="mt-1 text-[14px] leading-[1.75] text-ink-500">{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[22px] bg-brand-600 p-8 text-white shadow-[0_18px_38px_rgba(24,90,188,0.18)]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-[28px] font-extrabold tracking-[-0.03em]">
                    Data Security Architecture
                  </div>
                  <p className="mt-4 max-w-[460px] text-[14px] leading-[1.8] text-white/82">
                    We employ bank-grade security protocols to ensure your data is
                    never compromised.
                  </p>
                </div>
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <Lock className="h-9 w-9" />
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Cloud Storage", "SSL Encryption", "Role-based Access"].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Data Sharing", "We share information only with trusted third-party partners necessary for operations (e.g., payment processors, legal filing systems) or when legally mandated by government authorities."],
              ["User Rights", "Access your personal data records\nRequest correction of inaccuracies\nRequest deletion of non-legal records"],
              ["Periodic Updates", "Our privacy policy is reviewed quarterly. Users will be notified via email regarding any significant material changes."],
              ["Contact Privacy Team", "privacy@closingengage.com\nResponse time: within 24 business hours."],
            ].map(([title, body]) => (
              <Surface
                key={title}
                className="rounded-[18px] border border-[#dbe3f0] bg-white p-6 shadow-[0_8px_24px_rgba(20,48,112,0.05)]"
              >
                <div className="text-[18px] font-extrabold tracking-[-0.02em] text-ink-900">{title}</div>
                <div className="mt-3 whitespace-pre-line text-[14px] leading-[1.8] text-ink-500">{body}</div>
              </Surface>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function LoginPage() {
  return (
    <AuthShell title="Welcome Back!" subtitle="To login, enter your Username">
      <LoginForm />
    </AuthShell>
  );
}

export function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Forgot Password?"
      subtitle="Enter your email and we will send you a verification code."
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}

export function OtpVerificationPage() {
  return (
    <AuthShell
      title="Verify Your Email"
      subtitle="Use the one-time verification code sent to your email address."
    >
      <OtpVerificationForm />
    </AuthShell>
  );
}

export function RoleSelectionPage() {
  return (
    <AuthShell title="Choose Your Role" subtitle="Start by selecting the workspace that best matches how you use Closing Engage.">
      <div className="mx-auto max-w-[720px] space-y-5">
        <RoleCard
          to="/signup?role=company"
          title="I Require Signing Services"
          subtitle="Title Companies & Businesses"
          description="Create a company workspace to place orders, manage teams, coordinate closings, and track document workflows end to end."
        />
        <RoleCard
          to="/signup?role=notary"
          title="I Am A Notary Signing Agent"
          subtitle="Notaries & Independent Signing Agents"
          description="Create a notary workspace to receive assignments, manage credentials, upload documents, and stay current on every order."
        />
      </div>
    </AuthShell>
  );
}

export function SignupPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  if (role !== "company" && role !== "notary") {
    return <Navigate to="/signup/role-selection" replace />;
  }

  return (
    <AuthShell
      title={role === "company" ? "Create Your Company Account" : "Create Your Notary Account"}
      subtitle={role === "company"
        ? "Complete your signing-service registration and continue into the company dashboard."
        : "Complete your notary registration and continue into the notary dashboard."}
    >
      <SignupFlowForm role={role} />
    </AuthShell>
  );
}
