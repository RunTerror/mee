"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const REPO = "https://github.com/RunTerror/Steady";

const installSnippet = `.package(
    url: "https://github.com/RunTerror/Steady.git",
    from: "0.1.0"
)`;

const usageSnippet = `import Steady

let chat = ChatListViewController<Message>()

chat.cellProvider = { collectionView, indexPath, message in
    collectionView.dequeueConfiguredReusableCell(
        using: registration, for: indexPath, item: message)
}

chat.heightProvider = { message, width in
    MessageCell.height(for: message, width: width)
}

chat.onNeedsOlder = { oldest in
    Task { @MainActor in
        chat.prepend(await api.page(before: oldest.id))
    }
}

chat.setItems(await api.latest())`;

const prependSnippet = `// Prepends: walk upward from the old first item.
var y = result[firstOld].y
for index in stride(from: firstOld - 1, through: 0, by: -1) {
    y -= result[index].height
    result[index].y = y
}`;

// The demo page posts its height (see public/steady/prepend-jump.html) so the
// iframe grows with each step instead of scrolling inside the page.
function PrependJumpDemo() {
  const [height, setHeight] = useState(640);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === "steady-demo-height") setHeight(event.data.height);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      className={styles.demoFrame}
      src="/steady/prepend-jump.html?embed"
      title="The Prepend Jump: interactive comparison of three chat scrolling approaches"
      style={{ height }}
      loading="lazy"
    />
  );
}

