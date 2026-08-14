"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

// ── Placeholder data (replace with your own) ──────────────────────────────────

const experiences = [
  {
    org: "Thine AI",
    role: "Founding Member, leading Mobile",
    year: "present",
    href: "https://www.thine.com",
  },
  {
    org: "Merlin AI",
    role: "Mobile Lead, driving product experience",
    year: "2024-25",
    href: "https://www.getmerlin.in",
  },
  {
    org: "Google Summer of Code'24",
    role: "Project Lead, CCExtractor",
    year: "2024",
    href: "https://summerofcode.withgoogle.com/archive/2024/projects/ZQ2dbV8z",
  },
];

const academics = [
  {
    org: "Computer Science",
    institution: "BTech · IET Lucknow",
    year: "2021-25",
  },
];

const thinePreviewImages = [
  "/thine/o1.PNG",
  "/thine/o2.PNG",
  "/thine/o3.PNG",
  "/thine/home.PNG",
  "/thine/scratch-pad.PNG",
  "/thine/chat-1.PNG",
  "/thine/chat-2.PNG",
  "/thine/voice-chat.PNG",
];

const merlinPreviewImages = [
  "/merlin/auth.png",
  "/merlin/home.png",
  "/merlin/drawer.png",
  "/merlin/models.png",
  "/merlin/chat.png",
  "/merlin/history.png",
  "/merlin/settings.png",
  "/merlin/home-widget.png",
];

const notesPreviewImages = [
  "/note-taker/home.jpeg",
  "/note-taker/home-1.jpeg",
  "/note-taker/audio.jpeg",
  "/note-taker/note.jpeg",
  "/note-taker/summary.jpeg",
  "/note-taker/profile.jpeg",
  "/note-taker/share.jpeg",
];

type Project = {
  type: "icon-card" | "plain";
  title: string;
  tags: string;
  href: string;
  bg?: string;
  icon?: string;
  previewImages?: string[];
  invertIcon?: boolean;
  iconStyle?: React.CSSProperties;
  external?: boolean;
};

const projects: Project[] = [
  {
    type: "icon-card",
    icon: "/thine/thine-icon.svg",
    previewImages: thinePreviewImages,
    bg: "#f5cece",
    title: "Thine: Personal AI Companion",
    tags: "MOBILE APP • 2025",
    href: "/thine",
    invertIcon: true,
  },
  {
    type: "icon-card",
    icon: "/merlin/merlin.png",
    previewImages: merlinPreviewImages,
    bg: "#bad4eb",
    title: "Merlin: All-in-One AI",
    tags: "MOBILE APP • 2024",
    href: "/merlin",
    invertIcon: false,
    iconStyle: { borderRadius: "22px" },
  },
  {
    type: "icon-card",
    icon: "/note-taker/unnamed.webp",
    previewImages: notesPreviewImages,
    bg: "#eaeaea",
    title: "Notes AI: Intelligent Note Taker",
    tags: "MOBILE APP • 2024",
    href: "/note-taker",
    invertIcon: false,
    iconStyle: { borderRadius: "18px" },
  },
];

// Personal projects — shown as a mini-grid in the left column.
// Cards work two ways:
//  • "plain"     → bg color + title/tags, optional centered icon (no assets needed)
//  • "icon-card" → app icon + hover screenshot carousel (add files under /public/<app>/)
const sideProjects: Project[] = [
  {
    type: "plain",
    bg: "#e8d9c5",
    icon: "/voice-chat/icon.svg",
    title: "Voice Chat: Real-time Conversations",
    tags: "FULL-STACK • 2026",
    href: "/voice-chat",
  },
  {
    type: "plain",
    bg: "#d9e3d0",
    icon: "/morphit/icon.svg",
    title: "Morphit: 3D Shape Morphing",
    tags: "FLUTTER • 2025",
    href: "/morphit",
  },
];

// ── Icon Card Component ──────────────────────────────────────────────────────

function IconCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all carousel images on mount so they're instant on hover
  useEffect(() => {
    if (!project.previewImages) return;
    project.previewImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [project.previewImages]);

  useEffect(() => {
    if (!isHovered || !project.previewImages) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.previewImages!.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered, project.previewImages]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentImageIndex(0);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getPosition = (idx: number) => {
    const total = project.previewImages?.length || 0;
    const diff = idx - currentImageIndex;
    // Normalize to handle wrap-around
    const normalizedDiff = ((diff + total) % total);
    // Items flow: farRight -> right -> center -> left -> farLeft -> exitLeft
    if (normalizedDiff === 0) return "center";
    if (normalizedDiff === 1) return "right";
    if (normalizedDiff === 2) return "farRight";
    if (normalizedDiff === 3) return "enterRight";
    if (normalizedDiff === total - 1) return "left";
    if (normalizedDiff === total - 2) return "farLeft";
    if (normalizedDiff === total - 3) return "exitLeft";
    return "hidden";
  };

  return (
    <a
      href={project.href}
      className={styles.projectCard}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.iconCardThumb} style={project.bg ? { background: project.bg } : undefined}>
        {/* Icon - fades out on hover */}
        <Image
          src={project.icon!}
          alt={project.title}
          width={180}
          height={50}
          priority
          className={`${styles.iconCardImage} ${isHovered && project.previewImages ? styles.iconHidden : ""}`}
          style={{ filter: project.invertIcon === false ? "none" : undefined, ...(project.iconStyle || {}) }}
        />
        {/* Preview images - carousel */}
        {project.previewImages && (
          <div className={`${styles.carouselContainer} ${isHovered ? styles.carouselVisible : ""}`}>
            {project.previewImages.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.carouselItem} ${styles[getPosition(idx)]}`}
              >
                <Image
                  src={img}
                  alt={`${project.title} preview ${idx + 1}`}
                  fill
                  sizes="200px"
                  className={styles.carouselImage}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.projectCaption}>
        <span className={styles.projectTitle}>{project.title}</span>
        <span className={styles.projectTags}>{project.tags}</span>
      </div>
    </a>
  );
}

function renderCard(p: Project, index: number, mini = false) {
  if (p.type === "icon-card") {
    return <IconCard key={p.title} project={p} index={index} />;
  }
  return (
    <a
      key={p.title}
      href={p.href}
      target={p.external ? "_blank" : undefined}
      rel={p.external ? "noopener noreferrer" : undefined}
      className={`${styles.projectCard} ${mini ? styles.miniCard : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.projectThumb} style={p.bg ? { background: p.bg } : undefined}>
        {p.icon && (
          <Image
            src={p.icon}
            alt={p.title}
            width={110}
            height={110}
            className={styles.miniIcon}
            style={p.iconStyle}
          />
        )}
      </div>
      <div className={styles.projectCaption}>
        <span className={styles.projectTitle}>{p.title}</span>
        <span className={styles.projectTags}>{p.tags}</span>
      </div>
    </a>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <a href="/" className={styles.headerName}>
          Abhishek Bansal
        </a>
        <nav className={styles.nav}>
          {/* <a href="#">resume</a> */}
          <a href="mailto:bansalabhishek7411@gmail.com">contact</a>
        </nav>
      </header>

      {/* Main two-column grid */}
      <main className={styles.main}>
        {/* Left column */}
        <div className={styles.left}>
          <h1 className={styles.headline}>
            I make mobile apps, people don’t delete. Built to scale. Built to help.
          </h1>

          <div className={styles.infoGrid}>
            {/* Experience */}
            <div>
              <p className={styles.infoLabel}>Experience</p>
              {experiences.map((e, i) => (
                <div key={i} className={styles.infoItem}>
                  <div className={styles.infoItemLeft}>
                    <a href={e.href} target="_blank" rel="noopener noreferrer" className={styles.orgName}>{e.org}</a>
                    <span className={styles.orgRole}>{e.role}</span>
                  </div>
                  <span className={styles.orgYear}>{e.year}</span>
                </div>
              ))}
            </div>

            {/* Academics */}
            <div>
              <p className={styles.infoLabel}>Academics</p>
              {academics.map((a, i) => (
                <div key={i} className={styles.infoItem}>
                  <div className={styles.infoItemLeft}>
                    <span className={styles.academicName}>{a.org}</span>
                    <span className={styles.orgRole}>{a.institution}</span>
                  </div>
                  <span className={styles.orgYear}>{a.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal projects */}
          <div className={styles.workSection}>
            <p className={styles.infoLabel}>Projects</p>
            <div className={styles.workGrid}>
              {sideProjects.map((p, i) => renderCard(p, projects.length + i, true))}
            </div>
          </div>
        </div>

        {/* Right column — project cards */}
        <div className={styles.right}>
          {projects.map((p, i) => renderCard(p, i))}
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer} id="contact">
        <span className={styles.footerName}>Abhishek Bansal © 2026</span>
        <div className={styles.footerIcons}>
          <a
            href="https://x.com/apphishek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <XIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-bansal-51b1b8227"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:bansalabhishek7411@gmail.com" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </footer>

    </div>
  );
}
