import { motion } from "framer-motion";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tests = [
  { title: "Algebra Basics", questions: 15, time: "20 min", difficulty: "Easy", completed: true },
  { title: "Quadratic Equations", questions: 10, time: "15 min", difficulty: "Medium", completed: false },
  { title: "Calculus Fundamentals", questions: 12, time: "25 min", difficulty: "Medium", completed: false },
  { title: "Linear Algebra", questions: 8, time: "20 min", difficulty: "Hard", completed: false },
  { title: "Trigonometry", questions: 10, time: "15 min", difficulty: "Easy", completed: true },
  { title: "Differential Equations", questions: 10, time: "30 min", difficulty: "Hard", completed: false },
];

const difficultyColor: Record<string, string> = {
  Easy: "bg-success/10 text-success",
  Medium: "bg-amber-500/10 text-amber-600",
  Hard: "bg-destructive/10 text-destructive",
};

const PracticeTests = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
      <h1 className="font-heading text-3xl font-bold text-foreground">Practice Tests</h1>
      <p className="text-muted-foreground">Sharpen your math skills with curated quizzes.</p>
    </motion.div>

    <div className="space-y-3">
      {tests.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          className="bg-card border rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-medium text-foreground">{t.title}</p>
              {t.completed && <CheckCircle2 className="w-4 h-4 text-success shrink-0" />}
            </div>
            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
              <span>{t.questions} questions</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{t.time}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${difficultyColor[t.difficulty]}`}>{t.difficulty}</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="shrink-0 gap-1">
            {t.completed ? "Retake" : "Start"} <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </motion.div>
      ))}
    </div>
  </div>
);

export default PracticeTests;