export default function SteadyPage() {
  return (
    <div className={styles.page}>
      {/* Left Sidebar - Fixed */}
      <aside className={styles.sidebar}>
        <header className={styles.sidebarHeader}>
          <a href="/" className={styles.name}>Abhishek Bansal</a>
          <nav className={styles.nav}>
            <a href={REPO} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.navIcon}><GitHubIcon /></a>
          </nav>
        </header>

        <div className={styles.sidebarContent}>
          <span className={styles.projectLabel}>OPEN SOURCE &bull; SWIFT PACKAGE</span>

          <h1 className={styles.projectTitle}>
            A chat list for iOS that loads older messages without moving the one you&apos;re reading
          </h1>

          <div className={styles.overview}>
            <h2 className={styles.overviewLabel}>PROJECT OVERVIEW</h2>
            <p className={styles.overviewText}>
              Steady is a Swift package, not an app: a drop-in chat list that other iOS apps build
              on. It does one thing properly. When you scroll back through a conversation and the
              next page of history loads, nothing on screen moves.
            </p>
            <ul className={styles.overviewList}>
              <li className={styles.overviewListItem}>No scroll jump on prepend, by construction rather than correction</li>
              <li className={styles.overviewListItem}>Never writes to the scroll offset when history loads</li>
              <li className={styles.overviewListItem}>One page request in flight, so no runaway load loops</li>
              <li className={styles.overviewListItem}>Works from UIKit, or from SwiftUI through a thin wrapper</li>
            </ul>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>PLATFORM</span>
              <span className={styles.metaValue}>iOS 17+ &middot; UIKit &amp; SwiftUI</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>DISTRIBUTION</span>
              <span className={styles.metaValue}>Swift Package Manager &middot; MIT License</span>
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
            You&apos;re reading an old message. You scroll up, another page of history loads, and
            the message you were reading is suddenly somewhere else on the screen. Almost every
            chat app has fought this bug.
          </p>
          <p className={styles.sectionText}>
            The cause is simple. A scroll view remembers its position as a single number,{" "}
            <code className={styles.code}>contentOffset.y</code>: the distance from the top of the
            content to the top of the screen. Insert older messages at the top and every existing
            row is pushed down, but that number stays the same. It now points at the new rows.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element -- animated SVG, served as-is */}
          <img
            className={styles.illustration}
            src="/steady/the-jump.svg"
            alt="Side by side: in most lists an older page lands at the top and shoves the message you are reading off screen; in Steady the page lands above the screen and nothing moves."
          />
          <p className={styles.sectionText}>The usual fixes all correct the jump after it happens:</p>
          <ul className={styles.sectionList}>
            <li className={styles.sectionListItem}><strong>Measure, insert, shift back:</strong> Move the offset down by the inserted height. It works until a cell resizes, an image loads, or a second page lands mid-fling. Then the correction races the layout and the list twitches.</li>
            <li className={styles.sectionListItem}><strong>Flip the list upside down:</strong> A prepend becomes an append, so it no longer jumps. But context menus and insert animations now have to be un-flipped by hand.</li>
            <li className={styles.sectionListItem}><strong>SwiftUI&apos;s <code className={styles.code}>scrollPosition(id:)</code>:</strong> Restores the position by row identity. In a lazy stack the rows above haven&apos;t been measured yet, so the restore is built on estimated heights.</li>
          </ul>
        </section>

        {/* Idea Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>THE IDEA</h2>
          <p className={styles.sectionText}>
            Steady doesn&apos;t correct the scroll position. It makes sure there is never anything
            to correct.
          </p>
          <p className={styles.sectionText}>
            The list lives on a canvas that is 1,000,000 points tall and never grows. The first
            message is pinned at its middle. Older messages are laid out upward from there, newer
            ones downward. The empty canvas above and below is hidden behind negative content
            insets, so you can only scroll where messages actually exist.
          </p>
          <p className={styles.sectionText}>
            When an older page arrives, its rows are placed in the empty space above the first
            message. Existing rows keep their exact coordinates, the top inset shrinks to reveal
            the new rows, and the scroll offset is never touched. The message you&apos;re reading
            has no reason to move.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element -- animated SVG, served as-is */}
          <img
            className={styles.illustration}
            src="/steady/the-wall.svg"
            alt="A curtain hides the empty wall above the chat. It lifts, three older messages are pinned onto the bare wall, and the phone screen below never moves."
          />
        </section>

        {/* In Action Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>IN ACTION</h2>
          <div className={styles.showcase}>
            <div className={styles.phoneFrame}>
              <video
                className={styles.phoneVideo}
                src="/steady/demo.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className={styles.showcaseText}>
              <h3 className={styles.featureTitle}>THE EXAMPLE APP</h3>
              <p className={styles.featureText}>
                Scrolling back through a long conversation while older pages stream in from a mock
                server. Each page lands above the screen and the message under your thumb stays
                exactly where it was. No flicker, no snap back.
              </p>
              <p className={styles.featureText}>
                The example app ships in the repo, so anyone evaluating the package can run it and
                try to break it.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>SEE IT STEP BY STEP</h2>
          <p className={styles.sectionText}>
            An interactive breakdown I built to explain the bug and the fix. It compares three
            approaches: a plain <code className={styles.code}>ScrollView</code>, SwiftUI&apos;s{" "}
            <code className={styles.code}>scrollPosition(id:)</code>, and Steady&apos;s fixed
            canvas. The orange frame is the phone screen and everything behind it is the scroll
            view&apos;s content, drawn in points. Step through each tab and watch the{" "}
            <em>msg-0 moved on screen</em> readout.
          </p>
          <PrependJumpDemo />
          <a
            href="/steady/prepend-jump.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoLink}
          >
            Open the demo full screen &#8599;
          </a>
        </section>

        {/* How It Works Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>HOW IT WORKS</h2>
          <p className={styles.sectionText}>
            About 750 lines of Swift. The no-jump guarantee lives in one custom layout; everything
            else is plumbing around it.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>A FIXED CANVAS</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Constant Content Size:</strong> A custom <code className={styles.code}>UICollectionViewLayout</code> always reports 1,000,000 pt of height, so the scroll view never sees its content grow.</li>
                <li className={styles.featureListItem}><strong>Anchor-Relative Rows:</strong> Each row is stored relative to an anchor at the canvas middle. Older rows get negative positions and newer rows positive ones.</li>
                <li className={styles.featureListItem}><strong>Hidden Empty Space:</strong> Negative <code className={styles.code}>contentInset</code> on both sides trims the canvas down to exactly the loaded messages, so scrolling stops at the oldest and newest rows.</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>PREPEND WITHOUT TOUCHING THE OFFSET</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>The Right Hook:</strong> Inserts are placed in <code className={styles.code}>prepare(forCollectionViewUpdates:)</code>, the only point in a layout pass that knows whether new items went at the top or the bottom.</li>
                <li className={styles.featureListItem}><strong>Grow Upward:</strong> Prepended rows stack upward from the old first row. Appended rows stack downward under the last one. Rows already on screen keep their frames.</li>
                <li className={styles.featureListItem}><strong>UIKit&apos;s One Surprise:</strong> When the top inset changes, <code className={styles.code}>UIScrollView</code> nudges the offset to &quot;keep content in place&quot;. Here the content never moved, so that nudge would itself be a jump. Steady puts the offset back.</li>
              </ul>
              <pre className={styles.codeBlock}>{prependSnippet}</pre>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>PAGING THAT CAN&apos;T LOOP</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Prefetch Early:</strong> <code className={styles.code}>onNeedsOlder</code> fires when you scroll into the top quarter of the loaded history, so the next page is usually ready before you reach it.</li>
                <li className={styles.featureListItem}><strong>One Request at a Time:</strong> A small pager state machine (idle, loading, exhausted, failed) keeps one request in flight. An empty page marks the history as exhausted.</li>
                <li className={styles.featureListItem}><strong>Safe Overlaps:</strong> Items are de-duplicated by id, so a page that repeats messages can&apos;t crash the data source or show doubles.</li>
                <li className={styles.featureListItem}><strong>No Bounce Back:</strong> In a list that jumps, the user lands back at the top after each load, which triggers the next load, and so on. Since nothing moves here, that loop can&apos;t start.</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>BUILT FOR REAL CHAT SCREENS</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}><strong>Send Animation:</strong> <code className={styles.code}>append(_:from:)</code> flies a sent message in from the composer&apos;s frame, over the rows sliding up beneath it.</li>
                <li className={styles.featureListItem}><strong>Server Echoes:</strong> When the server returns a message with the same id, the row updates in place instead of appearing twice.</li>
                <li className={styles.featureListItem}><strong>Context Menus:</strong> Long-press menus come from <code className={styles.code}>contextMenuProvider</code>, and cells can lift just the bubble as the preview.</li>
                <li className={styles.featureListItem}><strong>Cached Heights:</strong> Each height is asked for once per item per width and cached by id. Rotation re-measures without shifting the canvas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>USING THE PACKAGE</h2>
          <p className={styles.sectionText}>
            Steady owns layout and scroll stability. The app keeps full control of cells, heights
            and data. Add it with Swift Package Manager:
          </p>
          <pre className={styles.codeBlock}>{installSnippet}</pre>
          <p className={styles.sectionText}>
            Then supply cells, heights and a way to fetch older pages. The list opens at the newest
            message and asks for more as you scroll back:
          </p>
          <pre className={styles.codeBlock}>{usageSnippet}</pre>
          <p className={styles.sectionText}>
            For SwiftUI, wrap <code className={styles.code}>ChatListViewController</code> in a{" "}
            <code className={styles.code}>UIViewControllerRepresentable</code>. The example app
            does exactly that.
          </p>
        </section>

        {/* Trade-offs Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>TRADE-OFFS</h2>
          <p className={styles.sectionText}>
            Steady is an early release, and the design makes some deliberate trades:
          </p>
          <ul className={styles.sectionList}>
            <li className={styles.sectionListItem}><strong>Finite Canvas:</strong> Room for roughly 5,000 messages in each direction from where the conversation opened.</li>
            <li className={styles.sectionListItem}><strong>Explicit Heights:</strong> The app supplies each row&apos;s height, and it must match the rendered cell. That is the price of never measuring after layout.</li>
            <li className={styles.sectionListItem}><strong>Scrollbar:</strong> The indicator reflects loaded messages, not the whole history, so it is hidden by default.</li>
            <li className={styles.sectionListItem}><strong>Not Yet:</strong> Deleting messages, edits that change a row&apos;s height, Dynamic Type changes and pagination error handling are still open work.</li>
          </ul>
        </section>

        {/* Technical Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>TECHNICAL APPROACH</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Custom Collection View Layout</h3>
              <p className={styles.techText}>Fixed 1M-point canvas, anchor-relative row metrics, and negative insets</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Diffable Data Source</h3>
              <p className={styles.techText}>Snapshots keyed by id; generic over any Identifiable message type</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Pager State Machine</h3>
              <p className={styles.techText}>One request in flight, with exhausted and failed states</p>
            </div>
            <div className={styles.techCard}>
              <h3 className={styles.techTitle}>Swift Package</h3>
              <p className={styles.techText}>Swift 6.2 tools, main-actor isolated by default, iOS 17 and later</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <a
            href={REPO}
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
