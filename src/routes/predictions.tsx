import { createFileRoute } from "@tanstack/react-router";
import { Brain } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";

export const Route = createFileRoute("/predictions")({
  component: () => (
    <div className="space-y-6">
      <PageHeader title="AI Predictions" description="Forecast AQI for the next hour, 24 hours, and 7 days using Random Forest, LSTM, XGBoost, or Linear Regression." />
      <div className="grid lg:grid-cols-3 gap-4">
        {["Next hour", "Next 24 hours", "Next 7 days"].map((h) => (
          <div key={h} className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{h}</div>
            <div className="text-4xl font-semibold mt-3 text-muted-foreground/40">—</div>
            <div className="mt-2 text-xs text-muted-foreground">Confidence —</div>
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-2">
        <EmptyState icon={Brain} title="No model trained" description="Connect sensors and accumulate readings, then train a model to begin generating forecasts." />
      </div>
    </div>
  ),
});
