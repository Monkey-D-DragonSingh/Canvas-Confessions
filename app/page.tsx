import { paintings } from "@/app/lib/paintings";
import GalleryGrid from "@/components/GalleryGrid";
import { rooms, getRoomPaintings } from "@/app/lib/rooms";
import Link from "next/link";
import Image from "next/image";

export default function GalleryHomePage() {
  const featuredPainting = paintings[0];
  const roomDirectory = rooms.map((room) => {
    const collection = getRoomPaintings(room.slug);
    return { ...room, count: collection.length, preview: collection[0] };
  });

  return (
    <main className="min-h-screen bg-gallery text-ivory flex flex-col justify-between selection:bg-brass selection:text-gallery overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brass/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-oxblood/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation Bar */}
      <header className="gallery-page-header relative z-20 flex flex-wrap items-center justify-between gap-3 px-6 md:px-12 py-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-brass animate-pulse" />
          <span className="font-label text-xs tracking-widest text-brass uppercase">
            Exhibition 01 · Immortal Voices
          </span>
        </div>
        <span className="font-label text-xs tracking-widest text-muted uppercase">
          {paintings.length} {paintings.length === 1 ? "Confession" : "Confessions"} Uncovered
        </span>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 pt-8 pb-16 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-6">
          <p className="font-label text-xs md:text-sm text-brass tracking-[0.2em] uppercase">
            An Interactive Gallery Experience
          </p>
          <h1 className="font-display italic text-5xl md:text-8xl text-ivory leading-[0.95]">
            Canvas <br />
            <span className="text-brass">Confessions</span>
          </h1>
          <p className="text-lg md:text-2xl font-body text-ivory/80 font-light max-w-2xl leading-relaxed">
            Behind every layer of oil and pigment lies a secret frozen in time.
            Step into the darkness and let the paintings speak for themselves.
          </p>
        </div>
      </section>

      {/* Featured Artwork Hero Showcase */}
      {featuredPainting && (
        <section className="relative z-10 px-6 md:px-12 py-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between border-b border-brass/20 pb-4 mb-8">
            <h2 className="font-label text-xs tracking-[0.2em] text-brass uppercase">
              Featured Exhibition
            </h2>
            <span className="font-label text-xs text-muted">
              Select artwork to uncover confession
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface/40 border border-brass/20 rounded-sm p-6 md:p-10 backdrop-blur-sm">
            {/* Image Preview Column */}
            <div className="lg:col-span-5 relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-brass/20 group">
              <Image
                src={featuredPainting.image}
                alt={featuredPainting.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gallery via-transparent to-transparent" />
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div>
                <span className="font-label text-xs text-brass tracking-widest uppercase">
                  {featuredPainting.artist} · {featuredPainting.year}
                </span>
                <h3 className="font-display italic text-4xl md:text-6xl text-ivory mt-2">
                  {featuredPainting.title}
                </h3>
              </div>

              <div className="pt-4">
                <Link
                  href={`/paintings/${featuredPainting.slug}`}
                  className="inline-flex items-center gap-4 px-8 py-4 bg-brass text-gallery font-label text-xs tracking-widest uppercase rounded-full font-bold hover:bg-ivory transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-brass/10"
                >
                  <span>Uncover Confession</span>
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="rooms" aria-labelledby="rooms-title" className="relative z-10 px-6 md:px-12 py-16 max-w-7xl mx-auto w-full scroll-mt-8">
        <div className="border-t border-brass/20 pt-8 mb-9 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div>
            <p className="font-label text-[10px] text-brass mb-4">The room directory / 01&ndash;10</p>
            <h2 id="rooms-title" className="font-display italic text-4xl md:text-5xl">Follow what haunts you.</h2>
          </div>
          <p className="text-sm text-ivory/60 max-w-xs leading-relaxed">Gods, desires, and the things we leave unsaid. Find a room that speaks to you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {roomDirectory.filter((room) => ["sins", "norse", "indian"].includes(room.slug)).map((room) => (
            <Link key={room.slug} href={`/rooms/${room.slug}`} className="room-preview group relative overflow-hidden min-h-80 border border-brass/20 bg-surface">
              {room.preview && <Image src={room.preview.image} alt={room.preview.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />}
              <div className="absolute inset-0 bg-gradient-to-t from-gallery via-gallery/35 to-transparent" />
              <div className="relative z-10 p-7 flex flex-col justify-between h-full min-h-80">
                <span className="font-label text-[10px] text-ivory/85">{room.count} {room.count === 1 ? "artwork" : "artworks"}</span>
                <div>
                  <p className="font-label text-[10px] text-brass mb-3">{room.eyebrow}</p>
                  <h3 className="font-display italic text-4xl text-ivory">{room.title}</h3>
                  <p className="text-sm text-ivory/70 mt-2">{room.subtitle}</p>
                  <span className="font-label text-[10px] text-brass inline-block mt-6">Enter room <span aria-hidden="true">&rarr;</span></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-7">
          {roomDirectory.filter((room) => !["sins", "norse", "indian"].includes(room.slug)).map((room) => (
            <Link key={room.slug} href={`/rooms/${room.slug}`} className="room-directory-link flex items-center justify-between gap-4 py-5 border-b border-brass/15">
              <span className="font-display text-xl">{room.title}</span>
              <span className="font-label text-[10px] text-brass whitespace-nowrap">{room.count} <span className="sr-only">artworks</span><span aria-hidden="true" className="ml-3">&rarr;</span></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section id="gallery" className="relative z-10 px-6 md:px-12 py-16 max-w-7xl mx-auto w-full">
        <div className="border-b border-brass/20 pb-4 mb-10">
          <h2 className="font-label text-xs tracking-[0.2em] text-brass uppercase">
            All Masterpieces
          </h2>
        </div>

        <GalleryGrid paintings={paintings.map(({ slug, title, artist, year, image }) => ({ slug, title, artist, year, image }))} />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-brass/10 px-6 md:px-12 py-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-xs font-label text-muted gap-4">
        <p>© Canvas Confessions · An Immersive Art Gallery</p>
        <p className="italic font-display text-brass">
          &ldquo;Art is the lie that enables us to realize the truth.&rdquo; — Pablo Picasso
        </p>
      </footer>
    </main>
  );
}
