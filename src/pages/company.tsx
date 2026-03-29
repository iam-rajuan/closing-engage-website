import { ChevronLeft, ChevronRight, Download, FileText, Filter, Plus, Search, Trash2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge, Button, Input, MetricCards, SectionTitle, Select, Surface, Table, Textarea, UploadZone } from "@/components/common";
import { companyDocuments, companyMetrics, companyOrders, recentActivities, teamMembers } from "@/data/mock-data";

export function CompanyDashboardPage() {
  return (
    <div className="space-y-6">
      <MetricCards items={companyMetrics} />
      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
        <Surface className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-ink-900">Recent Orders</h2>
            <Link to="/company/orders" className="text-sm font-semibold text-brand-600">View All Orders</Link>
          </div>
          <Table headers={["Order ID", "Client Name", "Notary", "Status", "Date", "Action"]}>
            {[
              ["#89210", "John Smith", "Robert Wilson", "Assigned", "Mar 24, 2026"],
              ["#89209", "Sarah Jones", "Emily Davis", "Under Review", "Mar 23, 2026"],
              ["#89208", "Michael Brown", "David Clark", "Completed", "Mar 22, 2026"],
            ].map(([id, client, notary, status, date]) => (
              <tr key={id} className="border-t border-ink-100">
                <td className="px-6 py-5 font-bold text-ink-900">{id}</td>
                <td className="px-6 py-5">{client}</td>
                <td className="px-6 py-5">{notary}</td>
                <td className="px-6 py-5"><Badge status={status} /></td>
                <td className="px-6 py-5">{date}</td>
                <td className="px-6 py-5"><Link to="/company/orders/ce-9421" className="font-semibold text-brand-600">View</Link></td>
              </tr>
            ))}
          </Table>
        </Surface>
        <div className="space-y-6">
          <Surface className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-ink-900">Order Status Overview</h2>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">Monthly Progress</div>
            </div>
            <div className="mt-8 space-y-6">
              {[
                ["Received", "100%"],
                ["Assigned", "85%"],
                ["Under Review", "60%"],
                ["Approved", "45%"],
                ["Completed", "30%"],
              ].map(([label, value], index) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm font-semibold text-ink-700">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-ink-100">
                    <div className="h-2 rounded-full bg-brand-600" style={{ width: `${100 - index * 15}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Surface>
          <Surface className="p-6">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-ink-900">Recent Activities</h2>
            <div className="mt-6 space-y-5">
              {recentActivities.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 h-11 w-11 rounded-full bg-brand-50" />
                  <div>
                    <div className="font-bold text-ink-900">{item.title}</div>
                    <div className="text-sm text-ink-500">{item.description}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 h-12 w-full rounded-xl border border-ink-100 bg-white text-sm font-semibold text-ink-500">
              Clear Notifications
            </button>
          </Surface>
        </div>
      </div>
      <div className="fixed bottom-7 left-7 hidden lg:block">
        <Link to="/company/orders/new">
          <Button><Plus className="mr-2 h-4 w-4" />Create New Order</Button>
        </Link>
      </div>
    </div>
  );
}

export function CompanyOrdersPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Orders"
        subtitle="Manage and track all your closing orders"
        action={<Link to="/company/orders/new"><Button><Plus className="mr-2 h-4 w-4" />Create New Order</Button></Link>}
      />
      <Surface className="p-5">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.35fr_0.35fr_56px]">
          <Input icon={<Search className="h-4 w-4 text-ink-300" />} placeholder="Search by Order ID or Client Name" />
          <Select options={["Status: All"]} />
          <Select options={["Date: Any time"]} />
          <button className="flex h-13 items-center justify-center rounded-xl border border-ink-100 bg-white">
            <Filter className="h-4 w-4 text-brand-600" />
          </button>
        </div>
      </Surface>
      <div className="grid gap-5 md:grid-cols-3">
        <Surface className="p-6"><div className="text-sm font-semibold text-ink-500">Total Orders</div><div className="mt-3 text-5xl font-extrabold">1,248</div></Surface>
        <Surface className="p-6"><div className="text-sm font-semibold text-ink-500">Pending Review</div><div className="mt-3 text-5xl font-extrabold">56</div></Surface>
        <Surface className="p-6"><div className="text-sm font-semibold text-ink-500">Completed Today</div><div className="mt-3 text-5xl font-extrabold">850</div></Surface>
      </div>
      <Table
        headers={["Order ID", "Client Name", "Property Address", "Notary", "Status", "Date", "Actions"]}
        footer={
          <div className="flex items-center justify-between text-sm text-ink-500">
            <span>Showing 1-10 of 248 orders</span>
            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-100"><ChevronLeft className="h-4 w-4" /></button>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">1</span>
              <span className="px-2">2</span>
              <span className="px-2">3</span>
              <span className="px-2">...</span>
              <span className="px-2">25</span>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-100"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        }
      >
        {companyOrders.map((order) => (
          <tr key={order.id} className="border-t border-ink-100">
            <td className="px-6 py-5 font-bold text-brand-600">{order.id}</td>
            <td className="px-6 py-5 font-semibold text-ink-900">{order.clientName}</td>
            <td className="px-6 py-5 text-ink-500">{order.propertyAddress}</td>
            <td className="px-6 py-5">{order.notary}</td>
            <td className="px-6 py-5"><Badge status={order.status} /></td>
            <td className="px-6 py-5">{order.date}</td>
            <td className="px-6 py-5"><Link to="/company/orders/ce-9421" className="font-semibold text-brand-600">View</Link></td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export function CompanyOrdersNewPage() {
  return (
    <div className="space-y-6">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink-300">Orders • Create New Order</div>
      <SectionTitle title="Create New Order" subtitle="Fill in the details below to initiate a new title closing process." />
      <div className="space-y-6">
        <Surface className="p-8">
          <div className="mb-6 text-lg font-extrabold text-ink-900">Order Information</div>
          <div className="grid gap-5">
            <Input label="Order Title *" placeholder="e.g. 452 Oak Street Refinance" className="bg-white" />
            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Client Name *" placeholder="Full legal name" className="bg-white" />
              <Input label="Property Address *" placeholder="Street address" className="bg-white" />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <Input label="City" className="bg-white" />
              <Select label="State" options={["Select State"]} />
              <Input label="ZIP" className="bg-white" />
            </div>
            <Input label="Signing Date & Time" placeholder="mm/dd/yyyy" className="bg-white" />
            <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr]">
              <Select label="Loan Type" options={["Select a loan type"]} />
              <Surface className="p-5">
                <div className="text-sm font-semibold text-ink-900">Scan Backs Required</div>
                <div className="mt-4 flex gap-5 text-sm">
                  <label className="flex items-center gap-2"><input type="radio" name="scanbacks" />Yes, required</label>
                  <label className="flex items-center gap-2"><input defaultChecked type="radio" name="scanbacks" />No</label>
                </div>
              </Surface>
            </div>
          </div>
        </Surface>
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <Surface className="p-8">
            <div className="mb-6 text-lg font-extrabold text-ink-900">Instructions</div>
            <div className="grid gap-5">
              <Select label="Preferred Notary (Optional)" options={["No preference"]} />
              <div className="-mt-2 text-xs text-ink-400">Leave empty to auto-assign the best available notary in the area.</div>
              <Textarea label="Special Instructions" placeholder="Enter any specific requirements, gate codes, or client preferences..." />
            </div>
          </Surface>
          <div className="rounded-[28px] bg-brand-600 p-8 text-white">
            <div className="text-lg font-extrabold">Order Priority</div>
            <div className="mt-6 space-y-5 text-sm">
              <label className="flex items-start gap-3"><input defaultChecked type="radio" name="priority" className="mt-1" /><span><span className="font-semibold">Normal Processing</span></span></label>
              <label className="flex items-start gap-3"><input type="radio" name="priority" className="mt-1" /><span><span className="font-semibold">Urgent Request</span><br /><span className="text-white/70">Guaranteed 4-hour assignment</span></span></label>
            </div>
          </div>
        </div>
        <Surface className="p-8">
          <div className="mb-6 text-lg font-extrabold text-ink-900">Supporting Documents</div>
          <UploadZone title="Drag & drop files here" subtitle="Accepts PDF, DOCX up to 25MB" />
          <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#fff7f6] px-4 py-4 text-sm">
            <div><span className="font-semibold text-ink-900">Closing_Statement_V1.pdf</span><br /><span className="text-ink-400">1.2 MB • Uploaded 2 mins ago</span></div>
            <Trash2 className="h-4 w-4 text-danger-600" />
          </div>
        </Surface>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit Order</Button>
      </div>
    </div>
  );
}

export function CompanyOrderDetailsPage() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <SectionTitle title={`Order ${id ? `#${id.toUpperCase()}` : "#CE-9421"}`} action={<Badge status="Approved" />} />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Surface className="p-8">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-ink-900">Order Information</h3>
            <button className="text-sm font-semibold text-brand-600">Edit Info</button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 text-sm">
            <div><div className="text-ink-400">Client Name</div><div className="mt-2 font-semibold text-ink-900">Mila Waters</div></div>
            <div><div className="text-ink-400">Signing Date & Time</div><div className="mt-2 font-semibold text-ink-900">Mar 18, 2026, 2:45 PM</div></div>
            <div className="md:col-span-2"><div className="text-ink-400">Property Address</div><div className="mt-2 font-semibold text-ink-900">442 Prospect St, Dallas TX 75201</div></div>
            <div className="md:col-span-2"><div className="text-ink-400">Special Instructions</div><div className="mt-2 font-semibold text-ink-900">"Client requested an evening signing. Please confirm notary availability for late pickup."</div></div>
          </div>
        </Surface>
        <Surface className="p-8">
          <div className="text-lg font-extrabold text-ink-900">Assigned Notary</div>
          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#172742,#8d5f62)] text-white font-bold">SJ</div>
            <div>
              <div className="font-extrabold text-ink-900">Sarah Jenkins</div>
              <div className="text-sm text-ink-500">4.9 (124 Closings)</div>
              <div className="text-sm text-ink-500">(555) 012-3456</div>
            </div>
          </div>
          <div className="mt-4"><Badge status="Active" /></div>
          <button className="mt-6 text-sm font-semibold text-brand-600">View Full Profile</button>
        </Surface>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Surface className="p-8">
          <div className="text-lg font-extrabold text-ink-900">Documents</div>
          <div className="mt-5 space-y-4">
            {["closing_statement.pdf", "closing_statement.pdf"].map((name, index) => (
              <div key={`${name}-${index}`} className="flex items-center justify-between rounded-2xl border border-ink-100 px-4 py-4">
                <div><div className="font-semibold text-ink-900">{name}</div><div className="text-sm text-ink-400">Uploaded Oct 23 • 2.4 MB</div></div>
                <FileText className="h-5 w-5 text-brand-600" />
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-ink-400">2 Files Total</div>
        </Surface>
        <Surface className="p-8">
          <div className="text-lg font-extrabold text-ink-900">Order Status</div>
          <div className="mt-6 grid gap-4 md:grid-cols-5 text-center text-sm">
            {[
              ["Received", "Feb 21, 2023"],
              ["Assigned", "Feb 23, 2023"],
              ["Under Review", "Feb 24, 2023"],
              ["Approved", "Current Stage"],
              ["Completed", "Estimated Oct 26"],
            ].map(([title, body], index) => (
              <div key={title} className="rounded-2xl bg-ink-50 px-3 py-4">
                <div className={`mx-auto mb-3 h-8 w-8 rounded-full ${index < 4 ? "bg-brand-600" : "bg-ink-200"}`} />
                <div className="font-semibold text-ink-900">{title}</div>
                <div className="mt-1 text-xs text-ink-400">{body}</div>
              </div>
            ))}
          </div>
        </Surface>
      </div>
      <Surface className="p-8">
        <div className="text-lg font-extrabold text-ink-900">Activity Log</div>
        <div className="mt-5 space-y-5">
          {[
            ["Review completed", "Today, 2:45 PM", "Final review by Compliance Team finished."],
            ["Documents uploaded", "Yesterday, 10:15 AM", "New version of Title Insurance form added."],
            ["Notary assigned", "Oct 23, 9:00 AM", "Sarah Parker has been assigned to this order."],
          ].map(([title, time, body]) => (
            <div key={title} className="border-l-2 border-brand-100 pl-4">
              <div className="font-semibold text-ink-900">{title}</div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">{time}</div>
              <div className="mt-2 text-sm text-ink-500">{body}</div>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}

export function CompanyDocumentsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Documents" subtitle="Access and download your approved files" />
      <Surface className="p-5">
        <div className="grid gap-4 lg:grid-cols-4">
          <Select options={["All Orders"]} />
          <Input placeholder="mm/dd/yyyy" />
          <Select options={["PDF Only"]} />
          <Button variant="ghost">Clear</Button>
        </div>
      </Surface>
      <Table
        headers={["File Name", "Order ID", "Uploaded Date", "File Size", "Status", "Actions"]}
        footer={<div className="flex items-center justify-between text-sm text-ink-500"><span>Showing 4 of 24 documents</span><div className="flex gap-4"><span className="font-semibold text-brand-600">1</span><span>2</span><span>3</span></div></div>}
      >
        {companyDocuments.map((doc) => (
          <tr key={doc.id} className="border-t border-ink-100">
            <td className="px-6 py-5 font-semibold text-ink-900">{doc.name}</td>
            <td className="px-6 py-5">{doc.orderId}</td>
            <td className="px-6 py-5">{doc.uploadDate}</td>
            <td className="px-6 py-5">{doc.size}</td>
            <td className="px-6 py-5"><Badge status={doc.status} /></td>
            <td className="px-6 py-5"><Link to="/company/documents/closing-disclosure-final" className="font-semibold text-brand-600">View</Link></td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export function CompanyDocumentsDetailPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
      <Surface className="overflow-hidden">
        <div className="border-b border-ink-100 px-6 py-5">
          <div className="mb-3 text-sm font-semibold text-brand-600">Back to Documents</div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-extrabold tracking-[-0.04em] text-ink-900">Closing_Disclosure_Final.pdf</h1>
            <span className="text-sm text-ink-400">Order ID: ORD-99281-TX</span>
            <Badge status="Approved" />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-ink-50 px-4 py-2 text-sm font-semibold">100%</div>
            <div className="text-sm text-ink-400">Page 1 of 5</div>
          </div>
          <div className="mt-6 flex min-h-[760px] items-center justify-center rounded-[28px] border border-dashed border-ink-200 bg-[linear-gradient(135deg,#f6f8fc,#eef3ff)] text-ink-400">
            PDF document preview placeholder
          </div>
        </div>
      </Surface>
      <div className="space-y-6">
        <Surface className="p-6">
          <h3 className="text-lg font-extrabold text-ink-900">File Details</h3>
          <div className="mt-5 space-y-4 text-sm">
            <Detail label="File Name" value="Closing_Disclosure_Final.pdf" />
            <Detail label="Size" value="2.4 MB" />
            <Detail label="Status" value="Approved" />
            <Detail label="Upload Date" value="Feb 24, 2026" />
            <Detail label="Uploaded By" value="Notary Sarah Jones" />
          </div>
        </Surface>
        <Surface className="p-6">
          <h3 className="text-lg font-extrabold text-ink-900">Order Information</h3>
          <div className="mt-5 space-y-4 text-sm">
            <Detail label="Client Name" value="Robert & Martha Henderson" />
            <Detail label="Property Address" value="123 Blue Oak Lane, Austin, TX 78701" />
          </div>
        </Surface>
        <Surface className="p-6">
          <h3 className="text-lg font-extrabold text-ink-900">Recent Activity</h3>
          <div className="mt-5 space-y-4 text-sm text-ink-500">
            <div>Approved by Admin<br /><span className="text-xs text-ink-300">Oct 25, 2023 • 10:15 AM</span></div>
            <div>Uploaded by Notary<br /><span className="text-xs text-ink-300">Oct 24, 2023 • 04:30 PM</span></div>
          </div>
          <p className="mt-5 text-sm leading-6 text-ink-500">
            This document is available only after admin approval. Securely encrypted and stored according to industry standards.
          </p>
          <div className="mt-6 flex gap-3">
            <Button variant="outline">Print</Button>
            <Button><Download className="mr-2 h-4 w-4" />Download</Button>
          </div>
        </Surface>
      </div>
    </div>
  );
}

export function CompanyTeamPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Team Management"
        subtitle="Manage your company team members and roles"
        action={<Link to="/company/team/new"><Button><Plus className="mr-2 h-4 w-4" />Add Member</Button></Link>}
      />
      <Surface className="p-5">
        <div className="grid gap-4 md:grid-cols-3">
          <Input placeholder="Search by name or email" />
          <Select options={["Role: All"]} />
          <Select options={["Status: All"]} />
        </div>
      </Surface>
      <Table headers={["Name", "Email", "Role", "Status", "Joined Date", "Actions"]} footer={<div className="flex justify-between text-sm text-ink-500"><span>Showing 3 of 12 team members</span><span>1</span></div>}>
        {teamMembers.map((member) => (
          <tr key={member.email} className="border-t border-ink-100">
            <td className="px-6 py-5 font-semibold text-ink-900">{member.name}</td>
            <td className="px-6 py-5">{member.email}</td>
            <td className="px-6 py-5"><Badge status={member.role} /></td>
            <td className="px-6 py-5"><Badge status={member.status} /></td>
            <td className="px-6 py-5">{member.joinedDate}</td>
            <td className="px-6 py-5 text-brand-600">•••</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export function CompanyTeamNewPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <Surface className="w-full max-w-[760px] p-8">
        <div className="text-3xl font-extrabold tracking-[-0.04em] text-ink-900">Add New Member</div>
        <div className="mt-2 text-sm text-ink-500">Invite a team member to your company account</div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Input label="Full Name" placeholder="John Doe" className="bg-white" />
          <Input label="Phone Number (optional)" placeholder="+1 (555) 000-0000" className="bg-white" />
          <Input label="Email Address" placeholder="john.doe@company.com" className="bg-white md:col-span-2" />
        </div>
        <div className="mt-8">
          <div className="text-sm font-semibold text-ink-900">Role Selection</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5">
              <div className="font-extrabold text-ink-900">Admin</div>
              <div className="mt-2 text-sm text-ink-500">Full access to all company settings and orders</div>
            </div>
            <div className="rounded-2xl border border-ink-100 p-5">
              <div className="font-extrabold text-ink-900">Member</div>
              <div className="mt-2 text-sm text-ink-500">Limited access to assigned orders and documents</div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-sm font-semibold text-ink-900">Permissions</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm">
            <label className="flex items-center gap-2"><input defaultChecked type="checkbox" />Create Orders</label>
            <label className="flex items-center gap-2"><input defaultChecked type="checkbox" />View Orders</label>
            <label className="flex items-center gap-2"><input defaultChecked type="checkbox" />Download Documents</label>
          </div>
        </div>
        <label className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink-700"><input defaultChecked type="checkbox" />Send invitation email to this user</label>
        <div className="mt-8 flex justify-end gap-3">
          <Link to="/company/team"><Button variant="ghost">Cancel</Button></Link>
          <Button>Add Member</Button>
        </div>
      </Surface>
    </div>
  );
}

export function CompanySettingsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Surface className="p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1c293f,#7e4d62)] text-white font-bold">AT</div>
            <div>
              <div className="text-2xl font-extrabold tracking-[-0.04em] text-ink-900">Alex Thompson</div>
              <div className="text-sm text-ink-500">alex.t@estateflux.com</div>
              <div className="text-sm text-ink-500">Estate Flux Title</div>
            </div>
          </div>
          <Button variant="outline">Edit Profile</Button>
        </Surface>
        <Surface className="p-8">
          <div className="text-lg font-extrabold text-ink-900">Security Settings</div>
          <div className="mt-5 space-y-4">
            <Input label="Current Password" placeholder={'""""""""'} className="bg-white" />
            <Input label="New Password" placeholder={'""""""""'} className="bg-white" />
            <Input label="Confirm New Password" placeholder={'""""""""'} className="bg-white" />
            <Button variant="outline">Update Password</Button>
          </div>
        </Surface>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Surface className="p-8">
          <div className="text-lg font-extrabold text-ink-900">Personal Information</div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Input label="Full Name" placeholder="Alex Thompson" className="bg-white" />
            <Input label="Email Address" placeholder="alex.t@estateflux.com" className="bg-white" />
            <Input label="Phone Number" placeholder="+1 (555) 902-4412" className="bg-white" />
          </div>
          <div className="mt-8 text-lg font-extrabold text-ink-900">Company Information</div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Input label="Company Name" placeholder="Estate Flux Title" className="bg-white" />
            <Input label="Company Email" placeholder="ops@estateflux.com" className="bg-white" />
            <Input label="Contact Number" placeholder="+1 (555) 200-1100" className="bg-white" />
            <Input label="Business Address" placeholder="782 Commerce Blvd, Austin TX" className="bg-white" />
          </div>
        </Surface>
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
      <div className="flex justify-end gap-3">
        <Button variant="ghost">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-ink-400">{label}</div>
      <div className="mt-1 font-semibold text-ink-900">{value}</div>
    </div>
  );
}
