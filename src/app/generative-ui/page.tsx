"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

const REPO_URL = "https://github.com/RunTerror/prism";

type Media = { src: string; alt: string; caption: string; kind: "shot" | "gif" };

const hero: Media = {
  src: "/generative-ui/hero-chat.gif",
  alt: "Prism on iOS: a tip calculator screen appearing inside a chat",
  caption: "A tip calculator inside a chat, drawn by Prism on iPhone.",
  kind: "gif",
};

const prismShots: Media[] = [
  {
    src: "/generative-ui/ios-counter.jpg",
    alt: "The counter, written by the model and drawn by Prism",
    caption: "The counter, after two taps.",
    kind: "shot",
  },
  {
    src: "/generative-ui/ios-chat-parts.jpg",
    alt: "Steps, a quiz, a plan picker, cards and follow-up questions from Prism's part library",
    caption: "Steps, a quiz, a plan picker and cards from the part library.",
    kind: "shot",
  },
];

const platformRecordings: Media[] = [
  {
    src: "/generative-ui/ios-laptops.gif",
    alt: "Prism on iOS: comparing laptops in a chat",
    caption: "Comparing laptops, on iOS.",
    kind: "gif",
  },
  {
    src: "/generative-ui/android-booking.gif",
    alt: "Prism on Android: a booking flow in a chat",
    caption: "Booking a table, on Android.",
    kind: "gif",
  },
];

const reliabilityMedia: Media[] = [
  {
    src: "/generative-ui/streaming.gif",
    alt: "Prism on iOS: an answer streaming in, then a diagram screen landing",
    caption: "The answer streams in, then the screen lands.",
    kind: "gif",
  },
  {
    src: "/generative-ui/ios-broken.jpg",
    alt: "A screen with broken parts: only those parts disappear",
    caption: "Two broken parts. Only they disappear.",
    kind: "shot",
  },
];

// What ChatGPT's model wrote (trimmed from a real reply)
const dilSource = `{@body const [count,setCount] = DIL.useState(0)}

<box background={dark?"#10121B":"#F3F5FA"} radius="xl" padding={3}>
  <title size="2xl">{count}</title>
  <text size="sm">Counter state</text>
  <row gap={2}>
    <button onClick={()=>setCount(count-1)}><icon name="minus"/></button>
    <button onClick={()=>setCount(count+1)}><icon name="plus"/></button>
  </row>
</box>`;

// What OpenAI's server turned it into (trimmed)
const dilCompiled = `const [count, setCount] = DIL.useState(0, { key: "count" });

__dilSafe(() => __dil.jsx("text", { size: "sm" }, __dilConstants["12"]), null),
__dilSafe(() => __dil.jsx("button",
  { onClick: () => setCount(count + 1) },
  __dil.jsx("icon", { name: "plus" })
), null)`;

// The same counter, as Prism's model writes it
const prismSource = `const [count, setCount] = useState(0)

<Card title="Counter">
  <Stat label="Count" value={count} />
  <Text secondary>{count === 0 ? "Tap a button" : count > 0 ? "Going up" : "Going down"}</Text>
  <Row tight>
    <Button onPress={() => setCount(count - 1)}>-1</Button>
    <Button main onPress={() => setCount(count + 1)}>+1</Button>
    <Button danger disabled={count === 0} onPress={() => setCount(0)}>Reset</Button>
  </Row>
</Card>`;

// The same counter after Prism's compiler (shortened)
const prismCompiled = `P.screen(function (S, T) {
  const count = S.count;
  const setCount = function (v) { P.tick(); S.count = v; };
  return P.el("Card", "n0", { title: T[2] }, [
    P.safe("n1", () => P.el("Text", "n1", null, [T[0], count])),
    P.safe("n2", () => P.el("Button", "n2", {
      onPress: P.on("h0", () => (P.tick(), setCount(count + 1)))
    }, [T[1]]))
  ]);
});`;

function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <span className={styles.eyebrow}>
      <span className={styles.eyebrowNum}>{n}</span>
      {children}
    </span>
  );
}

