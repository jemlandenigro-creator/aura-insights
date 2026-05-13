import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  label: string;
  unit: string;
  icon: LucideIcon;
}

export function MetricCard({ label, unit, icon: Icon }: MetricCardProps) {
  return (
    <div className="glass rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {label}
          </div>
          <div className="text-[11px] text-muted-foreground/70 mt-0.5">{unit}</div>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight text-muted-foreground/40">—</span>
      </div>
      <div className="mt-3 text-[11px] text-muted-foreground/70">No sensor connected</div>
    </div>
  );
}
