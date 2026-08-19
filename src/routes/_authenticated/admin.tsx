import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Download,
  Inbox,
  Loader2,
  LogOut,
  Phone,
  RefreshCw,
  Search,
  Trash2,
  MessageCircle,
  Mail,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type LeadStatus = "new" | "contacted" | "in_progress" | "approved" | "rejected" | "closed";

type Lead = {
  id: string;
  name: string;
  mobile: string;
  email: string;
  loan_type: string | null;
  amount: string | null;
  employment: string | null;
  location: string | null;
  message: string | null;
  status: LeadStatus;
  notes: string | null;
  created_at: string;
};

const STATUSES: { value: LeadStatus; label: string }[] = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "in_progress", label: "In Progress" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "closed", label: "Closed" },
];

const STATUS_STYLES: Record<LeadStatus, string> = {
  new: "bg-cyan-accent/15 text-primary border-cyan-accent/40",
  contacted: "bg-accent text-primary border-border",
  in_progress: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  approved: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  rejected: "bg-destructive/10 text-destructive border-destructive/30",
  closed: "bg-muted text-muted-foreground border-border",
};

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Leads Dashboard | A1 Global Financial Consultant" },
      {
        name: "description",
        content: "Internal dashboard for A1 Global consultants to track and manage loan enquiries.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPanel,
});

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function AdminPanel() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | LeadStatus>("all");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [notesDraft, setNotesDraft] = useState("");

  useEffect(() => {
    setNotesDraft(selected?.notes ?? "");
  }, [selected]);

  const { data: leads = [], isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["leads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Lead[];
    },
  });

  const updateLead = useMutation({
    mutationFn: async ({ id, patch }: { id: string; patch: Partial<Lead> }) => {
      const { error } = await supabase.from("leads").update(patch).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
      toast.success("Lead updated");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const deleteLead = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("leads").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
      setSelected(null);
      toast.success("Lead deleted");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
      const matchesTerm =
        !term ||
        [lead.name, lead.email, lead.mobile, lead.loan_type, lead.location]
          .filter(Boolean)
          .some((field) => String(field).toLowerCase().includes(term));
      return matchesStatus && matchesTerm;
    });
  }, [leads, search, statusFilter]);

  const counts = useMemo(() => {
    const base: Record<string, number> = { total: leads.length };
    for (const status of STATUSES) {
      base[status.value] = leads.filter((lead) => lead.status === status.value).length;
    }
    return base;
  }, [leads]);

  const exportCsv = () => {
    const header = [
      "Date",
      "Name",
      "Mobile",
      "Email",
      "Loan Type",
      "Amount",
      "Employment",
      "Location",
      "Status",
      "Message",
      "Notes",
    ];
    const rows = filtered.map((lead) => [
      formatDate(lead.created_at),
      lead.name,
      lead.mobile,
      lead.email,
      lead.loan_type ?? "",
      lead.amount ?? "",
      lead.employment ?? "",
      lead.location ?? "",
      lead.status,
      lead.message ?? "",
      lead.notes ?? "",
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `a1-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    queryClient.clear();
    navigate({ to: "/auth" });
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <h1 className="font-display text-xl font-semibold text-primary sm:text-2xl">
              Leads Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage every enquiry received from the website.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outlineNavy" size="sm" onClick={() => refetch()}>
              <RefreshCw className={cn("size-4", isFetching && "animate-spin")} /> Refresh
            </Button>
            <Button variant="outlineNavy" size="sm" onClick={exportCsv}>
              <Download className="size-4" /> Export
            </Button>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="size-4" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          <StatCard
            label="Total"
            value={counts["total"] ?? 0}
            active={statusFilter === "all"}
            onClick={() => setStatusFilter("all")}
          />
          {STATUSES.map((status) => (
            <StatCard
              key={status.value}
              label={status.label}
              value={counts[status.value] ?? 0}
              active={statusFilter === status.value}
              onClick={() => setStatusFilter(status.value)}
            />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, phone, email, loan type…"
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as typeof statusFilter)}>
            <SelectTrigger className="sm:w-52">
              <SelectValue placeholder="Filter status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUSES.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft">
          {isLoading ? (
            <div className="flex items-center justify-center gap-2 py-20 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" /> Loading leads…
            </div>
          ) : isError ? (
            <div className="px-6 py-16 text-center text-sm text-muted-foreground">
              You don't have access to leads yet. Ask an administrator to grant your account
              consultant access.
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
              <Inbox className="size-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No leads match your filters yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left text-sm">
                <thead className="bg-secondary/60 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3 font-medium">Received</th>
                    <th className="px-5 py-3 font-medium">Name</th>
                    <th className="px-5 py-3 font-medium">Contact</th>
                    <th className="px-5 py-3 font-medium">Loan</th>
                    <th className="px-5 py-3 font-medium">Location</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead) => (
                    <tr
                      key={lead.id}
                      onClick={() => setSelected(lead)}
                      className="cursor-pointer border-t border-border/60 transition-colors hover:bg-secondary/40"
                    >
                      <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">
                        {formatDate(lead.created_at)}
                      </td>
                      <td className="px-5 py-4 font-medium text-primary">{lead.name}</td>
                      <td className="px-5 py-4">
                        <div>{lead.mobile}</div>
                        <div className="text-xs text-muted-foreground">{lead.email}</div>
                      </td>
                      <td className="px-5 py-4">
                        <div>{lead.loan_type ?? "—"}</div>
                        <div className="text-xs text-muted-foreground">{lead.amount ?? ""}</div>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{lead.location ?? "—"}</td>
                      <td className="px-5 py-4">
                        <Badge variant="outline" className={cn("font-medium", STATUS_STYLES[lead.status])}>
                          {STATUSES.find((s) => s.value === lead.status)?.label}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
          {selected ? (
            <>
              <SheetHeader>
                <SheetTitle className="font-display text-xl text-primary">{selected.name}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6 px-4 pb-10">
                <div className="grid grid-cols-2 gap-3">
                  <Button asChild variant="outlineNavy" size="sm">
                    <a href={`tel:${selected.mobile}`}>
                      <Phone className="size-4" /> Call
                    </a>
                  </Button>
                  <Button asChild variant="outlineNavy" size="sm">
                    <a
                      href={`https://wa.me/91${selected.mobile.replace(/\D/g, "").slice(-10)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" /> WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outlineNavy" size="sm" className="col-span-2">
                    <a href={`mailto:${selected.email}`}>
                      <Mail className="size-4" /> {selected.email}
                    </a>
                  </Button>
                </div>

                <dl className="grid gap-3 rounded-xl border border-border/70 bg-secondary/30 p-4 text-sm">
                  <Detail label="Received" value={formatDate(selected.created_at)} />
                  <Detail label="Loan type" value={selected.loan_type} />
                  <Detail label="Amount" value={selected.amount} />
                  <Detail label="Employment" value={selected.employment} />
                  <Detail label="Preferred location" value={selected.location} />
                  <Detail label="Message" value={selected.message} />
                </dl>

                <div className="grid gap-2">
                  <Label>Status</Label>
                  <Select
                    value={selected.status}
                    onValueChange={(value) => {
                      setSelected({ ...selected, status: value as LeadStatus });
                      updateLead.mutate({ id: selected.id, patch: { status: value as LeadStatus } });
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUSES.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Consultant notes</Label>
                  <Textarea
                    id="notes"
                    rows={5}
                    value={notesDraft}
                    onChange={(event) => setNotesDraft(event.target.value)}
                    placeholder="Call summary, documents pending, follow-up date…"
                  />
                  <Button
                    variant="hero"
                    onClick={() =>
                      updateLead.mutate({ id: selected.id, patch: { notes: notesDraft } })
                    }
                    disabled={updateLead.isPending}
                  >
                    Save notes
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className="w-full text-destructive hover:text-destructive"
                  onClick={() => deleteLead.mutate(selected.id)}
                  disabled={deleteLead.isPending}
                >
                  <Trash2 className="size-4" /> Delete lead
                </Button>
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Detail({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="grid grid-cols-[9rem_1fr] gap-2">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-foreground">{value || "—"}</dd>
    </div>
  );
}

function StatCard({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: number;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl border bg-card px-4 py-3 text-left transition-all hover:shadow-soft",
        active ? "border-cyan-accent/60 shadow-soft" : "border-border/70",
      )}
    >
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-2xl font-semibold text-primary">{value}</div>
    </button>
  );
}