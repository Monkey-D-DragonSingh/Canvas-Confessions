"use client";

import { useRef, useState } from "react";

const LOOP_END_SECONDS = 50;
const BASE_VOLUME = 0.4;
const FADE_SECONDS = 3; // how long the fade in/out lasts

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const timeRemaining = LOOP_END_SECONDS - audio.currentTime;

    if (timeRemaining <= 0) {
      // Loop point reached — jump back and start silent, ready to fade in
      audio.currentTime = 0;
      audio.volume = 0;
      return;
    }

    // Fade in during the first FADE_SECONDS of playback
    const fadeInRatio = Math.min(audio.currentTime / FADE_SECONDS, 1);
    // Fade out during the last FADE_SECONDS before the loop point
    const fadeOutRatio = Math.min(timeRemaining / FADE_SECONDS, 1);

    audio.volume = BASE_VOLUME * Math.min(fadeInRatio, fadeOutRatio);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.volume = 0; // start silent, handleTimeUpdate will fade it in
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
        <source src="/music/why.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-50 font-label text-xs text-brass border border-brass/40 px-4 py-2 rounded-full hover:bg-brass/10 transition-colors backdrop-blur-sm bg-gallery/40"
      >
        {playing ? "Ⅱ Pause" : "♪ Sound"}
      </button>
    </>
  );
}
