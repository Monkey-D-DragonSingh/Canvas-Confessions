import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rooms, getRoomPaintings } from "@/app/lib/rooms";
import GalleryGrid from "@/components/GalleryGrid";

type RoomPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((room) => room.slug === slug);
  if (!room) notFound();
  return { title: `${room.title} | Canvas Confessions`, description: room.description };
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = rooms.find((room) => room.slug === slug);
  if (!room) notFound();
  const paintings = getRoomPaintings(room.slug);
  const roomNumber = rooms.findIndex((item) => item.slug === room.slug) + 1;

  return (
    <main className="min-h-dvh bg-gallery text-ivory selection:bg-brass selection:text-gallery">
      <header className="gallery-page-header relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-6 md:py-8">
        <Link href="/" className="font-label text-[10px] sm:text-xs text-brass hover:text-ivory transition-colors">&larr; The main gallery</Link>
      </header>
      <section className="room-heading relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pt-10 md:pt-20 pb-10 md:pb-16" aria-labelledby="room-title">
        <p className="font-label text-[10px] sm:text-xs text-brass tracking-[0.2em] mb-6">Room {String(roomNumber).padStart(2, "0")} / {room.eyebrow}</p>
        <h1 id="room-title" className="font-display italic text-[clamp(2.5rem,6.5vw,8rem)] text-ivory leading-[1.05] max-w-4xl">{room.title}</h1>
        <p className="font-display italic text-xl sm:text-2xl md:text-3xl text-brass mt-5">{room.subtitle}</p>
        <p className="max-w-2xl text-ivory/70 text-base sm:text-lg leading-relaxed mt-6">{room.description}</p>
        <div className="flex items-center gap-4 mt-9">
          <span className="w-10 h-px bg-brass/50" aria-hidden="true" />
          <p className="font-label text-[10px] text-muted">{paintings.length} {paintings.length === 1 ? "confession" : "confessions"} in this room</p>
        </div>
      </section>
      <section aria-label={`${room.title} artworks`} className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-20">
        <div className="border-t border-brass/20 pt-8">
          <GalleryGrid key={room.slug} paintings={paintings.map(({ slug, title, artist, year, image }) => ({ slug, title, artist, year, image }))} />
        </div>
      </section>
      <footer className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pt-8 pb-16 md:pb-28 border-t border-brass/15 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="font-display italic text-xl text-muted">Every room holds another story.</p>
        <Link href="/#rooms" className="font-label text-[10px] text-brass hover:text-ivory">Explore all rooms &rarr;</Link>
      </footer>
    </main>
  );
}
