import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";

export const Route = createFileRoute("/monitoring")({
  component: () => (
    <div className="space-y-6">
      <PageHeader title="Live Monitoring" description="Real-time stream of pollutant readings from connected sensors." />
      <div className="glass rounded-2xl p-2">
        <EmptyState icon={Activity} title="No live stream" description="Once a device is connected via MQTT or REST, real-time charts will render here." actionLabel="Connect device" />
      </div>
    </div>
  ),
});
