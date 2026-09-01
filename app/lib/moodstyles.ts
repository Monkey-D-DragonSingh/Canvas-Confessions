import type { Mood } from "./paintings";

export const moodStyles: Record<Mood, {
  vignetteFrom: string;
  vignetteVia: string;
  vignetteTo: string;
  zoomDuration: number;
  vignetteDuration: number;
  stillnessPause: number;
  textDuration: number;
  revealEase: readonly [number, number, number, number];
}> = {
  dread: {
    vignetteFrom: "from-gallery/80",
    vignetteVia: "via-oxblood/20",
    vignetteTo: "to-gallery/95",
    zoomDuration: 1.1,
    vignetteDuration: 1.3,
    stillnessPause: 0.6,
    textDuration: 1.5,
    revealEase: [0.16, 1, 0.3, 1],
  },
  chaos: {
    vignetteFrom: "from-gallery/70",
    vignetteVia: "via-brass/15",
    vignetteTo: "to-gallery/90",
    zoomDuration: 0.5,
    vignetteDuration: 0.5,
    stillnessPause: 0.2,
    textDuration: 0.6,
    revealEase: [0.34, 1.56, 0.64, 1],
  },
  melancholy: {
    vignetteFrom: "from-gallery/75",
    vignetteVia: "via-muted/10",
    vignetteTo: "to-gallery/95",
    zoomDuration: 1.4,
    vignetteDuration: 1.6,
    stillnessPause: 0.7,
    textDuration: 1.8,
    revealEase: [0.16, 1, 0.3, 1],
  },
  isolation: {
    vignetteFrom: "from-gallery/85",
    vignetteVia: "via-gallery/50",
    vignetteTo: "to-gallery/98",
    zoomDuration: 1.6,
    vignetteDuration: 2.0,
    stillnessPause: 0.9,
    textDuration: 2.0,
    revealEase: [0.16, 1, 0.3, 1],
  },
  longing: {
    vignetteFrom: "from-gallery/70",
    vignetteVia: "via-brass/10",
    vignetteTo: "to-gallery/90",
    zoomDuration: 1.2,
    vignetteDuration: 1.4,
    stillnessPause: 0.5,
    textDuration: 1.4,
    revealEase: [0.16, 1, 0.3, 1],
  },
  madness: {
    vignetteFrom: "from-gallery/80",
    vignetteVia: "via-oxblood/25",
    vignetteTo: "to-gallery/95",
    zoomDuration: 0.7,
    vignetteDuration: 0.8,
    stillnessPause: 0.3,
    textDuration: 0.9,
    revealEase: [0.34, 1.56, 0.64, 1],
  },
};