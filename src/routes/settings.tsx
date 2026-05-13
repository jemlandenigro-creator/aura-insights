import { createFileRoute } from "@tanstack/react-router";
import { Settings as SettingsIcon } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";

export const Route = createFileRoute("/settings")({
  component: () => (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Manage thresholds, notification channels, ML models, and account access." />
      <div className="glass rounded-2xl p-2">
        <EmptyState icon={SettingsIcon} title="Sign in to configure" description="Authentication is not yet enabled. Connect Lovable Cloud to manage users, roles, and preferences." />
      </div>
    </div>
  ),
});
