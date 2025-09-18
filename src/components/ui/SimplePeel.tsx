"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SimplePeelProps = {
  children: React.ReactNode;
  scrapbookContent: React.ReactNode;
};

export default function SimplePeel({ children, scrapbookContent }: SimplePeelProps) {
  const [showScrapbook, setShowScrapbook] = useState(false);
  const [isPeeling, setIsPeeling] = useState(false);

  const handlePeelStart = () => {
    setIsPeeling(true);
    // Start transition after animation
    setTimeout(() => {
      setShowScrapbook(true);
      setIsPeeling(false);
    }, 600);
  };

  const handleBackToPortfolio = () => {
    setShowScrapbook(false);
  };

  // Simple conditional rendering - no portals, no complex state
  if (showScrapbook) {
    return (
      <div className="min-h-screen">
        {scrapbookContent}
        <motion.button
          className="fixed top-6 right-6 z-50 bg-black/80 dark:bg-white/80 text-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-black/90 dark:hover:bg-white/90 transition-colors shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={handleBackToPortfolio}
        >
          ← Back to Portfolio
        </motion.button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background preview when peeling */}
      <AnimatePresence>
        {isPeeling && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with peel animation */}
      <motion.div
        className="relative z-10 bg-bg min-h-screen"
        animate={{
          rotateY: isPeeling ? -15 : 0,
          rotateZ: isPeeling ? -5 : 0,
          scale: isPeeling ? 0.95 : 1,
          x: isPeeling ? 100 : 0,
          y: isPeeling ? -50 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformOrigin: "bottom left",
          transformStyle: "preserve-3d",
          boxShadow: isPeeling ? "20px 20px 60px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {children}
        
        {/* Peel shadow effect */}
        <AnimatePresence>
          {isPeeling && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Trigger button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 bg-black/80 dark:bg-white/80 text-white dark:text-black px-4 py-3 rounded-full text-sm font-medium hover:bg-black/90 dark:hover:bg-white/90 transition-all shadow-lg backdrop-blur-sm flex items-center gap-2 group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        onClick={handlePeelStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Pull the corner</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="group-hover:rotate-12 transition-transform"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
}
