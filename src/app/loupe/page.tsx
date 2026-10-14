"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

const DMG_URL =
  "https://bk65lta8gr23kitg.public.blob.vercel-storage.com/downloads/Loupe-0.9.0-arm64.dmg";

const shots = [
  { src: "/loupe/hero.jpg", alt: "Loupe showing live traffic from an app in the iOS Simulator" },
  { src: "/loupe/find.jpg", alt: "Searching for failed requests with status:>=400" },
  { src: "/loupe/mock.jpg", alt: "Mocking a failing endpoint with a saved response" },
];

export default function LoupePage() {
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
          <span className={styles.betaBadge}>
            <span className={styles.betaDot} />
            BUILDING NOW &bull; v0.9 BETA
          </span>

          <h1 className={styles.projectTitle}>
            See every request your app makes in the iOS Simulator. Then mess with them.
          </h1>

          <div className={styles.overview}>
            <h2 className={styles.overviewLabel}>PROJECT OVERVIEW</h2>
            <p className={styles.overviewText}>
              Loupe is a Mac app that sits between the Simulator and the internet and shows what
              actually went over the wire. No SDK to add, no debug menu to build, no
              print(response) left behind in a PR.
            </p>
            <ul className={styles.overviewList}>
              <li className={styles.overviewListItem}>Every HTTP request and WebSocket, decoded live</li>
              <li className={styles.overviewListItem}>JSON and MessagePack bodies as foldable trees</li>
              <li className={styles.overviewListItem}>Search with fields, like status:4xx or host:api.*</li>
              <li className={styles.overviewListItem}>Mocks and breakpoints to change traffic in flight</li>
            </ul>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>PLATFORM</span>
              <span className={styles.metaValue}>macOS · Apple Silicon</span>
            </div>
          </div>
        </div>

        <footer className={styles.sidebarFooter}>
          <span>Abhishek Bansal &copy; 2026</span>
        </footer>
      </aside>

      {/* Right Content - Scrollable */}
      <main className={styles.content}>
        {/* Problem Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>THE PROBLEM</h2>
          <p className={styles.sectionText}>
            The screen is empty. Was it the server, the network, or the <code className={styles.mono}>if</code> you
            wrote at 2 a.m.? The usual answer is adding print statements to a dozen files,
            rebuilding, and squinting at the Xcode console.
          </p>
          <p className={styles.sectionText}>
            With Loupe you open the app and click the red row. The 500 is right there, with its
            headers, its body and a cURL command you can paste into the backend thread.
          </p>
          <div className={styles.screenFrame} onClick={() => openLightbox(shots)}>
            <Image src={shots[0].src} alt={shots[0].alt} fill priority sizes="(max-width: 960px) 100vw, 60vw" className={styles.screenImage} />
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>WHAT IT DOES</h2>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>WATCH</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Live List:</strong> Every request and WebSocket with status, size and timing, tagged with the app and simulator that sent it.</li>
                <li className={styles.featureListItem}><strong>Readable Bodies:</strong> JSON and MessagePack as trees, images as images, forms as tables, everything else as text or hex.</li>
                <li className={styles.featureListItem}><strong>WebSockets:</strong> Messages one by one, filtered by direction, event name or text.</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>FIND</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Field Search:</strong> <code className={styles.mono}>status:&gt;=500</code>, <code className={styles.mono}>method:post,put</code>, <code className={styles.mono}>time:&gt;1s</code>, <code className={styles.mono}>-host:*sentry*</code>. Wildcards, exclusions and &quot;or&quot; built in.</li>
                <li className={styles.featureListItem}><strong>Hide Noise:</strong> Analytics, crash reporting, images and fonts stay out of the way.</li>
                <li className={styles.featureListItem}><strong>Nothing Hidden:</strong> A bar above the list always says what&apos;s filtering it, with a ✕ on each.</li>
              </ul>
              <div className={styles.screenFrame} onClick={() => openLightbox([shots[1]])}>
                <Image src={shots[1].src} alt={shots[1].alt} fill sizes="(max-width: 960px) 100vw, 60vw" className={styles.screenImage} />
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>CHANGE</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Mocks:</strong> Answer matching requests with a saved response, with an optional delay for testing loading states. The server never hears about it.</li>
                <li className={styles.featureListItem}><strong>Breakpoints:</strong> Pause a request before it leaves, or a response before the app gets it. Edit it, then send it on or kill it.</li>
                <li className={styles.featureListItem}><strong>MessagePack as JSON:</strong> Binary bodies are edited as JSON and packed again on the way out.</li>
              </ul>
              <div className={styles.screenFrame} onClick={() => openLightbox([shots[2]])}>
                <Image src={shots[2].src} alt={shots[2].alt} fill sizes="(max-width: 960px) 100vw, 60vw" className={styles.screenImage} />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>HOW IT WORKS</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>mitmproxy Add-on</h3>
              <p className={styles.techText}>The Simulator uses the Mac&apos;s proxy setting, so pointing it at a bundled mitmproxy is enough to see everything</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Who Sent It</h3>
              <p className={styles.techText}>For each connection, lsof finds the process and walks up its parents to the simulator. Anything outside a simulator passes through untouched</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>No-Build UI</h3>
              <p className={styles.techText}>Plain HTML, CSS and JavaScript modules, wrapped in an Electron app that sets up certificates and the proxy for you</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Local Only</h3>
              <p className={styles.techText}>Everything listens on 127.0.0.1 behind a random token. Quitting turns the Mac&apos;s proxy back off</p>
            </div>
          </div>
        </section>

        {/* Status Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>WHERE IT&apos;S AT</h2>
          <p className={styles.sectionText}>
            Loupe is in beta (v0.9) and still moving. It works with the iOS Simulator only for
            now; real iPhones and Android are next. Apps that pin their certificates can&apos;t be
            read, and WebSocket messages can be watched but not yet edited.
          </p>
          <p className={styles.sectionText}>
            The download is for Apple Silicon Macs and isn&apos;t signed yet, so the first time,
            right-click Loupe and choose Open.
          </p>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <a href={DMG_URL} className={styles.ctaButton}>
            Download the beta (.dmg)
          </a>
        </section>
      </main>
    </div>
  );
}
