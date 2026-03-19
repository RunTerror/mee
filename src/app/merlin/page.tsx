"use client";

import styles from "./page.module.css";
import Image from "next/image";

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

export default function MerlinPage() {
  return (
    <div className={styles.page}>
      {/* Left Sidebar - Fixed */}
      <aside className={styles.sidebar}>
        <header className={styles.sidebarHeader}>
          <a href="/" className={styles.name}>Abhishek Bansal</a>
          <nav className={styles.nav}>
            <a href="https://apps.apple.com/us/app/merlin-ai-ai-chat-assistant/id6453692447" target="_blank" rel="noopener noreferrer" aria-label="App Store" className={styles.navIcon}><AppleIcon /></a>
            <a href="https://play.google.com/store/apps/details?id=com.foyer.merlin&hl=en_IN" target="_blank" rel="noopener noreferrer" aria-label="Play Store" className={styles.navIcon}><PlayStoreIcon /></a>
          </nav>
        </header>

        <div className={styles.sidebarContent}>
          <span className={styles.projectLabel}>MOBILE LEAD &bull; PRODUCT</span>

          <h1 className={styles.projectTitle}>
            One app, every AI model — making intelligence accessible to everyone
          </h1>

          <div className={styles.overview}>
            <h2 className={styles.overviewLabel}>WORK OVERVIEW</h2>
            <p className={styles.overviewText}>
              As Mobile Lead at Merlin AI, I transformed an existing Flutter codebase into a stable, polished product for hundreds of thousands of daily users:
            </p>
            <ul className={styles.overviewList}>
              <li className={styles.overviewListItem}>Resolving critical platform bugs & reducing crash rates</li>
              <li className={styles.overviewListItem}>Executing a complete UI/UX overhaul</li>
              <li className={styles.overviewListItem}>Integrating powerful AI features (Generators, Web Search, OCR)</li>
              <li className={styles.overviewListItem}>Developing native iOS/Android Home Screen Widgets</li>
            </ul>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>TIMELINE</span>
              <span className={styles.metaValue}>2024 &ndash; 2025</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>PLATFORM</span>
              <span className={styles.metaValue}>iOS &amp; Android</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>ROLE</span>
              <span className={styles.metaValue}>Mobile Lead &bull; Flutter</span>
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
            When I joined, Merlin&apos;s mobile app was unstable and the user experience felt rough around
            the edges. Crashes were frequent, the UI was inconsistent, and users were churning.
          </p>
          <ul className={styles.sectionList}>
            <li className={styles.sectionListItem}><strong>Unified Streaming Engine:</strong> Rearchitected the streaming layer to normalize different response formats across Claude, GPT, and Gemini models—eliminating complex rendering bugs entirely.</li>
            <li className={styles.sectionListItem}><strong>Total Codebase Stabilization:</strong> Cleared out technical debt and significantly reduced crash rates across both iOS and Android platforms simultaneously.</li>
            <li className={styles.sectionListItem}><strong>UI & UX Overhaul:</strong> Modernized every screen, tightened animations, and re-thought the navigation to match the web app&apos;s powerful feel.</li>
          </ul>
        </section>

        {/* Core Features Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CORE EXPERIENCE PILLARS</h2>
          <p className={styles.sectionText}>
            I focused on making every interaction feel effortless — from the very first login to
            daily power use.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>CLEAN AUTHENTICATION</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Distraction-Free:</strong> A minimal login experience via Email, Google, and Apple sign-in.</li>
                <li className={styles.featureListItem}><strong>Instant Access:</strong> No unnecessary steps—users jump into the app in seconds and start chatting immediately.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame}>
                  <Image src="/merlin/auth.png" alt="Authentication" fill priority className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>INTELLIGENT HOME</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Quick Actions:</strong> The home screen surfaces tools like Create Image, Scan &amp; Solve, and Web Search immediately.</li>
                <li className={styles.featureListItem}><strong>Zero Navigation:</strong> One tap gets you exactly to the right tool without digging through complex menus.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame}>
                  <Image src="/merlin/home.png" alt="Home Screen" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/merlin/drawer.png" alt="Navigation Drawer" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>EVERY AI MODEL, ONE TAP</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Seamless Switching:</strong> Change between Claude, GPT, and Gemini models mid-conversation without losing context.</li>
                <li className={styles.featureListItem}><strong>Smart Categorization:</strong> A custom picker categorizes brains by capability (Reasoning, Writing, etc.) to help users choose right.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame}>
                  <Image src="/merlin/models.png" alt="AI Models" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/merlin/chat.png" alt="Chat Interface" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>ORGANIZED HISTORY</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Personal Knowledge Base:</strong> Pin important conversations, organize chats into folders, and search through your entire history.</li>
                <li className={styles.featureListItem}><strong>Smart Organization:</strong> Specifically designed the history system to feel intuitive and grow smarter alongside the user.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame}>
                  <Image src="/merlin/history.png" alt="Chat History" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/merlin/settings.png" alt="Settings" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>HOME SCREEN WIDGET</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Instant Shortcuts:</strong> iOS home screen widgets grant immediate access to chat, photo scanning, and voice recording.</li>
                <li className={styles.featureListItem}><strong>Zero-Tap Access:</strong> Connect to powerful AI tools directly from your home screen without ever opening the app itself.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.widgetFrame}>
                  <Image src="/merlin/home-widget.png" alt="Home Widget" fill className={styles.widgetImage} />
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
              <p className={styles.techText}>Cross-platform development with a single codebase for iOS &amp; Android</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Streaming Engine</h3>
              <p className={styles.techText}>Unified streaming layer handling multiple AI model protocols</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Home Widgets</h3>
              <p className={styles.techText}>Native home screen widgets for instant AI access</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Camera &amp; OCR</h3>
              <p className={styles.techText}>Document scanning and text recognition for Scan &amp; Solve</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <a
            href="https://www.getmerlin.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Visit Merlin AI
          </a>
        </section>
      </main>
    </div>
  );
}
