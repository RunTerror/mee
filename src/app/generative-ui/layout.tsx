import type { Metadata } from "next";

const title = "ChatGPT's widgets aren't web pages";
const description =
  "I took ChatGPT apart to see how it turns model-written code into native screens, then rebuilt it as Prism, an open SDK for iOS, Android, Flutter and the web.";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishekhq.com"),
  title: `${title} — Abhishek Bansal`,
  description,
  openGraph: {
    title,
    description,
    url: "/generative-ui",
    type: "article",
    images: [{ url: "/generative-ui/ios-chat-parts.jpg", width: 720, height: 1563 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@apphishek",
    images: ["/generative-ui/ios-chat-parts.jpg"],
  },
};

export default function GenerativeUiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
