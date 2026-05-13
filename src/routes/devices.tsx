import { createFileRoute } from "@tanstack/react-router";
import { Radio } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/devices")({
  component: () => (
    <div className="space-y-6">
      <PageHeader
        title="Devices"
        description="Manage ESP32, Arduino, Raspberry Pi, and other IoT sensors."
        actions={<Button size="sm" className="gradient-hero text-primary-foreground border-0">Add device</Button>}
      />
      <div className="glass rounded-2xl p-2">
        <EmptyState icon={Radio} title="No devices registered" description="Register your first sensor to start collecting environmental data." actionLabel="Register a device" />
      </div>
    </div>
  ),
});
