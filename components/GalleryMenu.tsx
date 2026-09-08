"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type MenuRoom = { slug: string; title: string; count: number };

export default function GalleryMenu({ rooms, total }: { rooms: MenuRoom[]; total: number }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="gallery-menu-trigger font-label"
        aria-label="Open gallery menu"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="gallery-menu"
        onClick={() => setIsOpen(true)}
      >
        <span className="gallery-menu-icon" aria-hidden="true"><span /><span /></span>
        <span>Menu</span>
      </button>
      <dialog
        ref={dialogRef}
        id="gallery-menu"
        className="gallery-menu-dialog"
        aria-labelledby="gallery-menu-title"
        data-lenis-prevent="true"
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}
      >
        <div className="gallery-menu-panel confession-scroll" data-lenis-prevent="true">
          <div className="flex items-center justify-between gap-4">
            <p className="font-label text-[10px] text-brass">Canvas Confessions</p>
            <button type="button" className="gallery-menu-close font-label" onClick={() => setIsOpen(false)} aria-label="Close gallery menu">
              Close <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="py-8 sm:py-10">
            <p className="font-label text-[10px] text-muted mb-3">The exhibition guide</p>
            <h2 id="gallery-menu-title" className="font-display italic text-4xl sm:text-5xl text-ivory">Choose your room.</h2>
            <p className="mt-3 text-sm text-ivory/65">Ten rooms. A thousand ways to feel.</p>
          </div>
          <nav aria-label="Gallery navigation">
            <Link href="/" className="gallery-menu-link gallery-menu-home" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setIsOpen(false)}>
              <span className="font-display italic text-2xl">The main gallery</span>
              <span className="gallery-menu-count font-label">{total}<span className="sr-only"> artworks</span></span>
            </Link>
            <p className="font-label text-[10px] text-muted mt-7 mb-3">Explore the rooms</p>
            <ol className="gallery-menu-rooms">
              {rooms.map((room, index) => (
                <li key={room.slug}>
                  <Link href={`/rooms/${room.slug}`} className="gallery-menu-link" aria-current={pathname === `/rooms/${room.slug}` ? "page" : undefined} onClick={() => setIsOpen(false)}>
                    <span aria-hidden="true" className="font-label text-[10px] text-muted">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-display text-xl sm:text-2xl">{room.title}</span>
                    <span className="gallery-menu-count font-label">{room.count}<span className="sr-only"> artworks</span></span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <p className="font-display italic text-brass/80 text-lg mt-8">Stay a little. Look a little closer.</p>
        </div>
      </dialog>
    </>
  );
}