function Figures({
  items,
  priority,
  onOpen,
}: {
  items: Media[];
  priority?: boolean;
  onOpen: (items: Media[]) => void;
}) {
  return (
    <div className={styles.figureRow}>
      {items.map((m) => (
        <figure key={m.src} className={styles.figure}>
          <button
            type="button"
            className={m.kind === "gif" ? styles.gifFrame : styles.shotFrame}
            onClick={() => onOpen(items)}
            aria-label={`Open: ${m.alt}`}
          >
            <Image
              src={m.src}
              alt={m.alt}
              fill
              unoptimized={m.kind === "gif"}
              priority={priority}
              sizes="250px"
              className={styles.shotImage}
            />
          </button>
          <figcaption className={styles.figcaption}>{m.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function GenerativeUiPage() {
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[] | null>(null);

  const openLightbox = (items: Media[]) => setLightboxImages(items.map(({ src, alt }) => ({ src, alt })));
  const closeLightbox = () => setLightboxImages(null);

  return (
    <div className={styles.page}>
      {lightboxImages && <ImageLightbox images={lightboxImages} onClose={closeLightbox} />}

      <header className={styles.header}>
        <a href="/" className={styles.headerName}>Abhishek Bansal</a>
        <nav className={styles.nav}>
          <a href="/Abhishek_Bansal_Resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
          <a href="mailto:bansalabhishek7411@gmail.com">contact</a>
        </nav>
      </header>

      <main className={styles.main}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.label}>Prism &bull; Open source SDK &bull; Nov 2026 &bull; 8 min read</span>

            <h1 className={styles.title}>ChatGPT&apos;s widgets aren&apos;t web pages.</h1>
            <p className={styles.subtitle}>
              I took the app apart to see how it draws them, then rebuilt the idea as an open SDK.
            </p>

            <p className={styles.intro}>
              Ask ChatGPT on an iPhone for a tip calculator and you get one: real sliders, real
              text fields, numbers that change as you drag. I assumed it was a web page in a frame,
              like every other AI widget. It isn&apos;t. The model writes a small program, and the
              app draws it with native views, using Snap&apos;s open-source Valdi.
            </p>
            <p className={styles.intro}>
              This post is what I found inside ChatGPT, and Prism, the SDK I built so any app can
              do the same.
            </p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Code</span>
                <span className={styles.metaValue}>
                  <a href={REPO_URL} target="_blank" rel="noopener noreferrer">github.com/RunTerror/prism</a>
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Runs on</span>
                <span className={styles.metaValue}>iOS · Android · Flutter · Web · Electron</span>
              </div>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <Figures items={[hero]} priority onOpen={openLightbox} />
          </div>
        </section>

        {/* ── 01 ── */}
        <section className={styles.section}>
          <Eyebrow n="01">The field</Eyebrow>
          <h2 className={styles.heading}>Three ways to put UI in a chat</h2>
          <p className={styles.sectionText}>
            Ask how AI apps show UI and the usual answer is: a web page in a sandbox. That&apos;s
            how ChatGPT apps from other companies work. They&apos;re built on MCP Apps, a shared
            standard that Claude and VS Code also support: a tool returns an HTML page, and the
            chat loads it in a locked-down iframe. Claude artifacts work the same way, and
            Gemini&apos;s dynamic view writes a whole web app for one prompt.
          </p>
          <p className={styles.sectionText}>That&apos;s one of three approaches:</p>
          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr><th></th><th>Web code</th><th>Named parts</th><th>Code, drawn natively</th></tr>
              </thead>
              <tbody>
                <tr><td>Who</td><td>MCP Apps, Claude artifacts, Gemini</td><td>Google A2UI, Vercel json-render</td><td>ChatGPT&apos;s own answers, Prism</td></tr>
                <tr><td>Model sends</td><td>HTML / JS</td><td>JSON</td><td>Small JSX program</td></tr>
                <tr><td>Drawn by</td><td>iframe / web view</td><td>The app</td><td>The app</td></tr>
                <tr><td>Logic on screen</td><td>Yes</td><td>Little</td><td>Yes</td></tr>
                <tr><td>Feels like</td><td>A web page</td><td>The app</td><td>The app</td></tr>
              </tbody>
            </table>
          </div>
          <p className={styles.sectionText}>
            Most people only know the first. ChatGPT&apos;s own answers use the third.
          </p>
        </section>

        {/* ── 02 ── */}
        <section className={styles.section}>
          <Eyebrow n="02">The discovery</Eyebrow>
          <h2 className={styles.heading}>No web engine was running</h2>
          <p className={styles.sectionText}>
            In October 2026 I looked at ChatGPT from three sides: the Mac app, taken apart with
            REA and Ghidra; the live system log of an iPhone running ChatGPT; and chatgpt.com in
            Chrome.
          </p>
          <p className={styles.sectionText}>
            The iPhone log gave it away. When a third-party widget opened, a web view started up
            and took about 158&nbsp;MB. When ChatGPT drew its own counter, no web engine ran at all.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>~158 MB</span>
              <span className={styles.statLabel}>Web view for a third-party widget</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>None</span>
              <span className={styles.statLabel}>Web engine for ChatGPT&apos;s own answers</span>
            </div>
          </div>

          <p className={styles.sectionText}>
            The reason is inside the app. In a part called{" "}
            <code className={styles.mono}>OpenAIXPlat</code>, ChatGPT ships Valdi, Snap&apos;s
            open-source framework for building real native screens with TypeScript. It can even
            download new Valdi code later, without an app update.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr><th>Where</th><th>Drawn with</th></tr>
              </thead>
              <tbody>
                <tr><td>iPhone</td><td>Native views, using Snap&apos;s Valdi</td></tr>
                <tr><td>chatgpt.com</td><td>React, straight into the page</td></tr>
                <tr><td>Mac app</td><td>The same React code, since the new Mac app is Electron</td></tr>
                <tr><td>Third-party widgets</td><td>A web view</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 03 ── */}
        <section className={styles.section}>
          <Eyebrow n="03">How it works</Eyebrow>
          <h2 className={styles.heading}>The model writes a program, not a page</h2>
          <p className={styles.sectionText}>Four steps take a reply from the model to your screen:</p>
          <div className={styles.flow}>
            <span className={styles.flowStep}>Model<small>writes JSX + state</small></span>
            <span className={styles.flowArrow}>→</span>
            <span className={styles.flowStep}>Server<small>compiles, checks, adds backup</small></span>
            <span className={styles.flowArrow}>→</span>
            <span className={styles.flowStep}>Hidden sandbox<small>runs the code</small></span>
            <span className={styles.flowArrow}>→</span>
            <span className={styles.flowStep}>App<small>draws native views</small></span>
          </div>

          <h3 className={styles.subheading}><span>1</span>The model writes code, not JSON</h3>
          <p className={styles.sectionText}>
            Inside its normal Markdown reply, the model writes state lines and JSX-style tags.
            OpenAI calls this format DIL.
          </p>

          <h3 className={styles.subheading}><span>2</span>The server compiles it</h3>
          <p className={styles.sectionText}>
            Before it reaches your phone, OpenAI&apos;s server turns that into plain JavaScript
            and ships it in one message, <code className={styles.mono}>model_dil_v2</code>. Here
            is a counter from a real reply, before and after:
          </p>
          <div className={styles.codePair}>
            <div>
              <span className={styles.codeLabel}>What the model wrote</span>
              <pre className={styles.codeBlock}>{dilSource}</pre>
            </div>
            <div>
              <span className={styles.codeLabel}>What the server sent (trimmed)</span>
              <pre className={styles.codeBlock}>{dilCompiled}</pre>
            </div>
          </div>
          <ul className={styles.sectionList}>
            <li>
              <strong>Every part is wrapped</strong> in <code className={styles.mono}>__dilSafe</code>,
              so if one part crashes, only that part disappears.
            </li>
            <li>
              <strong>The words live apart from the code</strong>, in a separate{" "}
              <code className={styles.mono}>constants</code> list. The code only points at them.
            </li>
            <li>
              <strong>Every piece of state gets a name</strong>{" "}
              (<code className={styles.mono}>key: &quot;count&quot;</code>), so the server can save
              it. Come back later and the counter still says 7.
            </li>
            <li>
              <strong>A plain Markdown version travels along</strong>, for anything that can&apos;t
              draw the widget.
            </li>
            <li>
              <strong>Mistakes are fixed, not fatal.</strong> In my sample the model used a{" "}
              <code className={styles.mono}>&lt;span&gt;</code>, which isn&apos;t a DIL part. The
              compiler dropped it and wrote down why.
            </li>
          </ul>

          <h3 className={styles.subheading}><span>3</span>A hidden sandbox runs it</h3>
          <p className={styles.sectionText}>
            On chatgpt.com there&apos;s one invisible iframe for the whole page, allowed to run
            scripts and nothing else. Inside it a Web Worker runs the model&apos;s code. A tap goes
            in as a small message (&quot;run callback 62&quot;), and the whole updated screen comes
            back out as a tree.
          </p>

          <h3 className={styles.subheading}><span>4</span>The app draws the tree with its own parts</h3>
          <p className={styles.sectionText}>
            On iPhone that means native views through Valdi. On the web it&apos;s React, and the
            Mac app reuses the same React code.
          </p>

          <p className={styles.note}>
            What I still don&apos;t know: exactly how the iPhone turns the tree into Valdi views
            (App Store protection hides the code), whether short text replies go through it too,
            and Android, which I didn&apos;t check.
          </p>
        </section>

        {/* ── 04 ── */}
        <section className={styles.section}>
          <Eyebrow n="04">Why it matters</Eyebrow>
          <h2 className={styles.heading}>Code carries logic. JSON can&apos;t.</h2>
          <p className={styles.sectionText}>
            Sending JSON only describes a layout. A counter, a checklist that counts what&apos;s
            done, a quiz that marks your answer: all of these need logic. With JSON, every tap goes
            back to the model or needs a special component.
          </p>
          <p className={styles.sectionText}>
            Sending code carries the logic. Tap +1 and the number changes on the phone, with no
            round trip. And because the app draws the result with its own parts, it still looks,
            scrolls and feels like the app. The sandbox keeps the code away from everything else.
          </p>
        </section>

        {/* ── 05 ── */}
        <section className={styles.section}>
          <Eyebrow n="05">Prism</Eyebrow>
          <h2 className={styles.heading}>The same idea, for any app</h2>
          <p className={styles.sectionText}>
            ChatGPT keeps all of this to itself. I wanted it for my own apps, and finding Valdi
            inside ChatGPT is what gave me the idea:
          </p>
          <blockquote className={styles.pullQuote}>
            If Valdi can draw OpenAI&apos;s answers natively, it can draw anyone&apos;s.
          </blockquote>
          <p className={styles.sectionText}>
            So Prism keeps ChatGPT&apos;s design. The model writes JSX with{" "}
            <code className={styles.mono}>useState</code> inside a normal answer. A server compiler
            checks it, fixes what it can and adds a Markdown backup. Every part is wrapped, the
            words are kept apart from the code, and the state comes back after every tap, so the app
            can save it and restore the screen later. Here is the same counter in both:
          </p>
          <div className={styles.codePair}>
            <div>
              <span className={styles.codeLabel}>ChatGPT (DIL)</span>
              <pre className={styles.codeBlock}>{dilSource}</pre>
            </div>
            <div>
              <span className={styles.codeLabel}>Prism</span>
              <pre className={styles.codeBlock}>{prismSource}</pre>
            </div>
          </div>
          <Figures items={prismShots} onOpen={openLightbox} />
        </section>

        {/* ── 06 ── */}
        <section className={styles.section}>
          <Eyebrow n="06">The big difference</Eyebrow>
          <h2 className={styles.heading}>The model says what. The app decides how.</h2>
          <p className={styles.sectionText}>
            In ChatGPT the model writes hex colours into the code, like{" "}
            <code className={styles.mono}>#10121B</code>. That works when the model and the app come
            from the same company. Prism goes into other people&apos;s apps, so the model only says
            what something means: <code className={styles.mono}>main</code>,{" "}
            <code className={styles.mono}>danger</code>. The app&apos;s design tokens decide what it
            looks like, in light and dark.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr><th></th><th>ChatGPT (DIL)</th><th>Prism</th></tr>
              </thead>
              <tbody>
                <tr><td>Looks</td><td>The model picks colours</td><td>Meaning only. The app&apos;s design decides.</td></tr>
                <tr><td>Hooks</td><td>13, including <code className={styles.mono}>useEffect</code> and <code className={styles.mono}>useNow</code></td><td>Only <code className={styles.mono}>useState</code></td></tr>
                <tr><td>Syntax</td><td>JSX mixed with Svelte-style <code className={styles.mono}>{"{#each}"}</code></td><td>Plain JSX and <code className={styles.mono}>.map</code></td></tr>
                <tr><td>Parts</td><td>About 45, all drawn by the app</td><td>39 parts that expand into 15 basic blocks. New parts can ship from the server.</td></tr>
                <tr><td>Real actions</td><td>Open a link, copy, send a message and a few more</td><td>The same, plus actions behind a <code className={styles.mono}>&lt;Confirm&gt;</code> tap</td></tr>
                <tr><td>Models</td><td>OpenAI&apos;s</td><td>Any: inline, or as a tool for Anthropic, OpenAI or MCP</td></tr>
              </tbody>
            </table>
          </div>
          <p className={styles.sectionText}>
            The model learns all of this from one prompt, built from the part catalog. Four rules
            do most of the work:
          </p>
          <ul className={styles.sectionList}>
            <li><strong>Only meaning, never looks.</strong> No colours, sizes, spacing or fonts.</li>
            <li><strong>Only useState.</strong> No other hooks, no fetch, no timers, no window.</li>
            <li>
              <strong>Leave the screen through P.</strong> <code className={styles.mono}>P.ask</code>{" "}
              sends a message as the user. <code className={styles.mono}>P.open</code>,{" "}
              <code className={styles.mono}>P.copy</code> and <code className={styles.mono}>P.toast</code>{" "}
              do what they say.
            </li>
            <li><strong>Only parts from the list.</strong> Card, Stat, Quiz, Choice, Carousel, Steps, Chart, Confirm and the rest.</li>
          </ul>
        </section>

        {/* ── 07 ── */}
        <section className={styles.section}>
          <Eyebrow n="07">Under the hood</Eyebrow>
          <h2 className={styles.heading}>From text to native views</h2>
          <ol className={styles.steps}>
            <li>
              <strong>Compile on the server.</strong> Babel reads the block, turns each{" "}
              <code className={styles.mono}>useState</code> into a state box, checks every part
              and prop against the catalog, and turns tags into plain calls.
            </li>
            <li>
              <strong>Ship an envelope.</strong> JSON with the compiled code, the starting state,
              the words, the parts it uses and a Markdown backup.
            </li>
            <li>
              <strong>Run it in a sandbox.</strong> One small runtime file runs on every platform.
              It only takes and returns text: <code className={styles.mono}>load(id, envelope)</code>{" "}
              and <code className={styles.mono}>event(id, handler, value)</code>, which give back
              the new tree.
            </li>
            <li>
              <strong>Draw 15 blocks.</strong> The 39 parts expand into box, text, image, button,
              switch, slider, input, chart and a few more. Each platform only draws those 15.
            </li>
          </ol>
          <details className={styles.details}>
            <summary>See the counter after Prism&apos;s compiler</summary>
            <pre className={styles.codeBlock}>{prismCompiled}</pre>
          </details>
          <p className={styles.sectionText}>
            On iOS and Android the 15 blocks become real UIViews and Android Views through Valdi,
            just like in ChatGPT&apos;s iPhone app. A SwiftUI and a Compose wrapper sit on top, so
            it drops into an existing app. Flutter shows the same native views. The web draws them
            with React, and Electron reuses the web app.
          </p>
          <Figures items={platformRecordings} onOpen={openLightbox} />
        </section>

        {/* ── 08 ── */}
        <section className={styles.section}>
          <Eyebrow n="08">Holding up</Eyebrow>
          <h2 className={styles.heading}>A mistake should cost one part</h2>
          <p className={styles.sectionText}>
            <strong>Streaming.</strong> While the model types, the server cuts the text at the last
            full line, closes any open tags and tries to compile it. If that fails it backs off a
            few lines. Only a version that compiles goes to the app, so the screen never shows
            half-broken.
          </p>
          <p className={styles.sectionText}>
            <strong>When the model gets it wrong.</strong> It will. Unknown parts and made-up props
            are dropped with a warning. A crash hides only the part that crashed. Endless loops are
            stopped. If nothing can be drawn, the reader still gets the text. In tool mode the
            problems go back to the model so it can try again.
          </p>
          <Figures items={reliabilityMedia} onOpen={openLightbox} />
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>0 / 200</span>
              <span className={styles.statLabel}>Answers that crashed, with Claude Haiku</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>30 / 30</span>
              <span className={styles.statLabel}>Clean answers with the latest prompt, in two runs</span>
            </div>
          </div>
          <p className={styles.sectionText}>
            The most common fix the compiler made was a made-up prop on{" "}
            <code className={styles.mono}>&lt;Text&gt;</code>.
          </p>
        </section>

        {/* ── 09 ── */}
        <section className={styles.section}>
          <Eyebrow n="09">What&apos;s next</Eyebrow>
          <h2 className={styles.heading}>What it can&apos;t do yet</h2>
          <p className={styles.sectionText}>
            Screens can&apos;t fetch data or run timers, and the model can only use parts from the
            list. Both are on purpose: the app owns the network, the look and the actions. React
            Native through Expo isn&apos;t done yet.
          </p>
          <p className={styles.sectionText}>
            If you&apos;re building a chat app and want answers that feel like your app, not a web
            page, have a look. It&apos;s open source under Apache 2.0.
          </p>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Prism on GitHub
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerName}>Abhishek Bansal &copy; 2026</span>
      </footer>
    </div>
  );
}
