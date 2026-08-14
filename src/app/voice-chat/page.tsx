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

export default function VoiceChatPage() {
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
            <a href="https://github.com/RunTerror/Voice-Chat" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.navIcon}><GitHubIcon /></a>
          </nav>
        </header>

        <div className={styles.sidebarContent}>
          <span className={styles.projectLabel}>PERSONAL PROJECT &bull; FULL-STACK</span>

          <h1 className={styles.projectTitle}>
            A real-time voice assistant you can interrupt mid-sentence — like a real conversation
          </h1>

          <div className={styles.overview}>
            <h2 className={styles.overviewLabel}>PROJECT OVERVIEW</h2>
            <p className={styles.overviewText}>
              A native SwiftUI client streams microphone audio to a Node.js/TypeScript backend,
              which runs it through a Speech-to-Text → LLM → Text-to-Speech pipeline and streams
              audio back — all over a single WebSocket:
            </p>
            <ul className={styles.overviewList}>
              <li className={styles.overviewListItem}>Real-time word-level transcription while you speak</li>
              <li className={styles.overviewListItem}>Sentence-buffered TTS so replies start instantly</li>
              <li className={styles.overviewListItem}>Interruption-aware round lifecycle — no talking over you</li>
              <li className={styles.overviewListItem}>State machine with automatic error recovery</li>
            </ul>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>PLATFORM</span>
              <span className={styles.metaValue}>SwiftUI + Node.js</span>
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
            Voice assistants feel robotic when they finish their whole answer before letting you
            speak. Natural conversation means low latency, streaming everywhere, and — hardest of
            all — graceful interruption.
          </p>
          <ul className={styles.sectionList}>
            <li className={styles.sectionListItem}><strong>One WebSocket:</strong> Mic capture (16 kHz PCM) up, synthesized audio (48 kHz) down — every event a JSON envelope, validated with Zod.</li>
            <li className={styles.sectionListItem}><strong>Round Lifecycle:</strong> Every turn carries a UUID roundId, so both client and server can drop late events from a previous round the moment you interrupt.</li>
            <li className={styles.sectionListItem}><strong>Silence Detection:</strong> 500 ms of silence finalizes the transcript and hands off to the LLM — no push-to-talk button.</li>
          </ul>
        </section>

        {/* How It Works Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>HOW IT WORKS</h2>
          <p className={styles.sectionText}>
            The backend orchestrates three streaming services and keeps them all cancellable at any
            moment.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>STREAMING PIPELINE</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Speech-to-Text:</strong> Cartesia ink-whisper streams a word-level transcript diff in real time as you talk.</li>
                <li className={styles.featureListItem}><strong>LLM:</strong> The reply streams from gpt-4o-mini via OpenRouter, buffered until each sentence boundary.</li>
                <li className={styles.featureListItem}><strong>Text-to-Speech:</strong> Each completed sentence is synthesized by Cartesia sonic and streamed to the client as PCM chunks — speech starts before the answer is finished.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame} onClick={() => openLightbox([
                  { src: "/voice-chat/voiceassistant.png", alt: "Voice Assistant listening state" },
                ])}>
                  <Image src="/voice-chat/voiceassistant.png" alt="Voice Assistant listening state" fill priority className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <video
                    className={styles.phoneVideo}
                    src="/voice-chat/demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>INTERRUPTION HANDLING</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Instant Cutoff:</strong> Speaking while a response is in flight aborts the LLM stream, clears the TTS queue, and stops in-flight synthesis.</li>
                <li className={styles.featureListItem}><strong>Self-Discarding Chunks:</strong> Late audio from the old round carries a stale roundId and is dropped on both ends — no ghost speech.</li>
                <li className={styles.featureListItem}><strong>Zero Downtime:</strong> The state flips straight back to LISTENING and the new round begins immediately.</li>
                <li className={styles.featureListItem}><strong>No Self-Hearing:</strong> Both directions run through one AVAudioEngine graph with voice processing enabled, so the assistant never hears itself and talks over its own voice.</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>STATE MACHINE</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Four States:</strong> IDLE → LISTENING → PROCESSING → SPEAKING, owned by a single orchestrator coordinating the whole pipeline.</li>
                <li className={styles.featureListItem}><strong>Auto-Recovery:</strong> Any failure lands in ERROR and recovers back to LISTENING automatically — the conversation never dead-ends.</li>
                <li className={styles.featureListItem}><strong>Mirrored Client:</strong> The SwiftUI app gates its audio queue on the current roundId and clears it on every new response.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>TECHNICAL APPROACH</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Node.js &amp; TypeScript</h3>
              <p className={styles.techText}>Hono server with a ws WebSocket layer, per-client routing and Zod-validated envelopes</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Cartesia STT &amp; TTS</h3>
              <p className={styles.techText}>ink-whisper transcription at 16 kHz in, sonic voice synthesis at 48 kHz out</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Streaming LLM</h3>
              <p className={styles.techText}>gpt-4o-mini via OpenRouter with the Vercel AI SDK, aborted cleanly on interruption</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>SwiftUI Client</h3>
              <p className={styles.techText}>Zero third-party dependencies — URLSessionWebSocketTask, AVAudioEngine, and @Observable state</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <a
            href="https://github.com/RunTerror/Voice-Chat"
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
