import { useRef, useState } from "react";
import { CalendarDays, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, CircleDot, Download, Eye, FileText, FolderKanban, Hourglass, Info, MapPin, Plus, Printer, RotateCw, Search, ShieldCheck, SlidersHorizontal, Trash2, ZoomIn, ZoomOut } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge, Button, Input, SectionTitle, Select, Surface, Table, Textarea } from "@/components/common";
import { companyDocuments, companyOrders, teamMembers } from "@/data/mock-data";

export function CompanyDashboardPage() {
  const dashboardStats = [
    { title: "Total Orders", value: "1,248", icon: FileText, tone: "brand" },
    { title: "Active Orders", value: "342", icon: FolderKanban, tone: "brand" },
    { title: "Pending Review", value: "56", icon: Hourglass, tone: "warning" },
    { title: "Completed Orders", value: "850", icon: CheckCircle2, tone: "success" },
  ] as const;

  const recentOrders = [
    { id: "#89210", client: "John Smith", notary: "Robert Wilson", initials: "RW", accent: "from-[#1d2d48] to-[#8d6557]", status: "Assigned" as const, date: "Mar 24, 2026" },
    { id: "#89209", client: "Sarah Jones", notary: "Emily Davis", initials: "ED", accent: "from-[#6a4f62] to-[#d0a177]", status: "Under Review" as const, date: "Mar 23, 2026" },
    { id: "#89208", client: "Michael Brown", notary: "David Clark", initials: "DC", accent: "from-[#17384a] to-[#4e9b8f]", status: "Completed" as const, date: "Mar 22, 2026" },
  ];

  const statusRows = [
    { label: "Received", value: "100%", width: "100%" },
    { label: "Assigned", value: "85%", width: "85%" },
    { label: "Under Review", value: "60%", width: "60%" },
    { label: "Approved", value: "45%", width: "45%" },
    { label: "Completed", value: "30%", width: "30%" },
  ];

  const activityItems = [
    {
      title: "Order assigned to notary",
      description: "Robert Wilson took #89210",
      time: "2 mins ago",
      icon: CircleDot,
      tone: "brand",
    },
    {
      title: "Status updated for #89210",
      description: "Moved to Under Review",
      time: "45 mins ago",
      icon: Hourglass,
      tone: "warning",
    },
    {
      title: "Document approved by client",
      description: "Sarah Jones verified all files",
      time: "2 hours ago",
      icon: ShieldCheck,
      tone: "success",
    },
  ] as const;

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map(({ title, value, icon: Icon, tone }) => (
          <Surface
            key={title}
            className="rounded-[18px] border border-[#e4ebf5] bg-white p-6 shadow-[0_12px_30px_rgba(20,48,112,0.05)]"
          >
            <div
              className={`mb-9 flex h-12 w-12 items-center justify-center rounded-[14px] ${
                tone === "warning"
                  ? "bg-[#fff5e8] text-[#f0a11d]"
                  : tone === "success"
                    ? "bg-[#edf9f2] text-[#3ab86b]"
                    : "bg-[#eef4ff] text-brand-600"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="text-[13px] font-semibold text-ink-400">{title}</div>
            <div className="mt-2 text-[46px] font-extrabold leading-none tracking-[-0.05em] text-ink-900">
              {value}
            </div>
          </Surface>
        ))}
      </div>

      <Surface className="overflow-hidden rounded-[18px] border border-[#e4ebf5] bg-white shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
        <div className="flex items-center justify-between px-7 py-6">
          <h2 className="text-[30px] font-extrabold tracking-[-0.04em] text-ink-900">Recent Orders</h2>
          <Link to="/company/orders" className="text-sm font-semibold text-brand-600">
            View All Orders
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-[#edf1f7] text-left text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-300">
                {["Order ID", "Client Name", "Notary", "Status", "Date", "Action"].map((header) => (
                  <th key={header} className="px-7 py-4">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-t border-[#edf1f7]">
                  <td className="px-7 py-5 text-[15px] font-bold text-ink-900">{order.id}</td>
                  <td className="px-7 py-5 text-[15px] font-medium text-ink-600">{order.client}</td>
                  <td className="px-7 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${order.accent} text-[10px] font-bold text-white`}>
                        {order.initials}
                      </div>
                      <span className="text-[15px] font-medium text-ink-600">{order.notary}</span>
                    </div>
                  </td>
                  <td className="px-7 py-5">
                    <Badge status={order.status} />
                  </td>
                  <td className="px-7 py-5 text-[15px] font-medium text-ink-500">{order.date}</td>
                  <td className="px-7 py-5">
                    <Link
                      to="/company/orders/ce-9421"
                      className="inline-flex h-9 items-center justify-center rounded-[10px] bg-[#eef1ff] px-4 text-[13px] font-semibold text-brand-600 transition-colors hover:bg-[#e7ecff]"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Surface>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.7fr]">
        <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-7 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-[30px] font-extrabold tracking-[-0.04em] text-ink-900">Order Status Overview</h2>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-300">Monthly Progress</div>
          </div>
          <div className="mt-9 space-y-7">
            {statusRows.map((row) => (
              <div key={row.label}>
                <div className="mb-2.5 flex items-center justify-between text-[14px] font-semibold text-ink-600">
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
                <div className="h-[9px] rounded-full bg-[#eef2f8]">
                  <div className="h-[9px] rounded-full bg-brand-600" style={{ width: row.width }} />
                </div>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-7 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
          <h2 className="text-[30px] font-extrabold tracking-[-0.04em] text-ink-900">Recent Activities</h2>
          <div className="mt-7 space-y-6">
            {activityItems.map(({ title, description, time, icon: Icon, tone }) => (
              <div key={title} className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                    tone === "warning"
                      ? "bg-[#fff7ea] text-[#f0a11d]"
                      : tone === "success"
                        ? "bg-[#edf9f2] text-[#38b36b]"
                        : "bg-[#eef4ff] text-brand-600"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-[15px] font-bold leading-[1.45] text-ink-900">{title}</div>
                  <div className="mt-1 text-[14px] leading-[1.6] text-ink-500">{description}</div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-300">{time}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-9 h-[48px] w-full rounded-[12px] border border-[#e4ebf5] bg-white text-[14px] font-semibold text-ink-500 transition-colors hover:bg-[#f8fafe]">
            Clear Notifications
          </button>
        </Surface>
      </div>
    </div>
  );
}

export function CompanyOrdersPage() {
  const stats = [
    { title: "Total Orders", value: "1,248", icon: FileText, tone: "brand" },
    { title: "Pending Review", value: "56", icon: Hourglass, tone: "warning" },
    { title: "Completed Today", value: "850", icon: CheckCircle2, tone: "success" },
  ] as const;

  const notaryAccent: Record<string, string> = {
    "David Miller": "from-[#7a6458] to-[#d6b08e]",
    "Robert Vance": "from-[#23314a] to-[#9d6d5f]",
    "Elena Wright": "from-[#6a4b63] to-[#d0ab8b]",
    "Gordon Cole": "from-[#165466] to-[#4eb3af]",
  };

  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <h1 className="text-[44px] font-extrabold leading-[1.02] tracking-[-0.045em] text-brand-600">
            Orders
          </h1>
          <p className="mt-2 text-[18px] leading-[1.7] text-ink-500">
            Manage and track all your closing orders
          </p>
        </div>
        <Link to="/company/orders/new">
          <Button className="h-[48px] rounded-[14px] px-5 text-[15px] font-semibold shadow-[0_14px_32px_rgba(24,90,188,0.18)]">
            <Plus className="mr-2 h-4 w-4" />
            Create New Order
          </Button>
        </Link>
      </div>

      <Surface className="rounded-[18px] border border-[#e4ebf5] bg-[#f9fbff] p-4 shadow-[0_12px_30px_rgba(20,48,112,0.04)]">
        <div className="grid gap-4 lg:grid-cols-[1.55fr_0.4fr_0.4fr_54px]">
          <div className="flex h-[50px] items-center gap-3 rounded-[14px] border border-[#e5ebf5] bg-white px-4 text-sm text-ink-300">
            <Search className="h-4 w-4 shrink-0" />
            <span>Search by Order ID or Client Name</span>
          </div>
          <Select options={["Status: All"]} className="h-[50px] rounded-[14px] border-[#e5ebf5] bg-white" />
          <div className="flex h-[50px] items-center justify-between rounded-[14px] border border-[#e5ebf5] bg-white px-4 text-sm text-ink-700">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-ink-400" />
              <span>Date: Any time</span>
            </div>
            <ChevronDown className="h-4 w-4 text-ink-400" />
          </div>
          <button className="flex h-[50px] items-center justify-center rounded-[14px] border border-[#e5ebf5] bg-white text-brand-600 transition-colors hover:bg-[#f5f8ff]">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </Surface>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map(({ title, value, icon: Icon, tone }) => (
          <Surface
            key={title}
            className="rounded-[18px] border border-[#e4ebf5] bg-white p-6 shadow-[0_12px_30px_rgba(20,48,112,0.05)]"
          >
            <div
              className={`mb-9 flex h-12 w-12 items-center justify-center rounded-[14px] ${
                tone === "warning"
                  ? "bg-[#fff5e8] text-[#f0a11d]"
                  : tone === "success"
                    ? "bg-[#edf9f2] text-[#3ab86b]"
                    : "bg-[#eef4ff] text-brand-600"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="text-[13px] font-semibold text-ink-400">{title}</div>
            <div className="mt-2 text-[46px] font-extrabold leading-none tracking-[-0.05em] text-ink-900">
              {value}
            </div>
          </Surface>
        ))}
      </div>

      <Surface className="overflow-hidden rounded-[18px] border border-[#e4ebf5] bg-white shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-300">
                {["Order ID", "Client Name", "Property Address", "Notary", "Status", "Date", "Actions"].map((header) => (
                  <th key={header} className="px-6 py-4">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {companyOrders.map((order) => (
                <tr key={order.id} className="border-t border-[#edf1f7]">
                  <td className="px-6 py-5 text-[15px] font-bold text-brand-600">{order.id.replace("#", "#ORD-")}</td>
                  <td className="px-6 py-5 text-[15px] font-semibold text-ink-900">{order.clientName}</td>
                  <td className="px-6 py-5 text-[15px] text-ink-500">{order.propertyAddress}</td>
                  <td className="px-6 py-5">
                    {order.notary === "--" ? (
                      <span className="text-[15px] text-ink-400">--</span>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${notaryAccent[order.notary] ?? "from-[#22344f] to-[#8f6a60]"} text-[10px] font-bold text-white`}>
                          {order.notary.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                        </div>
                        <span className="text-[15px] text-ink-600">{order.notary}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <Badge status={order.status} />
                  </td>
                  <td className="px-6 py-5 text-[15px] text-ink-500">{order.date}</td>
                  <td className="px-6 py-5">
                    <Link to="/company/orders/ce-9421" className="text-[15px] font-semibold text-brand-600">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-[#edf1f7] px-6 py-5 text-sm text-ink-500">
          <span>Showing 1-10 of 248 orders</span>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f4f5fb] text-ink-400">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-600 text-sm font-semibold text-white">1</span>
            <span className="px-2 text-sm font-medium text-ink-700">2</span>
            <span className="px-2 text-sm font-medium text-ink-700">3</span>
            <span className="px-2 text-sm font-medium text-ink-400">...</span>
            <span className="px-2 text-sm font-medium text-ink-700">25</span>
            <button className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f4f5fb] text-ink-500">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Surface>
    </div>
  );
}

export function CompanyOrdersNewPage() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const appendFiles = (files: FileList | File[]) => {
    const acceptedFiles = Array.from(files).filter((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase();
      return extension === "pdf" || extension === "docx";
    });

    if (acceptedFiles.length === 0) return;

    setUploadedFiles((current) => [...current, ...acceptedFiles]);
  };

  const handleFilePicker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    appendFiles(event.target.files);
    event.target.value = "";
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(false);
    if (!event.dataTransfer.files?.length) return;
    appendFiles(event.dataTransfer.files);
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles((current) => current.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-300">
            Orders <span className="mx-1 text-ink-200">•</span> Create New Order
          </div>
          <div className="mt-4">
            <h1 className="text-[42px] font-extrabold leading-[1.04] tracking-[-0.045em] text-ink-900">
              Create New Order
            </h1>
            <p className="mt-2 text-[17px] leading-[1.7] text-ink-500">
              Fill in the details below to initiate a new title closing process.
            </p>
          </div>
        </div>
        <Link to="/company/orders">
          <Button
            variant="outline"
            className="h-[46px] rounded-[12px] border-[#dfe6f2] px-5 text-[14px] font-semibold text-ink-700 shadow-[0_10px_24px_rgba(20,48,112,0.04)] hover:border-brand-200 hover:bg-[#f8fbff]"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Button>
        </Link>
      </div>

      <div className="space-y-6">
        <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-7 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#eef4ff] text-brand-600">
              <CircleDot className="h-4 w-4" />
            </div>
            <div className="text-[20px] font-extrabold text-ink-900">Order Information</div>
          </div>
          <div className="grid gap-5">
            <Input label="ORDER TITLE *" placeholder="e.g. 452 Oak Street Refinance" className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-white px-4 text-[14px]" />
            <div className="grid gap-5 md:grid-cols-2">
              <Input label="CLIENT NAME *" placeholder="Full legal name" className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-white px-4 text-[14px]" />
              <Input label="PROPERTY ADDRESS *" placeholder="Street address" className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-white px-4 text-[14px]" />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <Input label="CITY" className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-white px-4 text-[14px]" />
              <Select label="STATE" options={["Select State"]} className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-white" />
              <Input label="ZIP" className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-white px-4 text-[14px]" />
            </div>
            <Input label="SIGNING DATE & TIME" placeholder="mm/dd/yyyy" className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-white px-4 text-[14px]" />
            <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
              <div>
                <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-500">Loan Details</div>
                <Select label="LOAN TYPE" options={["Select a loan type"]} className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-[#f7faff]" />
              </div>
              <div>
                <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-500">Requirements</div>
                <div className="rounded-[16px] border border-[#e4ebf5] bg-white px-5 py-4">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-500">SCAN BACKS REQUIRED</div>
                  <div className="mt-4 flex gap-6 text-[14px] text-ink-700">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="scanbacks" />
                      Yes, required
                    </label>
                    <label className="flex items-center gap-2">
                      <input defaultChecked type="radio" name="scanbacks" />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Surface>

        <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-7 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#eef4ff] text-brand-600">
                <FileText className="h-4 w-4" />
              </div>
              <div className="text-[20px] font-extrabold text-ink-900">Instructions</div>
            </div>
            <div className="grid gap-5">
              <Select label="PREFERRED NOTARY (OPTIONAL)" options={["No preference"]} className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-white" />
              <div className="-mt-2 text-[11px] text-ink-400">
                Leave empty to auto-assign the best available notary in the area.
              </div>
              <Textarea
                label="SPECIAL INSTRUCTIONS"
                placeholder="Enter any specific requirements, gate codes, or client preferences..."
                className="min-h-[120px] rounded-[12px] border-[#dfe6f2] bg-white px-4 py-3 text-[14px]"
              />
            </div>
          </Surface>

          <div className="rounded-[18px] bg-brand-600 p-6 text-white shadow-[0_18px_38px_rgba(24,90,188,0.18)]">
            <div className="text-[20px] font-extrabold">Order Priority</div>
            <div className="mt-6 space-y-5 text-[14px]">
              <label className="flex items-start gap-3">
                <input defaultChecked type="radio" name="priority" className="mt-1" />
                <span>
                  <span className="font-semibold">Normal Processing</span>
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input type="radio" name="priority" className="mt-1" />
                <span>
                  <span className="font-semibold">Urgent Request</span>
                  <br />
                  <span className="text-white/72">Guaranteed 4-hour assignment</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-7 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#eef4ff] text-brand-600">
              <FileText className="h-4 w-4" />
            </div>
            <div className="text-[20px] font-extrabold text-ink-900">Supporting Documents</div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="hidden"
            onChange={handleFilePicker}
          />
          <div
            className={`rounded-[16px] border border-dashed px-6 py-10 text-center transition-colors ${
              isDragActive
                ? "border-brand-300 bg-[#f5f9ff]"
                : "border-[#dfe6f2] bg-[#fcfdff]"
            }`}
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragActive(true);
            }}
            onDragEnter={(event) => {
              event.preventDefault();
              setIsDragActive(true);
            }}
            onDragLeave={(event) => {
              event.preventDefault();
              setIsDragActive(false);
            }}
            onDrop={handleDrop}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#eef4ff] text-brand-600">
              <Download className="h-5 w-5 rotate-180" />
            </div>
            <div className="mt-5 text-[14px] font-semibold text-ink-900">Drag & drop files here</div>
            <div className="mt-1 text-[12px] leading-[1.7] text-ink-400">Accepts PDF, DOCX up to 25MB</div>
            <Button
              type="button"
              variant="outline"
              className="mt-5 h-[38px] rounded-[10px] px-4 text-[12px] font-bold"
              onClick={() => fileInputRef.current?.click()}
            >
              Or Browse Files
            </Button>
          </div>
          <div className="mt-5 space-y-3">
            {uploadedFiles.length === 0 ? (
              <div className="rounded-[14px] border border-dashed border-[#edf1f7] px-4 py-4 text-[13px] text-ink-400">
                No files uploaded yet.
              </div>
            ) : null}
            {uploadedFiles.map((file, index) => (
              <div key={`${file.name}-${index}`} className="flex items-center justify-between rounded-[14px] bg-[#fff7f6] px-4 py-4 text-sm">
                <div>
                  <span className="font-semibold text-ink-900">{file.name}</span>
                  <br />
                  <span className="text-ink-400">
                    {(file.size / (1024 * 1024)).toFixed(1)} MB • Uploaded just now
                  </span>
                </div>
                <button type="button" onClick={() => removeFile(index)} aria-label={`Remove ${file.name}`}>
                  <Trash2 className="h-4 w-4 text-danger-600" />
                </button>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="ghost" className="rounded-[10px] border border-[#f3d7d7] bg-white px-5 py-2.5 text-[14px] font-semibold text-danger-600 hover:bg-[#fff6f6]">
          Cancel
        </Button>
        <Button
          className="h-[44px] rounded-[10px] px-6 text-[14px] font-semibold"
          onClick={() => navigate("/company/orders/ce-9421")}
        >
          Submit Order
        </Button>
      </div>
    </div>
  );
}

export function CompanyOrderDetailsPage() {
  const { id } = useParams();
  const orderId = id ? `#${id.toUpperCase()}` : "#CE-9421";
  const [showNotaryProfile, setShowNotaryProfile] = useState(false);
  const orderDocuments = [
    { name: "closing_statement.pdf", meta: "Uploaded Oct 23 • 2.4 MB" },
    { name: "closing_statement.pdf", meta: "Uploaded Oct 23 • 2.4 MB" },
  ];
  const orderTimeline = [
    { title: "Received", body: "Feb 21, 2023", active: true, current: false },
    { title: "Assigned", body: "Feb 23, 2023", active: true, current: false },
    { title: "Under Review", body: "Feb 24, 2023", active: true, current: false },
    { title: "Approved", body: "Current Stage", active: true, current: true },
    { title: "Completed", body: "Estimated Oct 26", active: false, current: false },
  ];
  const activityLog = [
    ["Review completed", "Final review by Compliance Team finished.", "Today, 2:45 PM"],
    ["Documents uploaded", "New version of Title Insurance form added.", "Yesterday, 10:15 AM"],
    ["Notary assigned", "Sarah Parker has been assigned to this order.", "Oct 23, 9:00 AM"],
  ] as const;

  return (
    <>
    <div className="space-y-6">
      <div className="text-[12px] text-ink-400">
        <span>Orders</span>
        <span className="mx-2 text-ink-300">›</span>
        <span className="font-semibold text-brand-600">Order Details</span>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-1 flex-wrap items-center gap-4">
          <h1 className="text-[46px] font-extrabold leading-none tracking-[-0.05em] text-ink-900">
            Order {orderId}
          </h1>
          <Badge status="Approved" />
        </div>
        <Link to="/company/orders">
          <Button
            variant="outline"
            className="h-[46px] rounded-[12px] border-[#dfe6f2] px-5 text-[14px] font-semibold text-ink-700 shadow-[0_10px_24px_rgba(20,48,112,0.04)] hover:border-brand-200 hover:bg-[#f8fbff]"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.52fr]">
        <div className="space-y-6">
          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-8 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="mb-7 flex items-center justify-between">
              <div className="text-[28px] font-extrabold tracking-[-0.03em] text-ink-900">Order Information</div>
              <button className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-600">
                Edit Info
              </button>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Detail label="CLIENT NAME" value="Mila Waters" />
              <Detail label="SIGNING DATE & TIME" value="Mar 18, 2026, 2:45 PM" />
              <div className="md:col-span-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-400">
                  PROPERTY ADDRESS
                </div>
                <div className="mt-3 flex items-center gap-2 text-[16px] font-semibold text-ink-900">
                  <MapPin className="h-4 w-4 text-brand-600" />
                  442 Prospect St, Dallas TX 75201
                </div>
              </div>
              <div className="md:col-span-2 rounded-[14px] bg-[#f5f8fe] px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600">
                  Special Instructions
                </div>
                <div className="mt-3 text-[14px] italic leading-[1.75] text-ink-500">
                  "Client requested an evening signing. Please confirm notary availability for late pickup."
                </div>
              </div>
            </div>
          </Surface>

          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-8 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#eef4ff] text-brand-600">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="text-[28px] font-extrabold tracking-[-0.03em] text-ink-900">Documents</div>
              </div>
              <div className="text-[13px] font-semibold text-brand-600">2 Files Total</div>
            </div>
            <div className="space-y-4">
              {orderDocuments.map((document, index) => (
                <div key={`${document.name}-${index}`} className="flex items-center gap-4 rounded-[14px] bg-[#fbfbff] px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#fff1f1] text-danger-600">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-ink-900">{document.name}</div>
                    <div className="mt-1 text-[12px] text-ink-400">{document.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-8 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#eef4ff] text-brand-600">
                <CircleDot className="h-4 w-4" />
              </div>
              <div className="text-[28px] font-extrabold tracking-[-0.03em] text-ink-900">Activity Log</div>
            </div>
            <div className="space-y-7">
              {activityLog.map(([title, body, time], index) => (
                <div key={title} className="relative pl-8">
                  {index < activityLog.length - 1 ? (
                    <div className="absolute left-[7px] top-5 h-[calc(100%+18px)] w-px bg-[#dbe4f1]" />
                  ) : null}
                  <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[17px] font-bold text-ink-900">{title}</div>
                      <div className="mt-2 text-[14px] leading-[1.7] text-ink-500">{body}</div>
                    </div>
                    <div className="shrink-0 text-[12px] font-semibold text-ink-400">{time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Surface>
        </div>

        <div className="space-y-6">
          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-6 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="text-[14px] font-semibold uppercase tracking-[0.08em] text-ink-400">Assigned Notary</div>
            <div className="mt-5 flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-[12px] bg-[linear-gradient(135deg,#7a523f,#d0b38d)]" />
              <div>
                <div className="text-[22px] font-extrabold tracking-[-0.03em] text-ink-900">Sarah Jenkins</div>
                <div className="mt-1 text-[13px] text-ink-500">4.9 <span className="mx-1 text-[#f0a11d]">★</span> (124 Closings)</div>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[14px]">
              <div className="flex items-center justify-between">
                <span className="text-ink-400">Phone</span>
                <span className="font-semibold text-ink-700">(555) 012-3456</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink-400">Status</span>
                <span className="font-semibold text-[#26b15f]">• Available</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowNotaryProfile(true)}
              className="mt-6 h-[42px] w-full rounded-[12px] bg-[#f4f7fc] text-[14px] font-semibold text-brand-600 transition-colors hover:bg-[#edf3fe]"
            >
              View Full Profile
            </button>
          </Surface>

          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-[#f6f6fd] p-7 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="text-[28px] font-extrabold tracking-[-0.03em] text-ink-900">Order Status</div>
            <div className="mt-7 space-y-6">
              {orderTimeline.map((item, index) => (
                <div key={item.title} className="relative pl-10">
                  {index < orderTimeline.length - 1 ? (
                    <div className={`absolute left-[13px] top-7 h-[calc(100%+12px)] w-[2px] ${item.active ? "bg-brand-600" : "bg-[#d6dbe7]"}`} />
                  ) : null}
                  <div
                    className={`absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 ${
                      item.current
                        ? "border-brand-600 bg-white"
                        : item.active
                          ? "border-brand-600 bg-brand-600"
                          : "border-[#cfd5e1] bg-white"
                    }`}
                  >
                    {item.current ? <div className="h-2.5 w-2.5 rounded-full bg-brand-600" /> : null}
                  </div>
                  <div className={`text-[22px] font-extrabold tracking-[-0.03em] ${item.active ? "text-ink-900" : "text-ink-300"}`}>
                    {item.title}
                  </div>
                  <div className={`mt-1 text-[13px] ${item.current ? "font-semibold text-brand-600" : item.active ? "text-ink-500" : "text-ink-300"}`}>
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </div>
    </div>
    {showNotaryProfile ? (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.42)] px-5"
        onClick={() => setShowNotaryProfile(false)}
      >
        <div
          className="w-full max-w-[560px] rounded-[22px] border border-[#dfe6f2] bg-white p-7 shadow-[0_28px_60px_rgba(20,48,112,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                Assigned Notary
              </div>
              <div className="mt-2 text-[30px] font-extrabold tracking-[-0.04em] text-ink-900">
                Sarah Jenkins
              </div>
              <div className="mt-2 text-[14px] text-ink-500">
                Certified mobile notary supporting purchase, refinance, and seller-side closings.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowNotaryProfile(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f7fc] text-xl text-ink-500 transition-colors hover:bg-[#edf3fe]"
              aria-label="Close notary profile"
            >
              ×
            </button>
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-[18px] bg-[#f8fbff] p-5">
            <div className="h-18 w-18 overflow-hidden rounded-[16px] bg-[linear-gradient(135deg,#7a523f,#d0b38d)]" />
            <div>
              <div className="text-[18px] font-bold text-ink-900">Sarah Jenkins</div>
              <div className="mt-1 text-[14px] text-ink-500">4.9 rating • 124 closings completed</div>
              <div className="mt-1 text-[14px] font-semibold text-[#26b15f]">Available for assignment</div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Detail label="PHONE" value="(555) 012-3456" />
            <Detail label="EMAIL" value="sarah.jenkins@closingengage.com" />
            <Detail label="SERVICE AREA" value="Dallas, Fort Worth, Arlington" />
            <Detail label="SPECIALTY" value="Purchase, Refinance, HELOC" />
          </div>

          <div className="mt-6 rounded-[16px] bg-[#f8fbff] px-5 py-4">
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-400">
              Professional Summary
            </div>
            <div className="mt-3 text-[14px] leading-[1.75] text-ink-500">
              Experienced signing agent with strong borrower communication, same-day scanback accuracy, and consistent performance across high-volume residential closing packages.
            </div>
          </div>

          <div className="mt-7 flex justify-end">
            <Button
              type="button"
              variant="outline"
              className="rounded-[12px] border-[#dfe6f2] px-5 text-[14px] font-semibold text-ink-700"
              onClick={() => setShowNotaryProfile(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    ) : null}
    </>
  );
}

export function CompanyDocumentsPage() {
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-[44px] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink-900">
          Documents
        </h1>
        <p className="mt-2 text-[18px] leading-[1.7] text-ink-500">
          Access and download your approved files
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr] xl:grid-cols-[1.05fr_1.05fr_0.62fr_0.26fr] xl:items-end">
        <div>
          <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-500">
            Filter By Order
          </div>
          <Select options={["All Orders"]} className="h-[48px] rounded-[12px] border-[#dfe6f2] bg-white" />
        </div>
        <div>
          <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-500">
            Filter By Date
          </div>
          <div className="flex h-[48px] items-center justify-between rounded-[12px] border border-[#dfe6f2] bg-white px-4 text-[15px] text-ink-500">
            <span>mm/dd/yyyy</span>
            <CalendarDays className="h-4 w-4 text-ink-400" />
          </div>
        </div>
        <div>
          <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-500">
            File Type
          </div>
          <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-[12px] bg-brand-600 px-4 text-[15px] font-semibold text-white shadow-[0_14px_30px_rgba(24,90,188,0.18)]">
            <FileText className="h-4 w-4" />
            PDF Only
          </button>
        </div>
        <button className="h-[48px] rounded-[12px] bg-[#e9edf3] px-5 text-[15px] font-semibold text-ink-700 transition-colors hover:bg-[#dfe5ee]">
          Clear
        </button>
      </div>

      <Surface className="overflow-hidden rounded-[18px] border border-[#e4ebf5] bg-white shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-300">
                {["File Name", "Order ID", "Uploaded Date", "File Size", "Status", "Actions"].map((header) => (
                  <th key={header} className="px-6 py-4">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {companyDocuments.map((doc) => (
                <tr key={doc.id} className="border-t border-[#edf1f7]">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#fff3f3] text-danger-600">
                        <FileText className="h-4 w-4" />
                      </div>
                      <span className="text-[16px] font-semibold text-ink-900">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-[15px] text-ink-600">{doc.orderId.replace("ORD-", "ORD-")}</td>
                  <td className="px-6 py-5 text-[15px] text-ink-600">{doc.uploadDate}</td>
                  <td className="px-6 py-5 text-[15px] text-ink-600">{doc.size}</td>
                  <td className="px-6 py-5"><Badge status={doc.status} /></td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-5 text-brand-600">
                      <Link to="/company/documents/closing-disclosure-final" aria-label={`View ${doc.name}`}>
                        <Eye className="h-5 w-5" />
                      </Link>
                      <button type="button" aria-label={`Download ${doc.name}`}>
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-[#edf1f7] px-6 py-5 text-sm text-ink-500">
          <span>Showing 4 of 24 documents</span>
          <div className="flex items-center gap-4">
            <button className="text-ink-500">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand-600 font-semibold text-white">1</span>
            <span className="font-medium text-ink-700">2</span>
            <span className="font-medium text-ink-700">3</span>
            <button className="text-ink-500">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Surface>
    </div>
  );
}

export function CompanyDocumentsDetailPage() {
  return (
    <div className="space-y-6">
      <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-8 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <Link to="/company/documents" className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-600">
              <ChevronLeft className="h-4 w-4" />
              Back to Documents
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <h1 className="text-[44px] font-extrabold tracking-[-0.045em] text-ink-900">
                Closing_Disclosure_Final.pdf
              </h1>
              <Badge status="Approved" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-[16px] text-ink-500">
              <FileText className="h-4 w-4" />
              Order ID: ORD-99281-TX
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-[50px] rounded-[12px] border-[#dfe6f2] px-6 text-[15px] font-semibold">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button className="h-[50px] rounded-[12px] px-6 text-[15px] font-semibold">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </Surface>

      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-6 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="flex items-center justify-between text-[15px] text-ink-600">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 font-semibold text-ink-700">
                  <ZoomOut className="h-4 w-4" />
                  100%
                </button>
                <button className="text-ink-500">
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-5">
                <button className="text-ink-500">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-3">
                  <span>Page</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#f4f7fc] font-semibold text-ink-900">1</span>
                  <span>of 5</span>
                </div>
                <button className="text-ink-500">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-6">
                <button className="text-ink-500">
                  <Search className="h-4 w-4" />
                </button>
                <button className="text-ink-500">
                  <RotateCw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Surface>

          <Surface className="rounded-[22px] border border-[#dfe6f2] bg-[#edf2f8] p-10 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="mx-auto min-h-[1180px] max-w-[820px] bg-white px-12 py-12 shadow-[0_18px_38px_rgba(20,48,112,0.08)]">
              <div className="relative overflow-hidden">
                <div className="mb-12 flex justify-between">
                  <div className="h-10 w-40 rounded-[2px] bg-[#edf2f8]" />
                  <div className="space-y-3">
                    <div className="h-4 w-32 rounded-[2px] bg-[#edf2f8]" />
                    <div className="h-4 w-28 rounded-[2px] bg-[#f3f6fb]" />
                  </div>
                </div>
                <div className="h-8 w-[52%] rounded-[2px] bg-[#e7edf6]" />
                <div className="mt-8 space-y-3">
                  <div className="h-3 w-full rounded-[2px] bg-[#eff3f9]" />
                  <div className="h-3 w-full rounded-[2px] bg-[#eff3f9]" />
                  <div className="h-3 w-[84%] rounded-[2px] bg-[#eff3f9]" />
                </div>
                <div className="mt-14 flex gap-8">
                  <div className="h-4 w-24 rounded-[2px] bg-[#e8edf6]" />
                  <div className="h-4 w-24 rounded-[2px] bg-[#e8edf6]" />
                </div>
                <div className="mt-4 grid gap-8 md:grid-cols-2">
                  <div className="h-20 rounded-[4px] border border-dashed border-[#dbe4f1] bg-[#fbfdff]" />
                  <div className="h-20 rounded-[4px] border border-dashed border-[#dbe4f1] bg-[#fbfdff]" />
                </div>
                <div className="mt-14 h-36 rounded-[4px] bg-[#f1f5fa]" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="rotate-[-52deg] text-[112px] font-extrabold tracking-[0.06em] text-[rgba(20,48,112,0.05)]">
                    CONFIDENTIAL
                  </div>
                </div>
              </div>
            </div>
          </Surface>
        </div>

        <div className="space-y-6">
          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-6 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="mb-6 flex items-center gap-3">
              <Info className="h-5 w-5 text-brand-600" />
              <div className="text-[28px] font-extrabold tracking-[-0.03em] text-ink-900">File Details</div>
            </div>
            <div className="space-y-6">
              <Detail label="FILE NAME" value="Closing_Disclosure_Final.pdf" />
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                <Detail label="SIZE" value="2.4 MB" />
                <Detail label="STATUS" value="Approved" valueClassName="text-brand-600" />
              </div>
              <Detail label="UPLOAD DATE" value="Feb 24, 2026" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-400">UPLOADED BY</div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef4ff] text-[11px] font-bold text-brand-600">
                    SJ
                  </div>
                  <div className="text-[16px] font-semibold text-ink-900">Notary Sarah Jones</div>
                </div>
              </div>
            </div>
          </Surface>

          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-6 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="mb-6 flex items-center gap-3">
              <FolderKanban className="h-5 w-5 text-brand-600" />
              <div className="text-[28px] font-extrabold tracking-[-0.03em] text-ink-900">Order Information</div>
            </div>
            <div className="space-y-6">
              <Detail label="CLIENT NAME" value="Robert & Martha Henderson" />
              <Detail label="PROPERTY ADDRESS" value="123 Blue Oak Lane, Austin, TX 78701" />
            </div>
          </Surface>

          <Surface className="rounded-[18px] border border-[#e4ebf5] bg-white p-6 shadow-[0_12px_30px_rgba(20,48,112,0.05)]">
            <div className="mb-6 flex items-center gap-3">
              <RotateCw className="h-5 w-5 text-brand-600" />
              <div className="text-[28px] font-extrabold tracking-[-0.03em] text-ink-900">Recent Activity</div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-brand-600 text-brand-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[16px] font-bold text-ink-900">Approved by Admin</div>
                  <div className="mt-1 text-[13px] text-ink-500">Oct 25, 2023 • 10:15 AM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#d2d8e5] text-ink-400">
                  <FileText className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="text-[16px] font-bold text-ink-900">Uploaded by Notary</div>
                  <div className="mt-1 text-[13px] text-ink-500">Oct 24, 2023 • 04:30 PM</div>
                </div>
              </div>
            </div>
          </Surface>

          <div className="rounded-[18px] border border-[#cfdcf9] bg-[#edf3ff] px-6 py-5 text-[14px] leading-[1.7] text-brand-700 shadow-[0_12px_30px_rgba(20,48,112,0.04)]">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                This document is available only after admin approval. Securely encrypted and stored according to industry standards.
              </div>
            </div>
          </div>
        </div>
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

function Detail({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-400">{label}</div>
      <div className={`mt-2 text-[16px] font-semibold text-ink-900 ${valueClassName ?? ""}`}>{value}</div>
    </div>
  );
}
