import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Loader2, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const TITLE = "Consultant Login | A1 Global Financial Consultant";
const DESCRIPTION =
  "Secure sign-in for A1 Global Financial Consultant team members to manage client loan enquiries.";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: String(form.get("email")),
      password: String(form.get("password")),
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    navigate({ to: "/admin" });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary/40 px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-border/70 bg-card p-8 shadow-lift">
        <div className="flex flex-col items-center text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-accent">
            <ShieldCheck className="size-6 text-primary" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-semibold text-primary">
            Consultant Portal
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to manage client enquiries and leads.
          </p>
        </div>

        <form onSubmit={handleSignIn} className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="si-email">Email</Label>
            <Input id="si-email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="si-password">Password</Label>
            <Input
              id="si-password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>
          <Button type="submit" variant="hero" size="xl" disabled={loading}>
            {loading ? <Loader2 className="size-4 animate-spin" /> : null} Sign in
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Access is limited to authorised A1 Global consultants. Accounts are issued by the
          administrator — public sign-up is disabled.
        </p>
      </div>
    </main>
  );
}