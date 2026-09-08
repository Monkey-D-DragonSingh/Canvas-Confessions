import { paintings, type Painting } from "./paintings";

type Theme = NonNullable<Painting["rooms"]>[number];
type Room = {
  slug: Theme | "norse" | "indian";
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
};

export const rooms: Room[] = [
  { slug: "sins", title: "Room of Sins", eyebrow: "Temptation & consequence", subtitle: "Nothing stays buried forever.", description: "Pride, betrayal, greed, and cruelty leave their marks. These works depict wrongdoing, temptation, or its consequences, rather than darkness alone. Historical moral allegories reflect their own time, not a judgment on the viewer." },
  { slug: "norse", title: "The Norse Hall", eyebrow: "Norse mythology", subtitle: "Even the gods know how it ends.", description: "Fifty historical paintings, engravings, and book illustrations enter the worlds of Odin, Thor, Loki, and the Norns. From Yggdrasil to Ragnarok, wisdom has a price and fate remembers every promise." },
  { slug: "indian", title: "The Indian Sanctum", eyebrow: "Indian mythology", subtitle: "The infinite, held in a frame.", description: "Fifty Indian paintings and manuscript miniatures explore Krishna, Radha, Shiva, Parvati, Rama, and other sacred stories. Devotion, separation, protection, and wonder meet in scenes drawn from living traditions." },
  { slug: "death", title: "Room of Mortality", eyebrow: "Death & remembrance", subtitle: "What remains when someone leaves?", description: "Final breaths, mourning figures, and reminders of passing time. These paintings stay with the fragile boundary between a life and the memory it leaves behind." },
  { slug: "war", title: "Room of Conflict", eyebrow: "Battle & sacrifice", subtitle: "No victory comes home untouched.", description: "Mythic battles and human violence share these walls. Look past triumph toward the weight of survival, resistance, and the lives caught between opposing powers." },
  { slug: "longing", title: "Room of Longing", eyebrow: "Love & absence", subtitle: "Close enough to remember. Too far to hold.", description: "Unanswered love, devotion, separation, and tenderness. A reaching hand or an empty place can carry more feeling than an entire crowded room." },
  { slug: "solitude", title: "Room of Solitude", eyebrow: "Silence & isolation", subtitle: "Some silences have a voice.", description: "Lonely interiors, distant figures, and landscapes without an answer. Enter the difference between being alone and feeling unseen." },
  { slug: "nightmares", title: "Room of Nightmares", eyebrow: "Fear & the uncanny", subtitle: "Keep one eye open.", description: "Unsettling visitors, impossible creatures, and scenes poised at the edge of terror. Here the familiar becomes strange, but strangeness is not itself a sin." },
  { slug: "divine", title: "Room of the Divine", eyebrow: "Faith & mythology", subtitle: "Between a prayer and an answer.", description: "Sacred figures, divine encounters, and mythological worlds across traditions. These works ask what happens when ordinary lives meet something larger than themselves." },
  { slug: "dreams", title: "Room of Visions", eyebrow: "Symbol & imagination", subtitle: "Not everything seen belongs to waking life.", description: "Allegories, prophecies, and imagined worlds. Follow the symbols without expecting a single explanation; some images are made to keep their secrets." },
];

export function getRoomPaintings(slug: string): Painting[] {
  if (slug === "norse" || slug === "indian") {
    return paintings.filter((painting) => painting.collection === slug);
  }
  return paintings.filter((painting) => painting.rooms?.some((theme) => theme === slug));
}
