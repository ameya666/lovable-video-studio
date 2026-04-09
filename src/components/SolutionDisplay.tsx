import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface SolutionDisplayProps {
  equation: string;
  steps: string[];
  solution: string;
}

const SolutionDisplay = ({ equation, steps, solution }: SolutionDisplayProps) => {
  const [stepsOpen, setStepsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card rounded-xl border p-6 space-y-5"
    >
      <div className="flex items-center gap-2 text-lg font-heading font-semibold text-foreground">
        <CheckCircle2 className="w-5 h-5 text-success" />
        Solution
      </div>

      <div className="bg-secondary rounded-lg p-4">
        <p className="text-xs text-muted-foreground mb-1">Detected equation</p>
        <p className="font-heading text-lg font-semibold text-foreground">{equation}</p>
      </div>

      <div>
        <button
          onClick={() => setStepsOpen(!stepsOpen)}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-3"
        >
          {stepsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          Step-by-step solution
        </button>

        {stepsOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-0 ml-2"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="step-item"
              >
                <p className="text-sm text-foreground">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="bg-accent rounded-lg p-4 border border-primary/20">
        <p className="text-xs text-accent-foreground/70 mb-1">Answer</p>
        <p className="font-heading text-xl font-bold text-primary">{solution}</p>
      </div>
    </motion.div>
  );
};

export default SolutionDisplay;
