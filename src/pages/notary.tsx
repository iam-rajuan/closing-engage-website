import { ChevronLeft, Download, Eye, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge, Button, FooterBand, Input, MetricCards, SectionTitle, Select, Surface, Table, Textarea, UploadZone } from "@/components/common";
import { chatMessages, credentialHistory, notaryAssignedOrders, notaryMetrics, notaryOrders } from "@/data/mock-data";

export function NotaryDashboardPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Assigned Workload"
        subtitle="Manage your active signing appointments and document verifications from a central atrium."
        action={<Link to="/notary/upload-documents"><Button>Upload Documents</Button></Link>}
      />
      <MetricCards items={notaryMetrics} />
      <Table
        headers={["Order ID", "Client Name", "Location", "Date & Time", "Status", "Action"]}
        footer={<div className="flex items-center justify-between text-sm text-ink-500"><span>Showing 4 of 24 results</span><div className="flex gap-4"><span>Previous</span><span>Next</span></div></div>}
      >
        {notaryOrders.map((order) => (
          <tr key={order.id} className="border-t border-ink-100">
            <td className="px-6 py-5 font-bold text-brand-600">{order.id}</td>
            <td className="px-6 py-5 font-semibold text-ink-900">{order.clientName}</td>
            <td className="px-6 py-5">{order.location}</td>
            <td className="px-6 py-5 font-semibold text-ink-900">{order.date}<br /><span className="text-xs font-normal text-ink-400">{order.time}</span></td>
            <td className="px-6 py-5"><Badge status={order.status} /></td>
            <td className="px-6 py-5"><Link to="/notary/orders/ord-88219" className="font-semibold text-brand-600">View</Link></td>
          </tr>
        ))}
      </Table>
      <FooterBand />
    </div>
  );
}

export function NotaryOrdersPage() {
  return (
    <div className="space-y-6">
      <Surface className="p-5">
        <div className="grid gap-4 xl:grid-cols-[1fr_0.3fr_0.3fr_auto_auto]">
          <Input icon={<Search className="h-4 w-4 text-ink-300" />} placeholder="Order ID or Client Name" />
          <Select options={["All Statuses"]} />
          <Input placeholder="mm/dd/yyyy" />
          <Button variant="outline">More Filters</Button>
          <Button variant="ghost">Export CSV</Button>
        </div>
      </Surface>
      <Table headers={["Order ID", "Client Name", "Signing location", "Signing Date", "Status", "Actions"]} footer={<div className="text-sm text-ink-500">Showing 1-3 of 24 assigned orders</div>}>
        {notaryAssignedOrders.map((order) => (
          <tr key={order.id} className="border-t border-ink-100">
            <td className="px-6 py-5 font-bold text-ink-900">{order.id}</td>
            <td className="px-6 py-5"><div className="font-semibold text-ink-900">{order.clientName}</div><div className="text-sm text-ink-500">{order.notary}</div></td>
            <td className="px-6 py-5">{order.location}</td>
            <td className="px-6 py-5">{order.date}<br />{order.time}</td>
            <td className="px-6 py-5"><Badge status={order.status} /></td>
            <td className="px-6 py-5 text-brand-600">View</td>
          </tr>
        ))}
      </Table>
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Status: Assigned", "Order has been dispatched but you haven't started the document package review yet."],
          ["Status: In Progress", "You have opened the signing package or marked yourself en route to the client."],
          ["Status: Submitted", "The signing is complete and the executed documents have been uploaded for review."],
        ].map(([title, body]) => (
          <Surface key={title} className="p-6">
            <div className="font-extrabold text-ink-900">{title}</div>
            <div className="mt-3 text-sm leading-6 text-ink-500">{body}</div>
          </Surface>
        ))}
      </div>
      <FooterBand />
    </div>
  );
}

