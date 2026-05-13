import { createFileRoute } from "@tanstack/react-router";
import { Wind, Droplets, Thermometer, Cloud, Flame, Atom, Gauge, Activity, LineChart, Plug } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Dashboard · AeroSense" },
      { name: "description", content: "Real-time air quality monitoring and AI-powered predictions." },
    ],
  }),
});

const metrics = [
  { label: "PM2.5", unit: "µg/m³", icon: Cloud },
  { label: "PM10", unit: "µg/m³", icon: Cloud },
  { label: "CO₂", unit: "ppm", icon: Atom },
  { label: "CO", unit: "ppm", icon: Flame },
  { label: "NO₂", unit: "ppb", icon: Wind },
  { label: "SO₂", unit: "ppb", icon: Wind },
  { label: "Temperature", unit: "°C", icon: Thermometer },
  { label: "Humidity", unit: "%", icon: Droplets },
];

function Dashboard() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Air Quality Dashboard"
        description="Live environmental telemetry and AI-driven AQI predictions. Connect a device to begin streaming data."
        actions={
          <>
            <Button variant="outline" size="sm">Last 24h</Button>
            <Button size="sm" className="gradient-hero text-primary-foreground border-0">
              <Plug className="h-4 w-4 mr-1.5" /> Connect device
            </Button>
          </>
        }
      />

      {/* AQI hero */}
      <section className="glass-strong rounded-3xl p-6 lg:p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full gradient-hero opacity-20 blur-3xl" />
        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="md:col-span-1 flex flex-col items-center justify-center text-center py-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Current AQI
            </div>
            <div className="relative h-40 w-40 rounded-full border-8 border-border flex items-center justify-center">
              <Gauge className="absolute inset-0 m-auto h-10 w-10 text-muted-foreground/30" />
            </div>
            <div className="mt-4 text-sm text-muted-foreground">Awaiting data</div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {[
              { label: "Category", v: "—" },
              { label: "Dominant pollutant", v: "—" },
              { label: "Active sensors", v: "0" },
              { label: "Last update", v: "—" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-4">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
                <div className="text-xl font-semibold mt-1.5 text-muted-foreground/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics grid */}
      <section>
        <h2 className="text-sm font-medium text-muted-foreground mb-3">Pollutants & environment</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </section>

      {/* Trend & predictions */}
      <section className="grid lg:grid-cols-2 gap-4">
        <div className="glass rounded-2xl p-2">
          <EmptyState
            icon={LineChart}
            title="Pollution trend"
            description="Historical AQI trends will appear here once your sensors begin reporting."
          />
        </div>
        <div className="glass rounded-2xl p-2">
          <EmptyState
            icon={Activity}
            title="AI prediction forecast"
            description="Forecast for the next hour, 24 hours, and 7 days will appear after enough data is collected."
          />
        </div>
      </section>
    </div>
  );
}
