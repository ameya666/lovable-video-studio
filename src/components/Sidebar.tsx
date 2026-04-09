import { Calculator, Video, ClipboardList } from "lucide-react";

type Tab = "solve" | "videos" | "practice";

interface SidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "solve", label: "Equation Solver", icon: Calculator },
  { id: "videos", label: "Video Gallery", icon: Video },
  { id: "practice", label: "Practice Tests", icon: ClipboardList },
];

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => (
  <aside className="w-60 border-r bg-card flex flex-col shrink-0 hidden md:flex">
    <div className="px-5 py-4 border-b">
      <span className="font-heading text-lg font-bold tracking-tight text-foreground">MetronAI</span>
    </div>
    <nav className="flex-1 p-3 space-y-1">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onTabChange(t.id)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            activeTab === t.id
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          }`}
        >
          <t.icon className="w-4 h-4" />
          {t.label}
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
