import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/analytics")({
  component: () => (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Daily, weekly, and monthly pollution analytics and exportable reports."
        actions={
          <>
            <Button variant="outline" size="sm">Export CSV</Button>
            <Button variant="outline" size="sm">Export PDF</Button>
          </>
        }
      />
      <div className="glass rounded-2xl p-2">
        <EmptyState icon={BarChart3} title="No analytics available" description="Reports and trend comparisons will appear after readings are collected." />
      </div>
    </div>
  ),
});