export function NotaryOrderDetailPage() {
  return (
    <div className="space-y-6">
      <Link to="/notary/orders" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600"><ChevronLeft className="h-4 w-4" />Back to Orders</Link>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-ink-900">Order ID #ORD-88219</h1>
          <Badge status="Assigned" />
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Mark as In Progress</Button>
          <Button>Mark as Completed</Button>
        </div>
      </div>
      <Surface className="p-8">
        <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-ink-500">Order Lifecycle</div>
        <div className="mt-6 grid gap-5 md:grid-cols-3 text-center">
          {[
            ["Docs Ready to Print", "Completed", true],
            ["Docs Printed by Notary", "Confirm", true],
            ["Scanbacks Uploaded", "Confirm", false],
          ].map(([title, body, active]) => (
            <div key={`${title}`} className="rounded-[24px] bg-ink-50 px-4 py-6">
              <div className={`mx-auto h-11 w-11 rounded-2xl ${active ? "bg-brand-600" : "bg-ink-200"}`} />
              <div className="mt-4 font-semibold text-ink-900">{title}</div>
              <button className={`mt-4 rounded-full px-4 py-2 text-xs font-semibold ${active ? "border border-brand-600 text-brand-600" : "bg-ink-100 text-ink-300"}`}>{body}</button>
            </div>
          ))}
        </div>
      </Surface>
      <div className="grid gap-6 xl:grid-cols-[1fr_0.75fr]">
        <div className="space-y-6">
          <Surface className="p-8">
            <div className="mb-5 text-lg font-extrabold text-ink-900">Order Information</div>
            <div className="grid gap-5 md:grid-cols-2 text-sm">
              <div><div className="text-ink-400">Client</div><div className="mt-2 font-semibold text-ink-900">Jonathan Aris</div></div>
              <div><div className="text-ink-400">Signing Date & Time</div><div className="mt-2 font-semibold text-ink-900">Oct 24, 2023 at 2:00 PM</div></div>
              <div><div className="text-ink-400">Property Address</div><div className="mt-2 font-semibold text-ink-900">123 Oak St, Austin, TX 78701</div></div>
              <div><div className="text-ink-400">Property Address</div><div className="mt-2 font-semibold text-ink-900">San Francisco, CA</div></div>
            </div>
          </Surface>
          <Surface className="p-8">
            <div className="text-lg font-extrabold text-ink-900">Special Instructions</div>
            <p className="mt-4 text-sm leading-6 text-ink-500">Please ensure all signatures are in blue ink. Scan and upload the full package once completed.</p>
          </Surface>
          <Surface className="p-8">
            <div className="text-lg font-extrabold text-ink-900">Provided Documents</div>
            <div className="mt-5 space-y-4">
              {[
                ["Closing_Instructions.pdf", "1.2 MB"],
                ["Signature_Package.pdf", "5.4 MB"],
              ].map(([name, size]) => (
                <div key={name} className="flex items-center justify-between rounded-2xl border border-ink-100 px-4 py-4">
                  <div><div className="font-semibold text-ink-900">{name}</div><div className="text-sm text-ink-400">{size}</div></div>
                  <div className="flex gap-4 text-brand-600"><Eye className="h-4 w-4" /><Download className="h-4 w-4" /></div>
                </div>
              ))}
            </div>
          </Surface>
        </div>
        <div className="space-y-6">
          <Surface className="p-6">
            <div className="mb-5 text-lg font-extrabold text-ink-900">Upload Scanbacks</div>
            <UploadZone title="Drag and drop scanbacks here" subtitle="Supports PDF up to 50MB" />
            <div className="mt-5 rounded-2xl bg-[#fff7f6] px-4 py-4 text-sm">
              <div className="font-semibold text-ink-900">Scanback_Part1.pdf</div>
              <div className="text-ink-400">2.4 MB • Uploaded just now</div>
            </div>
          </Surface>
          <Surface className="p-8">
            <div className="text-lg font-extrabold text-ink-900">Notary Notes</div>
            <Textarea className="mt-4" placeholder="Add any specific details about the signing here..." />
          </Surface>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-full max-w-[420px]">
          <Button className="w-full">Submit Documents</Button>
          <div className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-300">Required fields must be completed before submission</div>
        </div>
      </div>
      <FooterBand />
    </div>
  );
}

