"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.57c-.39-.21-.68-.66-.68-1.24V1.67c0-.58.29-1.03.68-1.24l11.28 11.57L3.18 23.57zM15.86 13.4l2.83 1.64-2.12 2.12L15.86 13.4zm3.91-2.27l1.77 1.03c.52.3.52.79 0 1.09l-1.77 1.03-2.34-1.57 2.34-1.58zm-4.63-.71L4.46.95l12.67 7.33-1.99 2.14z" />
  </svg>
);

export default function NotesAIPage() {
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
            <a href="https://apps.apple.com/us/app/ai-note-taker-audio-to-text/id6743072579" target="_blank" rel="noopener noreferrer" aria-label="App Store" className={styles.navIcon}><AppleIcon /></a>
            <a href="https://play.google.com/store/apps/details?id=com.foyer.notesai&hl=en_IN" target="_blank" rel="noopener noreferrer" aria-label="Play Store" className={styles.navIcon}><PlayStoreIcon /></a>
          </nav>
        </header>

        <div className={styles.sidebarContent}>
          <span className={styles.projectLabel}>MOBILE APP &bull; AI</span>

          <h1 className={styles.projectTitle}>
            Capture, organize, and chat with your notes instantly
          </h1>

          <div className={styles.overview}>
            <h2 className={styles.overviewLabel}>WORK OVERVIEW</h2>
            <p className={styles.overviewText}>
              Notes AI is a smart note-taking app that helps you instantly capture and make sense of your thoughts without the busywork.
            </p>
            <ul className={styles.overviewList}>
              <li className={styles.overviewListItem}>Take notes using images, voice recordings, files, or text</li>
              <li className={styles.overviewListItem}>AI automatically pulls out the main points and action items</li>
              <li className={styles.overviewListItem}>Chat directly with your notes to quickly find answers</li>
              <li className={styles.overviewListItem}>Keep everything organized with simple folders and tags</li>
            </ul>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>PLATFORM</span>
              <span className={styles.metaValue}>iOS &amp; Android</span>
            </div>
          </div>
        </div>

        <footer className={styles.sidebarFooter}>
          <span>Abhishek Bansal &copy; 2026</span>
        </footer>
      </aside>

      {/* Right Content - Scrollable */}
      <main className={styles.content}>
        {/* Challenge Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>THE CHALLENGE</h2>
          <p className={styles.sectionText}>
            Most note apps just hold your text. They don&apos;t actually help you organize your thoughts or figure out what to do next.
          </p>
          <ul className={styles.sectionList}>
            <li className={styles.sectionListItem}><strong>Handles Anything:</strong> Drop in audio, images, or files, and the app instantly turns them into clean, searchable text.</li>
            <li className={styles.sectionListItem}><strong>Talk to Your Notes:</strong> Built a chat feature so you can just ask your notes questions instead of scrolling for answers.</li>
            <li className={styles.sectionListItem}><strong>Stays Organized:</strong> A simple folder and tag system that keeps your messy brain dumps neat and tidy.</li>
          </ul>
        </section>

        {/* Core Features Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CORE EXPERIENCE PILLARS</h2>
          <p className={styles.sectionText}>
            The interface is heavily focused on getting thoughts out of your head and onto the screen as fast as possible.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>DASHBOARD & ORGANIZATION</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Clean Hub:</strong> See your latest notes and summaries right when you open the app.</li>
                <li className={styles.featureListItem}><strong>Simple Folders:</strong> Group your thoughts into projects without overthinking it.</li>
              </ul>
              <div className={styles.featureImages} onClick={() => openLightbox([
                { src: "/note-taker/home.jpeg", alt: "Home" },
                { src: "/note-taker/home-1.jpeg", alt: "Dashboard" },
              ])}>
                <div className={styles.phoneFrame}>
                  <Image src="/note-taker/home.jpeg" alt="Home" fill priority className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/note-taker/home-1.jpeg" alt="Dashboard" fill priority className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>CAPTURE ANYTHING</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Any Format:</strong> Start a voice note, snap a picture, share a file, or just type.</li>
                <li className={styles.featureListItem}><strong>Instant Processing:</strong> Everything is transcribed and turned into text on the spot.</li>
              </ul>
              <div className={styles.featureImages} onClick={() => openLightbox([
                { src: "/note-taker/audio.jpeg", alt: "Multimodal Capture" },
              ])}>
                <div className={styles.phoneFrame}>
                  <Image src="/note-taker/audio.jpeg" alt="Multimodal Capture" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>CHAT & AI SUMMARIES</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Interactive Chat:</strong> Ask questions and get answers based entirely on the stuff you&apos;ve saved.</li>
                <li className={styles.featureListItem}><strong>Automated Insights:</strong> The AI automatically cleans up your rambling voice notes into neat summaries and action items.</li>
              </ul>
              <div className={styles.featureImages} onClick={() => openLightbox([
                { src: "/note-taker/summary.jpeg", alt: "AI Summary" },
                { src: "/note-taker/note.jpeg", alt: "Detailed Note" },
              ])}>
                <div className={styles.phoneFrame}>
                  <Image src="/note-taker/summary.jpeg" alt="AI Summary" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/note-taker/note.jpeg" alt="Detailed Note" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>SHARING & PROFILE</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Easy Export:</strong> Send your summaries straight to iMessage, Mail, or other apps in one tap.</li>
                <li className={styles.featureListItem}><strong>Profile Settings:</strong> A straightforward way to manage your account and AI preferences.</li>
              </ul>
              <div className={styles.featureImages} onClick={() => openLightbox([
                { src: "/note-taker/share.jpeg", alt: "Sharing" },
                { src: "/note-taker/profile.jpeg", alt: "Profile" },
              ])}>
                <div className={styles.phoneFrame}>
                  <Image src="/note-taker/share.jpeg" alt="Sharing" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/note-taker/profile.jpeg" alt="Profile" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Technical Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>TECHNICAL APPROACH</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Flutter &amp; Dart</h3>
              <p className={styles.techText}>Cross-platform UI development for both iOS &amp; Android.</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Whisperflow</h3>
              <p className={styles.techText}>Integrated Whisperflow for hyper-accurate, real-time voice transcription.</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>LLM Integration</h3>
              <p className={styles.techText}>Cloud integration for fast and accurate summary generation.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <a
            href="https://apps.apple.com/us/app/ai-note-taker-audio-to-text/id6743072579"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Download on iOS
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.foyer.notesai&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Download on Android
          </a>
        </section>

      </main>
    </div>
  );
}
