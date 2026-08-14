"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function MorphitPage() {
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
          <nav className={styles.nav}>
            <a href="https://github.com/RunTerror/Morphit" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.navIcon}><GitHubIcon /></a>
          </nav>
        </header>

        <div className={styles.sidebarContent}>
          <span className={styles.projectLabel}>PERSONAL PROJECT &bull; GRAPHICS</span>

          <h1 className={styles.projectTitle}>
            3D particle morphing on a flat 2D canvas — no engine, no shaders, just math
          </h1>

          <div className={styles.overview}>
            <h2 className={styles.overviewLabel}>PROJECT OVERVIEW</h2>
            <p className={styles.overviewText}>
              A visual experiment in Flutter: can a stunning, immersive 3D experience be built with
              nothing but high-school math and a standard 2D canvas? Spoiler: yes.
            </p>
            <ul className={styles.overviewList}>
              <li className={styles.overviewListItem}>3,000 particles distributed with the Golden Ratio</li>
              <li className={styles.overviewListItem}>Four shapes — sphere, cube, heart, torus — from pure equations</li>
              <li className={styles.overviewListItem}>Liquid morphing: every point walks to its new home</li>
              <li className={styles.overviewListItem}>Hand-rolled 3D projection with perspective &amp; depth fog</li>
            </ul>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>PLATFORM</span>
              <span className={styles.metaValue}>Flutter Canvas</span>
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
            Genuine 3D programming is intimidating — it usually demands game engines, shader
            languages, and a degree in linear algebra. I didn&apos;t want any of that.
            I just wanted to make some dots dance.
          </p>
          <p className={styles.sectionText}>
            Morphit tricks the machine (and your eyes) into seeing solid, melting 3D objects using
            nothing but a 2D canvas and simple arithmetic.
          </p>
          <video
            className={styles.videoFrame}
            src="/morphit/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        {/* How It Works Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>HOW IT WORKS</h2>
          <p className={styles.sectionText}>
            A step-by-step ladder from a cloud of random dots to liquid 3D geometry.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>GOLDEN RATIO SEEDS</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Nature&apos;s Cheat Code:</strong> Each new point is placed by incrementing the &quot;Golden Angle&quot; (φ ≈ 1.618), so every dot lands in the largest available gap — clumping is mathematically impossible.</li>
                <li className={styles.featureListItem}><strong>Permanent DNA:</strong> Every particle is born as a Seed of just two numbers (u, v). The seeds never change — whether the particle is part of a cube or a heart, its &quot;soul&quot; stays the same.</li>
              </ul>
              <div className={styles.featureImages} onClick={() => openLightbox([
                { src: "/morphit/seeds_plot.png", alt: "Golden Ratio seed lattice" },
              ])}>
                <div className={styles.squareFrame}>
                  <Image src="/morphit/seeds_plot.png" alt="Golden Ratio seed lattice" fill priority className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>SCULPTING SHAPES</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>The Sphere:</strong> Seeds stack along the Y-axis and twist by the Golden Angle — a perfect, non-repeating spiral wrapping the globe.</li>
                <li className={styles.featureListItem}><strong>The Cube:</strong> Fire a &quot;laser&quot; from the sphere&apos;s center through every point until it hits the walls of a box — dividing by the largest coordinate snaps the sphere flat.</li>
                <li className={styles.featureListItem}><strong>The Heart:</strong> A Fourier series — stacked cosine waves harmonizing into organic curves.</li>
                <li className={styles.featureListItem}><strong>The Torus:</strong> A circle chasing its own tail — a ring wrapped around a larger path.</li>
              </ul>
              <div className={styles.featureImages} onClick={() => openLightbox([
                { src: "/morphit/sphere.png", alt: "Sphere" },
                { src: "/morphit/cube.png", alt: "Cube" },
                { src: "/morphit/heart.png", alt: "Heart" },
                { src: "/morphit/donut.png", alt: "Torus" },
              ])}>
                <div className={styles.phoneFrame}>
                  <Image src="/morphit/sphere.png" alt="Sphere" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/morphit/cube.png" alt="Cube" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/morphit/heart.png" alt="Heart" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/morphit/donut.png" alt="Torus" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>LIQUID MORPHING</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>No Switching:</strong> Shape A and Shape B are made of the same seeds — point #42 on the sphere is the same entity as point #42 on the cube.</li>
                <li className={styles.featureListItem}><strong>Metamorphosis:</strong> To animate, every point simply walks to its new home — 3,000 points simultaneously. The object melts and reforms in real time.</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>THE 3D ILLUSION</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>The Spin:</strong> A rotation matrix spins the mathematical world, giving your brain the motion cues to perceive a solid object.</li>
                <li className={styles.featureListItem}><strong>Perspective:</strong> Every point is divided by its depth — distant points crush toward the center, close ones stay large.</li>
                <li className={styles.featureListItem}><strong>The Fog:</strong> Far-away points fade out, creating depth of field that separates the front of the object from the back.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>TECHNICAL APPROACH</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Flutter 2D Canvas</h3>
              <p className={styles.techText}>The whole illusion painted with a standard CustomPainter — no engine, no shaders</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Golden-Angle Distribution</h3>
              <p className={styles.techText}>φ-based point placement for perfectly even, clump-free particle clouds</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Fourier-Series Shapes</h3>
              <p className={styles.techText}>Harmonic cosine waves summed into organic geometry like the heart</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Perspective Projection</h3>
              <p className={styles.techText}>Hand-rolled rotation matrices, divide-by-Z perspective, and depth fog</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <a
            href="https://github.com/RunTerror/Morphit"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            View on GitHub
          </a>
        </section>
      </main>
    </div>
  );
}
