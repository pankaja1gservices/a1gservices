import { useEffect, useRef, useState } from "react";
import consultingAsset from "@/assets/hero-consulting.mp4.asset.json";
import homeKeysAsset from "@/assets/hero-home-keys.mp4.asset.json";
import heroImage from "@/assets/hero-finance.jpg";

const CLIPS = [
  { src: consultingAsset.url, label: "Consultation" },
  { src: homeKeysAsset.url, label: "New home" },
];

/** Rotating, muted, looping hero showreel with a still-image fallback poster. */
export function HeroVideo() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % CLIPS.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    refs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [active]);

  return (
    <div className="relative h-[22rem] w-full overflow-hidden rounded-3xl border border-border/70 shadow-lift sm:h-[30rem]">
      {CLIPS.map((clip, i) => (
        <video
          key={clip.src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          src={clip.src}
          poster={heroImage}
          muted
          loop
          playsInline
          autoPlay={i === 0}
          preload="auto"
          aria-label={`${clip.label} showreel`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/45 via-primary/5 to-transparent"
      />

      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        {CLIPS.map((clip, i) => (
          <button
            key={clip.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${clip.label} clip`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-gold" : "w-3 bg-navy-foreground/60 hover:bg-navy-foreground/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
