import { Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Activity,
  Brain,
  Sparkles,
  Radio,
  Bell,
  BarChart3,
  Map,
  Settings,
  Wind,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/monitoring", label: "Live Monitoring", icon: Activity },
  { to: "/predictions", label: "AI Predictions", icon: Brain },
  { to: "/insights", label: "AI Insights", icon: Sparkles },
  { to: "/devices", label: "Devices", icon: Radio },
  { to: "/alerts", label: "Alerts", icon: Bell },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/map", label: "Map", icon: Map },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function AppShell() {
  const location = useLocation();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden lg:flex w-64 flex-col glass-strong border-r border-sidebar-border sticky top-0 h-screen">
        <div className="flex items-center gap-2 px-6 py-5 border-b border-sidebar-border">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-hero glow">
            <Wind className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <div className="font-semibold tracking-tight">AeroSense</div>
            <div className="text-xs text-muted-foreground">AI Air Quality</div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {nav.map((item) => {
            const active =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-4 py-4 border-t border-sidebar-border text-xs text-muted-foreground">
          v0.1 · No data sources connected
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-20 glass border-b border-border px-4 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="lg:hidden flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
              <Wind className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-sm font-medium text-muted-foreground">
                AeroSense Platform
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </div>
        </header>

        <main className="flex-1 px-4 lg:px-8 py-6 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
