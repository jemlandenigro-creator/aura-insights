import { createFileRoute } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";

export const Route = createFileRoute("/alerts")({
  component: () => (
    <div className="space-y-6">
      <PageHeader title="Alerts" description="Notifications triggered when pollutant thresholds are exceeded." />
      <div className="glass rounded-2xl p-2">
        <EmptyState icon={Bell} title="All clear" description="No alerts have been triggered. Configure thresholds in Settings to enable notifications." />
      </div>
    </div>
  ),
});
