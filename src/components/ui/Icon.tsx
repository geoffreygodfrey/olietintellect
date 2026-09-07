import {
  BookOpen,
  Briefcase,
  ClipboardList,
  Compass,
  FileText,
  GraduationCap,
  Layers,
  Lightbulb,
  PieChart,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export type IconName =
  | "compass"
  | "trending"
  | "target"
  | "plan"
  | "rocket"
  | "layers"
  | "project"
  | "publish"
  | "insight"
  | "start"
  | "strengthen"
  | "rebuild"
  | "strategy"
  | "analysis"
  | "publishing"
  | "delivery"
  | "setup"
  | "education"
  | "value-clarity"
  | "value-analysis"
  | "value-craft"
  | "value-integrity"
  | "audience-startup"
  | "audience-sme"
  | "audience-investor"
  | "audience-institution";

const icons: Record<IconName, LucideIcon> = {
  compass: Compass,
  trending: TrendingUp,
  target: Target,
  plan: FileText,
  rocket: Rocket,
  layers: Layers,
  project: ClipboardList,
  publish: BookOpen,
  insight: Lightbulb,
  start: Rocket,
  strengthen: TrendingUp,
  rebuild: Layers,
  strategy: Compass,
  analysis: PieChart,
  publishing: BookOpen,
  delivery: ClipboardList,
  setup: Rocket,
  education: GraduationCap,
  "value-clarity": Compass,
  "value-analysis": PieChart,
  "value-craft": Lightbulb,
  "value-integrity": ShieldCheck,
  "audience-startup": Rocket,
  "audience-sme": Briefcase,
  "audience-investor": TrendingUp,
  "audience-institution": Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name as IconName] ?? Lightbulb;
  return <Cmp className={className} aria-hidden="true" />;
}