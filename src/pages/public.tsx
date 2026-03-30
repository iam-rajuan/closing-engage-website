import { ArrowRight, CheckCircle2, Lock, Shield } from "lucide-react";
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
  ContactBand,
  LoginForm,
  PrivacyArchitectureCard,
  RoleCard,
  ServicesGrid,
} from "@/components/marketing";
import { Button, Input, SectionTitle, Surface, Textarea } from "@/components/common";

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
          <div className="mx-auto w-full max-w-[1600px] px-8 lg:px-12">
            <div className="max-w-[540px] py-14 md:py-16">
              <h1 className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink-900 md:text-[54px]">
                Our Services
              </h1>
              <p className="mt-5 text-[15px] leading-[1.8] text-ink-600">
                Closing Engage provides professional-grade tools to manage closing orders
                and document workflows securely, connecting title companies and notaries in
                one unified environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7fd] py-12 md:py-14">
        <div className="mx-auto w-full max-w-[1600px] px-8 lg:px-12">
          <ServicesGrid />
        </div>
      </section>
      <section className="pb-18">
        <div className="mx-auto w-full max-w-[1600px] px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-[540px]">
              <h2 className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] text-ink-900 md:text-[28px]">
                Built for Performance
              </h2>
              <div className="mt-7 space-y-5">
                {[
                  ["Large File Upload Support", "Handle 150+ page PDFs with ease, optimized for high-volume document environments."],
                  ["Secure Cloud Document Storage", "Redundant, encrypted storage that meets rigorous legal and financial security standards."],
                  ["Role-Based Access Control", "Granular permissions for teams, ensuring individuals only see the data they need."],
                  ["Audit Logs for Transparency", "Complete history of every action taken on an order, providing a bulletproof audit trail."],
                ].map(([title, body]) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-brand-600">
                      <div className="h-2.5 w-2.5 rounded-full bg-brand-600" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-ink-900">{title}</div>
                      <p className="mt-1 text-[12.5px] leading-[1.7] text-ink-500">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative max-w-[540px] pb-10 pl-8">
              <div className="rounded-[34px] bg-white p-4 shadow-[0_12px_30px_rgba(20,48,112,0.05)] md:p-5">
                <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#e7f3ee,#ccdfd7)]">
                  <img
                    src="/branding/services-performance-dashboard.png"
                    alt="Secure financial dashboard interface"
                    className="block h-auto w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 rounded-[22px] bg-brand-600 px-7 py-5 text-white shadow-[0_22px_40px_rgba(24,90,188,0.26)]">
                <div className="text-[18px] font-extrabold leading-none md:text-[22px]">99.9%</div>
                <div className="mt-2 max-w-[190px] text-[11px] leading-[1.5] text-white/82 md:text-[12px]">
                  Uptime reliability for critical closing operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto w-full max-w-[1600px] px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="max-w-[430px] rounded-[24px] bg-[#eef0fb] p-5 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
              <div className="flex items-center justify-center overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#0f5053,#83c3cb)] p-0">
                <img
                  src="/branding/services-efficiency-workflow.png"
                  alt="Workflow efficiency diagram"
                  className="block h-auto w-full rounded-[18px] object-cover"
                />
              </div>
            </div>
            <div className="max-w-[560px]">
              <h2 className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] text-ink-900 md:text-[28px]">
                Engineered for Efficiency
              </h2>
              <p className="mt-5 text-[14px] leading-[1.85] text-ink-500">
                Closing Engage eliminates the friction inherent in traditional real estate transactions. By centralizing communication, we remove the need for manual emails and constant phone tag.
              </p>
              <p className="mt-5 text-[14px] leading-[1.85] text-ink-500">
                Our platform replaces disparate spreadsheets with a single source of truth, creating a direct and secure line between title agents and notaries. This architectural approach ensures data integrity while accelerating closing times by up to 40%.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutPage() {
  const team = [
    ["Dyarramo", "Founder & CEO", "Former real estate attorney passionate about digital transformation in the legal industry."],
    ["Sarah Miller", "COO", "Operations expert with 15 years experience scaling fintech platforms across North America."],
    ["Marcus Thorne", "CTO", "Cybersecurity specialist focused on building unbreakable document workflow environments."],
    ["Elena Rodriguez", "Head of Product", "Driving user-centric design that simplifies complex legal compliance tasks."],
  ];

  return (
    <>
      <section className="py-18">
        <div className="container-custom">
          <SectionTitle
            title="About Closing Engage"
            subtitle="Learn more about our mission to simplify closing order workflows between title companies and notaries."
          />
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#dfe9ff,#eef4ff)] p-8">
              <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-600">OUR JOURNEY</div>
              <div className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink-900">Our Story</div>
            </div>
            <div className="space-y-5 text-sm leading-7 text-ink-500">
              <p>Closing Engage was created to address the inefficiencies in managing closing orders between title companies and notaries.</p>
              <p>Many closing workflows still rely on fragmented communication, manual coordination, and limited visibility into order status. These gaps often lead to delays, errors, and unnecessary back-and-forth.</p>
              <p>Closing Engage was built to bring structure to this process, providing a centralized system to manage assignments, track progress, and handle documents with consistency and control.</p>
              <p>Today, the platform supports a more organized and reliable closing experience by reducing friction and improving coordination across every transaction</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-custom">
          <SectionTitle title="Our Team" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {team.map(([name, role, body]) => (
              <Surface key={name} className="p-6">
                <div className="mb-5 h-56 rounded-[24px] bg-[linear-gradient(135deg,#dce6fb,#f3f5fb)]" />
                <div className="text-2xl font-extrabold tracking-[-0.03em] text-ink-900">{name}</div>
                <div className="mt-1 text-sm font-semibold text-brand-600">{role}</div>
                <p className="mt-4 text-sm leading-6 text-ink-500">{body}</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>
      <section className="py-18">
        <div className="container-custom">
          <SectionTitle
            title="Contact Us"
            subtitle="Have questions about Closing Engage or need help getting started? Reach out and our team will assist you."
          />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Surface className="p-8">
              <div className="mb-6 text-sm font-extrabold uppercase tracking-[0.18em] text-ink-500">Contact Information</div>
              <div className="grid gap-5 md:grid-cols-2">
                <Input label="Full Name" placeholder="John Doe" />
                <Input label="Email" placeholder="john@company.com" />
                <Input label="Company" placeholder="Acme Corp" />
                <Input label="Subject" placeholder="General Inquiry" />
              </div>
              <div className="mt-5">
                <Textarea label="Message" placeholder="How can we help you?" />
              </div>
              <Button className="mt-6">Send Message</Button>
            </Surface>
            <Surface className="flex flex-col justify-between p-8">
              <div className="space-y-6 text-sm leading-6 text-ink-500">
                <div><strong className="block text-ink-900">Email</strong>hello@closingengage.com</div>
                <div><strong className="block text-ink-900">Phone</strong>+1 (555) 123-4567</div>
                <div><strong className="block text-ink-900">Address</strong>101 Financial District, Suite 500<br />New York, NY 10005</div>
              </div>
              <div className="rounded-[24px] bg-[linear-gradient(135deg,#eff3ff,#f6f8fc)] p-8">
                <div className="text-3xl font-extrabold tracking-[-0.04em] text-ink-900">Ready to Simplify Your Closing Workflow?</div>
                <Button className="mt-6">Get Started</Button>
              </div>
            </Surface>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <section className="page-shell py-18">
        <SectionTitle
          title="Contact Us"
          subtitle="Have questions about Closing Engage or need help getting started? Reach out and our team will assist you."
        />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Surface className="p-8">
            <div className="mb-6 text-sm font-extrabold uppercase tracking-[0.18em] text-ink-500">Contact Information</div>
            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Full Name" placeholder="John Doe" />
              <Input label="Email" placeholder="john@company.com" />
              <Input label="Company" placeholder="Acme Corp" />
              <Input label="Subject" placeholder="General Inquiry" />
            </div>
            <div className="mt-5">
              <Textarea label="Message" placeholder="How can we help you?" />
            </div>
            <Button className="mt-6">Send Message</Button>
          </Surface>
          <Surface className="flex flex-col justify-between p-8">
            <div className="space-y-6 text-sm leading-6 text-ink-500">
              <div><strong className="block text-ink-900">Email</strong>hello@closingengage.com</div>
              <div><strong className="block text-ink-900">Phone</strong>+1 (555) 123-4567</div>
              <div><strong className="block text-ink-900">Address</strong>101 Financial District, Suite 500<br />New York, NY 10005</div>
            </div>
            <div className="rounded-[24px] bg-[linear-gradient(135deg,#eff3ff,#f6f8fc)] p-8">
              <div className="text-3xl font-extrabold tracking-[-0.04em] text-ink-900">Ready to Simplify Your Closing Workflow?</div>
              <Button className="mt-6">Get Started</Button>
            </div>
          </Surface>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function PrivacyPolicyPage() {
  return (
    <>
      <section className="py-18">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <SectionTitle
              title="Privacy Policy"
              subtitle="Learn how Closing Engage collects, uses, and protects your information. Our architecture is built on the foundation of trust and technical transparency."
            />
            <Surface className="bg-[linear-gradient(135deg,#dfe9ff,#eef4ff)] p-8">
              <div className="flex h-18 w-18 items-center justify-center rounded-[22px] bg-white text-brand-600 shadow-[0_16px_38px_rgba(20,48,112,0.08)]">
                <Shield className="h-9 w-9" />
              </div>
              <div className="mt-5 rounded-2xl bg-white/80 px-5 py-4">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">Security Protocol 402.b</div>
                <div className="mt-2 text-sm text-ink-500">Active Encryption Layers: AES-256</div>
              </div>
            </Surface>
          </div>
        </div>
      </section>
      <section className="pb-8">
        <div className="container-custom">
          <div className="mb-8 border-t border-ink-100 pt-8">
            <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">Introduction</div>
            <p className="max-w-5xl text-sm leading-7 text-ink-500">
              At Closing Engage, your privacy is not an afterthought; it is our primary engineering requirement. We are committed to maintaining the highest standards of data integrity and protection, ensuring that your sensitive legal and financial information remains confidential and secure throughout the closing process.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Personal Information", "Name, contact details, and identifiers required for legal verification."],
              ["Account Info", "Login credentials and profile settings necessary for your secure workspace."],
              ["Documents", "Financial records and legal contracts processed through our secure vault."],
              ["Usage Data", "Technical metadata to improve performance and ensure platform security."],
            ].map(([title, body]) => (
              <Surface key={title} className="p-6">
                <Lock className="h-5 w-5 text-brand-600" />
                <div className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-ink-900">{title}</div>
                <div className="mt-3 text-sm leading-6 text-ink-500">{body}</div>
              </Surface>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle title="How We Use Information" />
              <div className="space-y-5 text-sm leading-6 text-ink-500">
                <div><strong className="mr-3 text-brand-600">01</strong><span className="font-bold text-ink-900">Account Management</span><br />Facilitating access to your closing dashboard and secure files.</div>
                <div><strong className="mr-3 text-brand-600">02</strong><span className="font-bold text-ink-900">Processing Orders</span><br />Executing transactions and legal filings on your behalf.</div>
                <div><strong className="mr-3 text-brand-600">03</strong><span className="font-bold text-ink-900">Communication</span><br />Sending critical updates, security alerts, and support responses.</div>
              </div>
            </div>
            <PrivacyArchitectureCard />
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Data Sharing", "We share information only with trusted third-party partners necessary for operations (e.g., payment processors, legal filing systems) or when legally mandated by government authorities."],
              ["User Rights", "Access your personal data records\nRequest correction of inaccuracies\nRequest deletion of non-legal records"],
              ["Periodic Updates", "Our privacy policy is reviewed quarterly. Users will be notified via email regarding any significant material changes."],
              ["Contact Privacy Team", "privacy@closingengage.com\nResponse time: within 24 business hours."],
            ].map(([title, body]) => (
              <Surface key={title} className="p-6">
                <div className="text-lg font-extrabold tracking-[-0.03em] text-ink-900">{title}</div>
                <div className="mt-3 whitespace-pre-line text-sm leading-6 text-ink-500">{body}</div>
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

export function RoleSelectionPage() {
  return (
    <AuthShell title="Welcome" subtitle="To get started, tell us a little about who you are...">
      <div className="mx-auto max-w-[720px] space-y-5">
        <RoleCard title="I REQUIRE SIGNING SERVICES" subtitle="For Title Companies and Businesses" />
        <RoleCard title="I AM A NOTARY OR ATTORNEY" subtitle="For Notaries and Signing Agents" />
      </div>
    </AuthShell>
  );
}

export function SignupPage() {
  return (
    <AuthShell title="Welcome" subtitle="To get started, tell us a little about who you are...">
      <div className="mx-auto max-w-[720px] rounded-[24px] border border-brand-100 bg-brand-50 px-6 py-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" />
        <div className="mt-5 text-2xl font-extrabold tracking-[-0.03em] text-ink-900">Select a role to continue</div>
        <p className="mt-3 text-sm leading-6 text-ink-500">
          Use the role selection page to continue with either I REQUIRE SIGNING SERVICES or I AM A NOTARY OR ATTORNEY.
        </p>
        <Button className="mt-6" onClick={() => window.location.assign("/signup/role-selection")}>
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </AuthShell>
  );
}
