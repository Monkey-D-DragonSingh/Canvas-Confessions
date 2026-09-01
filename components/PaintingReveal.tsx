"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Painting } from "@/app/lib/paintings";
import { moodStyles } from "@/app/lib/moodstyles";

const CLOSE_EASE = [0.4, 0, 0.2, 1] as const;
const FADE_DURATION = 0.5;

export default function PaintingReveal({ painting }: { painting: Painting }) {
  const [open, setOpen] = useState(false);
  const mood = moodStyles[painting.mood];

  const textDelay = mood.zoomDuration > mood.vignetteDuration
    ? mood.zoomDuration + mood.stillnessPause
    : mood.vignetteDuration + mood.stillnessPause;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gallery">
      <motion.div
        className="absolute inset-0"
        animate={{ scale: open ? 1.08 : 1 }}
        transition={{
          duration: open ? mood.zoomDuration : FADE_DURATION,
          ease: open ? mood.revealEase : CLOSE_EASE,
        }}
      >
        <Image
          src={painting.image}
          alt={painting.title}
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-gallery/30 via-transparent to-gallery/60 pointer-events-none" />

      <motion.div
        className={`absolute inset-0 pointer-events-none bg-gradient-to-b ${mood.vignetteFrom} ${mood.vignetteVia} ${mood.vignetteTo}`}
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{
          duration: open ? mood.vignetteDuration : FADE_DURATION,
          ease: open ? mood.revealEase : CLOSE_EASE,
        }}
      />

      <motion.div
        className="absolute top-10 left-10"
        animate={{ opacity: open ? 0 : 1, y: open ? -8 : 0 }}
        transition={{ duration: FADE_DURATION, ease: CLOSE_EASE }}
      >
        <p className="font-label text-xs text-brass">
          {painting.artist} · {painting.year}
        </p>
        <h1 className="font-display italic text-3xl md:text-5xl text-ivory mt-2">
          {painting.title}
        </h1>
      </motion.div>

      <motion.button
        onClick={() => setOpen(true)}
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: FADE_DURATION, ease: CLOSE_EASE }}
        style={{ pointerEvents: open ? "none" : "auto" }}
        className="absolute bottom-10 right-10 font-label text-xs text-brass border border-brass/50 px-4 py-2 rounded-full hover:bg-brass/10 transition-colors"
      >
        Confession
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_DURATION, ease: CLOSE_EASE }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 z-20 flex items-center justify-center px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{
                opacity: { duration: mood.textDuration, delay: textDelay, ease: mood.revealEase },
                y: { duration: mood.textDuration, delay: textDelay, ease: mood.revealEase },
              }}
              onClick={(e) => e.stopPropagation()}
              className="confession-scroll max-w-2xl max-h-[75vh] overflow-y-auto text-center px-2"
            >
              <p className="font-display italic text-xl md:text-3xl text-ivory leading-relaxed">
                &ldquo;{painting.excerpt}&rdquo;
              </p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: textDelay + mood.textDuration * 0.6 }}
                onClick={() => setOpen(false)}
                className="mt-10 font-label text-xs text-brass border border-brass/50 px-5 py-2 rounded-full hover:bg-brass/10 transition-colors"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}