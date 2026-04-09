import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import UploadZone from "@/components/UploadZone";
import SolutionDisplay from "@/components/SolutionDisplay";
import HowItWorks from "@/components/HowItWorks";
import VideoGallery from "@/components/VideoGallery";
import PracticeTests from "@/components/PracticeTests";
import { motion } from "framer-motion";

const mockSolve = (): Promise<{ equation: string; steps: string[]; solution: string }> =>
  new Promise((resolve) =>
    setTimeout(() => resolve({
      equation: "2x + 5 = 15",
      steps: [
        "Step 1: Start with 2x + 5 = 15",
        "Step 2: Subtract 5 from both sides → 2x = 10",
        "Step 3: Divide both sides by 2 → x = 5",
      ],
      solution: "x = 5",
    }), 2000)
  );

type Tab = "solve" | "videos" | "practice";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ equation: string; steps: string[]; solution: string } | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("solve");

  const handleSolve = async (_file: File) => {
    setLoading(true);
    setResult(null);
    try {
      const data = await mockSolve();
      setResult(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-12 space-y-8">
          {activeTab === "solve" && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-3"
              >
                <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  Solve equations from a photo
                </h1>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Upload an image of any math equation — handwritten or typed — and get a step-by-step solution instantly.
                </p>
              </motion.div>

              <UploadZone onSolve={handleSolve} isLoading={loading} />

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-3 py-8"
                >
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm text-muted-foreground">Analyzing equation…</p>
                </motion.div>
              )}

              {result && <SolutionDisplay {...result} />}

              <HowItWorks />
            </>
          )}

          {activeTab === "videos" && <VideoGallery />}
          {activeTab === "practice" && <PracticeTests />}
        </main>
      </div>
    </div>
  );
};

export default Index;
