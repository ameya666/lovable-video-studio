import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { title: "Solving Quadratic Equations", subject: "Algebra", duration: "4:32", color: "from-blue-600 to-indigo-700" },
  { title: "Integration by Parts", subject: "Calculus", duration: "6:15", color: "from-emerald-600 to-teal-700" },
  { title: "Matrix Multiplication", subject: "Linear Algebra", duration: "5:48", color: "from-amber-600 to-orange-700" },
  { title: "Trigonometric Identities", subject: "Trigonometry", duration: "3:55", color: "from-rose-600 to-pink-700" },
  { title: "Differential Equations Intro", subject: "Calculus", duration: "7:20", color: "from-violet-600 to-purple-700" },
  { title: "Probability Distributions", subject: "Statistics", duration: "5:10", color: "from-cyan-600 to-sky-700" },
];

const VideoGallery = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
      <h1 className="font-heading text-3xl font-bold text-foreground">Video Gallery</h1>
      <p className="text-muted-foreground">Watch AI-generated explainer videos on STEM concepts.</p>
    </motion.div>

    <div className="grid sm:grid-cols-2 gap-4">
      {videos.map((v, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07 }}
          className="group bg-card border rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className={`relative aspect-video bg-gradient-to-br ${v.color} flex items-center justify-center`}>
            <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
            </div>
            <span className="absolute bottom-2 right-2 text-xs bg-background/30 backdrop-blur text-primary-foreground px-2 py-0.5 rounded">
              {v.duration}
            </span>
          </div>
          <div className="p-3">
            <p className="font-medium text-sm text-foreground">{v.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{v.subject}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default VideoGallery;
