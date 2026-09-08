"use client";

import { useId, useRef, useState } from "react";
import type { Painting } from "@/app/lib/paintings";
import PaintingCard from "@/components/PaintingCard";

type GalleryPainting = Pick<Painting, "slug" | "title" | "artist" | "year" | "image">;

export default function GalleryGrid({ paintings }: { paintings: GalleryPainting[] }) {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(24);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchId = useId();
  const gridId = useId();
  const search = query.trim().toLocaleLowerCase();
  const filtered = paintings.filter((painting) =>
    `${painting.title} ${painting.artist}`.toLocaleLowerCase().includes(search),
  );
  const visible = filtered.slice(0, visibleCount);

  function clearSearch() {
    setQuery("");
    setVisibleCount(24);
    inputRef.current?.focus();
  }

  return (
    <div className="gallery-browser">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
        <div className="w-full sm:max-w-md">
          <label htmlFor={searchId} className="font-label text-[10px] text-brass block mb-3">Find a painting</label>
          <div className="gallery-search">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 shrink-0"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
            <input
              ref={inputRef}
              id={searchId}
              type="search"
              value={query}
              placeholder="Search by title or artist"
              autoComplete="off"
              aria-controls={gridId}
              onChange={(event) => { setQuery(event.target.value); setVisibleCount(24); }}
            />
            {query && <button type="button" className="font-label text-[10px] text-brass p-2" onClick={clearSearch}>Clear</button>}
          </div>
        </div>
        <p role="status" aria-live="polite" aria-atomic="true" className="font-label text-[10px] text-muted sm:pb-4">
          Showing {visible.length} of {filtered.length} {filtered.length === 1 ? "artwork" : "artworks"}
        </p>
      </div>
      <div id={gridId}>
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visible.map((painting) => (
              <PaintingCard key={painting.slug} painting={painting} />
            ))}
          </div>
        ) : (
          <div className="gallery-empty text-center px-6 py-16 sm:py-24">
            <p className="font-label text-[10px] text-brass mb-4">A quiet corner</p>
            <h3 className="font-display italic text-3xl sm:text-4xl">{search ? "No paintings found." : "The walls are waiting."}</h3>
            <p className="text-sm text-ivory/65 mt-4">{search ? "Try another title or artist, or return to the full collection." : "New confessions will find their place here soon."}</p>
            {query && <button type="button" className="gallery-outline-button mt-7" onClick={clearSearch}>Clear search</button>}
          </div>
        )}
      </div>
      {visible.length < filtered.length && (
        <div className="text-center mt-12">
          <button type="button" className="gallery-outline-button" aria-controls={gridId} onClick={() => setVisibleCount((count) => count + 24)}>
            Load more <span className="text-muted">+{Math.min(24, filtered.length - visible.length)}</span>
          </button>
          <p className="font-display italic text-muted mt-4">There is more beneath the surface.</p>
        </div>
      )}
    </div>
  );
}
