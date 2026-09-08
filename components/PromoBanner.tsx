"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay showing the banner slightly
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-32 md:bottom-8 inset-x-4 md:inset-x-auto md:left-8 z-[998] pointer-events-none"
        >
          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl rounded-2xl p-4 sm:p-5 pointer-events-auto max-w-sm flex flex-col gap-3 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-foreground transition-colors p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              aria-label="Close promo"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-2.5 rounded-xl shrink-0">
                <BookOpen className="size-5" />
              </div>
              <div className="flex-1 pr-6">
                <h3 className="font-semibold text-sm text-foreground">Quran Studio v2.0</h3>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Experience our new Quran web app. Read, listen, and learn for free!
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-1">
              <Link 
                href="https://quranstudio.4track.my.id" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                Launch Now
                <ExternalLink className="size-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
