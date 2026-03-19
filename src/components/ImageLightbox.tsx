"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./ImageLightbox.module.css";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  onClose: () => void;
}

export default function ImageLightbox({ images, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={styles.item}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <Image src={img.src} alt={img.alt} fill className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
