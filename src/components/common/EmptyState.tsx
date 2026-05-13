import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-hero glow mb-5">
        <Icon className="h-7 w-7 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight mb-1.5">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-md mb-5">{description}</p>
      {actionLabel && (
        <Button onClick={onAction} className="gradient-hero text-primary-foreground border-0">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