export function NotaryUploadDocumentsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Upload Documents"
        subtitle="Upload scanback documents for your assigned orders. Ensure all pages are legible and included in a single PDF file where possible."
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_280px]">
        <div className="space-y-6">
          <Select label="Select Assigned Order" options={["#CE-90210 - Jonathan Harker"]} />
          <UploadZone />
          <Surface className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-ink-900">scanback_signed_final.pdf</div>
                <div className="text-sm text-ink-500">4.2 MB • Ready to Submit</div>
              </div>
              <button className="text-ink-400">×</button>
            </div>
            <div className="mt-5 h-2 rounded-full bg-ink-100"><div className="h-2 w-full rounded-full bg-emerald-500" /></div>
            <div className="mt-3 flex justify-between text-xs font-semibold text-emerald-600"><span>Verification Complete</span><span>100%</span></div>
          </Surface>
        </div>
        <Surface className="h-fit p-6">
          <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-ink-500">Submission Guide</div>
          <div className="mt-5 space-y-5 text-sm leading-6 text-ink-500">
            <div><strong className="block text-ink-900">Legibility</strong>Ensure all text is sharp and readable for the title officer.</div>
            <div><strong className="block text-ink-900">Order of Pages</strong>Keep the stack in the original order provided in the packet.</div>
            <div><strong className="block text-ink-900">Full Stack</strong>Include all pages, even if they only contain boilerplate text.</div>
          </div>
        </Surface>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-emerald-600">All systems operational</div>
        <Button>Upload & Submit</Button>
      </div>
      <FooterBand />
    </div>
  );
}

export function NotarySettingsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Surface className="p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-18 w-18 rounded-[20px] bg-[linear-gradient(135deg,#172742,#6d4d63)]" />
            <div>
              <div className="flex items-center gap-3">
                <div className="text-2xl font-extrabold tracking-[-0.04em] text-ink-900">Sarah Miller</div>
                <Badge status="Verified" />
              </div>
              <div className="text-sm text-ink-500">sarah.miller@title-experts.com</div>
            </div>
          </div>
          <Button variant="outline">Edit Profile</Button>
        </Surface>
        <Surface className="p-8">
          <div className="text-lg font-extrabold text-ink-900">Security Settings</div>
          <div className="mt-6 space-y-4">
            <Input label="Current Password" placeholder={'""""""""'} className="bg-white" />
            <Input label="New Password" placeholder={'""""""""'} className="bg-white" />
            <Input label="Confirm New Password" placeholder={'""""""""'} className="bg-white" />
            <Button variant="outline">Update Password</Button>
          </div>
        </Surface>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Surface className="p-8">
            <div className="text-lg font-extrabold text-ink-900">Personal Information</div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Input label="Full Name" placeholder="Sarah Miller" className="bg-white" />
              <Input label="Phone Number" placeholder="+1 (512) 555-0123" className="bg-white" />
              <Input label="Email Address" placeholder="sarah.miller@title-experts.com" className="bg-white md:col-span-2" />
            </div>
          </Surface>
          <Surface className="p-8">
            <div className="text-lg font-extrabold text-ink-900">Professional Details</div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Input label="License Number" placeholder="TX-992031-NM" className="bg-white" />
              <Input label="Commission Expiry" placeholder="08/14/2026" className="bg-white" />
              <Input label="Service Area" placeholder="Austin, TX & surrounding Travis County" className="bg-white md:col-span-2" />
            </div>
          </Surface>
        </div>
        <Surface className="p-8">
          <div className="text-lg font-extrabold text-ink-900">Notification Preferences</div>
          <div className="mt-6 space-y-6">
            {[
              ["Email Notifications", "Receive global summary emails", true],
              ["Order Updates", "Real-time alerts for escrow changes", true],
              ["Document Updates", "Alerts when new documents are signed", false],
            ].map(([label, body, active]) => (
              <div key={`${label}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-ink-900">{label}</div>
                    <div className="text-sm text-ink-500">{body}</div>
                  </div>
                  <div className={`h-7 w-12 rounded-full p-1 ${active ? "bg-brand-600" : "bg-ink-200"}`}>
                    <div className={`h-5 w-5 rounded-full bg-white ${active ? "ml-5" : ""}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </div>
      <FooterBand />
    </div>
  );
}

export function NotaryCredentialsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Notary Credentials" subtitle="View your license and verification details" />
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Surface className="p-8">
          <div className="mb-4"><Badge status="Verified" /></div>
          <div className="text-3xl font-extrabold tracking-[-0.04em] text-ink-900">Primary Commission</div>
          <div className="mt-5 text-sm text-ink-500">California Secretary of State</div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div><div className="text-ink-400">License Number</div><div className="mt-1 font-semibold text-ink-900">CA-8829-2024</div></div>
            <div><div className="text-ink-400">Commission Expiry</div><div className="mt-1 font-semibold text-ink-900">Nov 14, 2027</div></div>
            <div><div className="text-ink-400">E&O Coverage</div><div className="mt-1 font-semibold text-ink-900">$100,000.00</div></div>
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="outline">Update information</Button>
            <Button>Upload new credential</Button>
          </div>
        </Surface>
        <Surface className="p-8">
          <div className="mb-4"><Badge status="Pending" /></div>
          <div className="text-2xl font-extrabold tracking-[-0.04em] text-ink-900">Background Screening</div>
          <div className="mt-3 text-sm leading-6 text-ink-500">Under review by the compliance department.<br />Estimated completion: 48 hours.</div>
        </Surface>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-[-0.04em] text-ink-900">Credential History</div>
        <Button variant="ghost">Filter</Button>
      </div>
      <Table headers={["Document Name", "Issuer", "Upload Date", "Action"]} footer={<div className="text-sm font-semibold text-brand-600">Load More Ledger Entries</div>}>
        {credentialHistory.map((row) => (
          <tr key={row.documentName} className="border-t border-ink-100">
            <td className="px-6 py-5 font-semibold text-ink-900">{row.documentName}</td>
            <td className="px-6 py-5">{row.issuer}</td>
            <td className="px-6 py-5">{row.uploadDate}</td>
            <td className="px-6 py-5"><Badge status={row.action === "Auto-Verified" ? "Verified" : "Pending"} /></td>
          </tr>
        ))}
      </Table>
      <FooterBand />
    </div>
  );
}

