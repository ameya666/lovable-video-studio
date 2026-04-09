import { Calculator } from "lucide-react";

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 border-b bg-card">
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
        <Calculator className="w-5 h-5 text-primary-foreground" />
      </div>
      <span className="font-heading text-xl font-bold tracking-tight text-foreground">SnapCal</span>
    </div>
    <nav className="flex items-center gap-4">
      <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
    </nav>
  </header>
);

export default Header;
