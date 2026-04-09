import { useCallback, useState, useRef } from "react";
import { ImagePlus, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface UploadZoneProps {
  onSolve: (file: File) => void;
  isLoading: boolean;
}

const UploadZone = ({ onSolve, isLoading }: UploadZoneProps) => {
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(f);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  }, [handleFile]);

  const clear = () => { setFile(null); setPreview(null); };

  return (
    <div className="space-y-4">
      <div
        className={`upload-zone ${dragging ? "dragging" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => !preview && inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/gif"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
        />
        <AnimatePresence mode="wait">
          {preview ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative inline-block"
            >
              <img src={preview} alt="Equation" className="max-h-48 rounded-lg mx-auto" />
              <button
                onClick={(e) => { e.stopPropagation(); clear(); }}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ) : (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-6">
              <ImagePlus className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
              <p className="text-muted-foreground">
                Drag & drop or <span className="text-primary font-medium cursor-pointer">click</span> to upload an equation image
              </p>
              <p className="text-xs text-muted-foreground mt-2">PNG, JPG, JPEG, GIF</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {file && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <Button
            className="w-full gap-2"
            size="lg"
            onClick={() => onSolve(file)}
            disabled={isLoading}
          >
            <Upload className="w-4 h-4" />
            {isLoading ? "Solving…" : "Upload & Solve"}
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default UploadZone;
