import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";

export const Route = createFileRoute("/insights")({
  component: () => (
    <div className="space-y-6">
      <PageHeader title="AI Insights" description="Plain-language explanations of pollution patterns, anomalies, and health recommendations." />
      <div className="glass rounded-2xl p-2">
        <EmptyState icon={Sparkles} title="No insights yet" description="Insights are generated automatically once enough air quality data has been collected." />
      </div>
    </div>
  ),
});