export function NotaryCommunicationsPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
      <Surface className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-lg font-extrabold text-ink-900">Active File Context</div>
          <Button variant="ghost">New Chat</Button>
        </div>
        <div className="space-y-4 text-sm">
          <div><div className="text-ink-400">File Number</div><div className="mt-1 font-semibold text-ink-900">CE-99283-SL</div></div>
          <div><div className="text-ink-400">Live Support</div><div className="mt-1 font-semibold text-ink-900">Online</div></div>
          <div><div className="text-ink-400">Principal Signer</div><div className="mt-1 font-semibold text-ink-900">Robert J. Smith</div></div>
          <div><div className="text-ink-400">Current Status</div><div className="mt-1"><Badge status="Pending Review" /></div></div>
        </div>
        <Button variant="outline" className="mt-6 w-full">VIEW FULL DOSSIER</Button>
      </Surface>
      <Surface className="p-6">
        <div className="text-3xl font-extrabold tracking-[-0.04em] text-ink-900">Communication Center</div>
        <div className="mt-2 text-sm text-ink-500">Chat with Closing Engage team regarding active files.</div>
        <div className="mt-8 space-y-5">
          <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink-300">Today</div>
          {chatMessages.map((message) => (
            <div key={`${message.sender}-${message.time}`} className={message.role === "you" ? "ml-auto max-w-[82%]" : "max-w-[82%]"}>
              <div className="mb-2 text-sm font-semibold text-ink-900">{message.sender} <span className="ml-2 text-xs font-normal text-ink-400">{message.time}</span></div>
              <div className={`rounded-[22px] px-5 py-4 text-sm leading-6 ${message.role === "you" ? "bg-brand-600 text-white" : "bg-ink-50 text-ink-700"}`}>{message.body}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-brand-600">Sarah is typing...</div>
        <div className="mt-4 flex items-center gap-4 rounded-2xl border border-ink-100 bg-white px-5 py-4">
          <input className="flex-1 outline-none" placeholder="Type a message..." />
          <Button>Send</Button>
        </div>
        <div className="mt-4 text-sm text-ink-400">Your messages are encrypted end-to-end.</div>
      </Surface>
    </div>
  );
}
