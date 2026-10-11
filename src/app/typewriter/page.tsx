"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

export default function TypewriterPage() {
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[] | null>(null);

  const openLightbox = (images: { src: string; alt: string }[]) => setLightboxImages(images);
  const closeLightbox = () => setLightboxImages(null);

  return (
    <div className={styles.page}>
      {lightboxImages && <ImageLightbox images={lightboxImages} onClose={closeLightbox} />}

      {/* Left Sidebar - Fixed */}
      <aside className={styles.sidebar}>
        <header className={styles.sidebarHeader}>
          <a href="/" className={styles.name}>Abhishek Bansal</a>
        </header>

        <div className={styles.sidebarContent}>
          <span className={styles.projectLabel}>PERSONAL PROJECT &bull; iOS</span>

          <h1 className={styles.projectTitle}>
            A mechanical typewriter on your phone — no delete key, only the bell
          </h1>

          <div className={styles.overview}>
            <h2 className={styles.overviewLabel}>PROJECT OVERVIEW</h2>
            <p className={styles.overviewText}>
              A SwiftUI writing toy that behaves like an old portable: the carriage steps one
              cell per key, typebars swing up out of the basket, and every letter lands on the
              paper slightly differently.
            </p>
            <ul className={styles.overviewList}>
              <li className={styles.overviewListItem}>Fixed-pitch paper grid with margins, bell and margin lock</li>
              <li className={styles.overviewListItem}>Every strike carries its own wobble, ink and fade</li>
              <li className={styles.overviewListItem}>All sounds synthesized at launch — zero audio files</li>
              <li className={styles.overviewListItem}>A desk drawer of finished sheets to reread or roll back in</li>
            </ul>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>PLATFORM</span>
              <span className={styles.metaValue}>SwiftUI · iPhone &amp; iPad</span>
            </div>
          </div>
        </div>

        <footer className={styles.sidebarFooter}>
          <span>Abhishek Bansal &copy; 2026</span>
        </footer>
      </aside>

      {/* Right Content - Scrollable */}
      <main className={styles.content}>
        {/* Idea Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>THE IDEA</h2>
          <p className={styles.sectionText}>
            Writing apps are built to make text frictionless: undo, autocorrect, infinite
            backspace. That&apos;s great for work and terrible for a first draft. A typewriter
            makes you commit to every letter.
          </p>
          <p className={styles.sectionText}>
            Typewriter rebuilds that feeling on glass. Backspace only moves the carriage back;
            typing again overstrikes the letter that&apos;s already there. When you get near the
            right margin, the bell rings.
          </p>
        </section>

        {/* How It Works Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>HOW IT WORKS</h2>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>THE MACHINE</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Moving Paper:</strong> The strike point never moves. The sheet slides left under it as you type and climbs a line on every carriage return.</li>
                <li className={styles.featureListItem}><strong>Typebars:</strong> Each key maps to one of the bars fanned out in the basket. That bar swings up to the platen on every keypress.</li>
                <li className={styles.featureListItem}><strong>Real Controls:</strong> The return lever, shift, shift lock and a two-color ribbon. Drag the paper to turn the platen knob.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame} onClick={() => openLightbox([
                  { src: "/typewriter/screen.jpg", alt: "Typewriter with a sheet in the carriage" },
                ])}>
                  <Image src="/typewriter/screen.jpg" alt="Typewriter with a sheet in the carriage" fill priority className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <video
                    className={styles.phoneVideo}
                    src="/typewriter/demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>IMPERFECT INK</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Per-Strike Jitter:</strong> Every letter is stored with its own small offset, rotation and ink density, so no two e&apos;s look the same.</li>
                <li className={styles.featureListItem}><strong>Under-Inking:</strong> About a third of strikes fade on one side, like a slug hitting the ribbon unevenly.</li>
                <li className={styles.featureListItem}><strong>Bleed:</strong> Each line is drawn into a Canvas with a slight blur, as if the ink soaked into the paper fibers.</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>SYNTHESIZED SOUND</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>No Samples:</strong> Every sound is generated when the app launches, from filtered noise bursts and decaying sine partials.</li>
                <li className={styles.featureListItem}><strong>A Key Strike:</strong> The slug hits the platen, the steel typebar rings briefly, the escapement clicks, then the bar drops back. Six variants rotate so it never sounds like a loop.</li>
                <li className={styles.featureListItem}><strong>The Return:</strong> Line-space ratchet clicks, the carriage slides along its rails, then a thud against the margin stop, with a heavy haptic timed to it.</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>THE DRAWER</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Finished Sheets:</strong> Feed a new sheet and the old one lands in the desk drawer.</li>
                <li className={styles.featureListItem}><strong>Roll It Back In:</strong> Any archived page can go back into the machine, with the carriage on the next empty line.</li>
                <li className={styles.featureListItem}><strong>Share:</strong> Export a page as a high-res image, or copy it as plain text. Where a cell was overstruck, the last letter wins.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>TECHNICAL APPROACH</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>SwiftUI &amp; Canvas</h3>
              <p className={styles.techText}>The whole machine is drawn in code. Equatable line views mean only the line being typed redraws</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>AVAudioEngine Synth</h3>
              <p className={styles.techText}>A tiny additive/subtractive synth renders PCM buffers, played through a pool of 12 player nodes</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>@Observable Model</h3>
              <p className={styles.techText}>Carriage, shift, ribbon and sheets in one model, saved as JSON with a debounced write</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Hardware Keyboards</h3>
              <p className={styles.techText}>Works with a physical keyboard too. Arrow keys roll the platen, return pulls the lever</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
