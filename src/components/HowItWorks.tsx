import { Camera, Cpu, ListChecks } from "lucide-react";

const steps = [
  { icon: Camera, title: "Upload", desc: "Take a photo or upload an image of any equation — even handwritten." },
  { icon: Cpu, title: "Analyze", desc: "AI vision reads and interprets the mathematical notation instantly." },
  { icon: ListChecks, title: "Solve", desc: "Get the step-by-step solution with a clear final answer." },
];

const HowItWorks = () => (
  <section id="how" className="py-16">
    <h2 className="font-heading text-2xl font-bold text-center text-foreground mb-10">How it works</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((s, i) => (
        <div key={i} className="bg-card border rounded-xl p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-accent mx-auto flex items-center justify-center">
            <s.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
          <p className="text-sm text-muted-foreground">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
