"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Painting } from "@/app/lib/paintings";

export default function PaintingReveal({ painting }: { painting: Painting }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gallery">
      <Image
        src={painting.image}
        alt={painting.title}
        fill
        className="object-contain"
        priority
      />

      {/* Overall darkening vignette, subtle, painting stays clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-gallery/30 via-transparent to-gallery/60 pointer-events-none" />

      {/* Label */}
      <div className="absolute top-10 left-10">
        <p className="font-label text-xs text-brass">
          {painting.artist} · {painting.year}
        </p>
        <h1 className="font-display italic text-3xl md:text-5xl text-ivory mt-2">
          {painting.title}
        </h1>
      </div>

      {/* Small tap-to-reveal button, bottom-right corner */}
      <button
        onClick={() => setOpen(true)}
        className="absolute bottom-10 right-10 font-label text-xs text-brass border border-brass/50 px-4 py-2 rounded-full hover:bg-brass/10 transition-colors"
      >
        Confession
      </button>

      {/* Confession panel, animates up from bottom on tap */}
      {/* Confession overlay, immersive, painting still visible behind */}
{/* Confession overlay, painting fully visible behind, no blur */}
<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      onClick={() => setOpen(false)}
      className="absolute inset-0 z-20 flex items-center justify-center px-8 bg-gallery/55"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="confession-scroll max-w-2xl max-h-[75vh] overflow-y-auto text-center px-2"
      >
        <p className="font-display italic text-xl md:text-3xl text-ivory leading-relaxed">
          &ldquo;{painting.excerpt}&rdquo;
        </p>

        <button
          onClick={() => setOpen(false)}
          className="mt-10 font-label text-xs text-brass border border-brass/50 px-5 py-2 rounded-full hover:bg-brass/10 transition-colors"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}