import { createFileRoute } from "@tanstack/react-router";
import { Map as MapIcon } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";

export const Route = createFileRoute("/map")({
  component: () => (
    <div className="space-y-6">
      <PageHeader title="Map" description="Geo-distributed AQI heatmap and pollution hotspots." />
      <div className="glass rounded-2xl p-2 min-h-[420px] flex items-center justify-center">
        <EmptyState icon={MapIcon} title="Map unavailable" description="Add a mapping provider key and register location-tagged devices to populate the heatmap." />
      </div>
    </div>
  ),
});
