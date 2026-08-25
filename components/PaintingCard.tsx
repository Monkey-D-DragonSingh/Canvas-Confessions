"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import type { Painting } from "@/app/lib/paintings";

export default function PaintingCard({ painting }: { painting: Painting }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--spot-x", `${x}px`);
    card.style.setProperty("--spot-y", `${y}px`);
  };

  return (
    <Link href={`/paintings/${painting.slug}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative overflow-hidden rounded-sm bg-surface aspect-[3/4] transition-transform duration-500 hover:scale-[1.02]"
      >
        <Image
          src={painting.image}
          alt={painting.title}
          fill
          className="object-cover opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
        />

        {/* brass spotlight that follows the cursor */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle 220px at var(--spot-x) var(--spot-y), rgba(184,147,90,0.25), transparent 70%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gallery/90 to-transparent">
          <p className="font-label text-xs text-brass">
            {painting.artist} · {painting.year}
          </p>
          <h3 className="font-display italic text-xl text-ivory mt-1">
            {painting.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}