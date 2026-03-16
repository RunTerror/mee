"use client";

import styles from "./page.module.css";
import Image from "next/image";

const screenshots = [
  { src: "/thine/o1.PNG", caption: "Onboarding Flow" },
  { src: "/thine/o2.PNG", caption: "Personalization" },
  { src: "/thine/o3.PNG", caption: "Setup Complete" },
  { src: "/thine/home.PNG", caption: "Home Screen" },
  { src: "/thine/scratch-pad.PNG", caption: "Scratch Pad" },
  { src: "/thine/chat-1.PNG", caption: "Chat Interface" },
  { src: "/thine/chat-2.PNG", caption: "Conversation" },
  { src: "/thine/voice-chat.PNG", caption: "Voice Chat" },
];

export default function ThinePage() {
  return (
    <div className={styles.page}>
      {/* Left Sidebar - Fixed */}
      <aside className={styles.sidebar}>
        <header className={styles.sidebarHeader}>
          <a href="/" className={styles.name}>abhishek bansal</a>
          <nav className={styles.nav}>
            {/* <a href="#">resume</a> */}
            <a href="mailto:bansalabhishek7411@gmail.com">contact</a>
          </nav>
        </header>

        <div className={styles.sidebarContent}>
          <span className={styles.projectLabel}>FOUNDING MEMBER &bull; MOBILE LEAD</span>

          <h1 className={styles.projectTitle}>
            Building a personal AI that understands you, not just your queries
          </h1>

          <div className={styles.overview}>
            <h2 className={styles.overviewLabel}>WORK OVERVIEW</h2>
            <p className={styles.overviewText}>
              As the iOS Lead for Thine, I built a fast, native SwiftUI personal AI. My primary technical achievement was engineering a 24×7 background audio recording pipeline that evades iOS task suspensions, auto-resumes after phone calls, and consumes under 2% battery per hour.
            </p>
            <p className={styles.overviewText}>
              To deeply embed the AI into the iOS ecosystem, I also architected several system-level integrations:
            </p>
            <ul className={styles.overviewList}>
              <li className={styles.overviewListItem}>Background tasks for long-running operations</li>
              <li className={styles.overviewListItem}>Live Activities & Dynamic Island integration</li>
              <li className={styles.overviewListItem}>Home Widgets & App Shortcuts for fast access</li>
              <li className={styles.overviewListItem}>Calendar & Alarm contextual sync</li>
            </ul>
            <p className={styles.overviewText}>
              Ultimately, I transformed complex hardware constraints into a seamless, always-present user experience.
            </p>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>TIMELINE</span>
              <span className={styles.metaValue}>2025 - Present</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>PLATFORM</span>
              <span className={styles.metaValue}>iOS</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>ROLE</span>
              <span className={styles.metaValue}>Mobile Lead &bull; SwiftUI</span>
            </div>
          </div>
        </div>

        <footer className={styles.sidebarFooter}>
          <span>abhishek bansal &copy; 2026</span>
        </footer>
      </aside>

      {/* Right Content - Scrollable */}
      <main className={styles.content}>
        {/* Challenge Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>THE CHALLENGE</h2>
          <p className={styles.sectionText}>
            Building a truly continuous, always-on AI requires solving one of the hardest technical constraints on iOS: keeping a 24×7 background audio recording alive.
          </p>
          <ul className={styles.sectionList}>
            <li className={styles.sectionListItem}><strong>Bypassing System Limits:</strong> Designed a custom audio session workaround to prevent Apple&apos;s strict OS from aggressively suspending the app.</li>
            <li className={styles.sectionListItem}><strong>Ultra-Low Power Impact:</strong> Engineered a bulletproof background architecture that consumes less than 2% battery per hour.</li>
            <li className={styles.sectionListItem}><strong>Seamless Interruption Handling:</strong> Instantly detects incoming phone calls, pauses the session, and auto-resumes afterward with zero user intervention.</li>
            <li className={styles.sectionListItem}><strong>Instant Access & Audio Routing:</strong> Start recording effortlessly via the iPhone Action Button or App Shortcuts without opening the app, complete with seamless, automatic audio routing between Bluetooth earphones and the device mic.</li>
          </ul>
        </section>

        {/* Core Features Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CORE EXPERIENCE PILLARS</h2>
          <p className={styles.sectionText}>
            To create an AI that feels personal without being invasive, I focused on three key pillars
            within the mobile experience.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>MAGICAL ONBOARDING</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>No Forms:</strong> Thine searches the web for your digital footprint instead of asking boring questions.</li>
                <li className={styles.featureListItem}><strong>Instant &quot;Wow&quot;:</strong> Users are immediately amazed when the app accurately reveals their life and interests right on the first screen.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/o1.PNG" alt="Onboarding 1" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/o2.PNG" alt="Onboarding 2" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/o3.PNG" alt="Onboarding 3" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>YOUR DAILY SUMMARY</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Automatic Summarization:</strong> The Scratchpad intelligently summarizes everything that happened in your day.</li>
                <li className={styles.featureListItem}><strong>Personal Hub:</strong> Gives you a clean, timeline-based view of thoughts, activities, and conversations for easy review.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/home.PNG" alt="Home Screen" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/scratch-pad.PNG" alt="Scratch Pad" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>NATURAL CONVERSATIONS</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Ongoing Context:</strong> It remembers what you talked about yesterday, making interactions feel continuous.</li>
                <li className={styles.featureListItem}><strong>Text Chat:</strong> Talk with Thine just like you would text a friend rather than a transactional assistant.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/chat-1.PNG" alt="Chat 1" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/chat-2.PNG" alt="Chat 2" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>REALTIME VOICE CHAT</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Natural Back-and-Forth:</strong> Talk naturally in real-time with an AI that listens while it speaks.</li>
                <li className={styles.featureListItem}><strong>On-Device Interruption:</strong> A local model detects when you speak and instantly stops the AI&apos;s audio, letting you naturally jump in.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/voice-chat.PNG" alt="Voice Chat" fill className={styles.phoneImage} />
                </div>
              </div>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>BACKGROUND RECORDING CONTROL</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Lock Screen Control:</strong> Uses iOS Live Activities to give you full control over the background recording without opening the app.</li>
                <li className={styles.featureListItem}><strong>On-Device Voice Isolation:</strong> An advanced fingerprinting engine actively isolates your voice from TV noise and background chat to ensure only your speech is captured.</li>
              </ul>
              <div className={styles.featureImages}>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/fingerprint.PNG" alt="Voice Fingerprint" fill className={styles.phoneImage} />
                </div>
                <div className={styles.phoneFrame}>
                  <Image src="/thine/live-activity.PNG" alt="Live Activity" fill className={styles.phoneImage} />
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
              <h3 className={styles.techTitle}>SwiftUI</h3>
              <p className={styles.techText}>Native iOS development with modern declarative UI</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Swift</h3>
              <p className={styles.techText}>Type-safe, performant native codebase</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>iOS Native APIs</h3>
              <p className={styles.techText}>Deep system integration for seamless experience</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Voice & Speech</h3>
              <p className={styles.techText}>Real-time voice interactions with low latency</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <a
            href="https://www.thine.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Visit Thine
          </a>
        </section>
      </main>
    </div>
  );
}
