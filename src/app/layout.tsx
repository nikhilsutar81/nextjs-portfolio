import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/components/providers/modal-provider";
import { Bree_Serif, Eagle_Lake, Inter, Lato } from 'next/font/google'
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nikhil Sutar | Full-Stack Web Developer",
  description: "Portfolio of Nikhil Sutar, MERN-stack & AI/ML enthusiast based in Mumbai.",
  alternates: { canonical: "https://kineshlohar.vercel.app/" },
  icons: {
    icon: '/logo.png',
    other: [
      {
        rel: 'canonical',
        url: 'https://kineshlohar.vercel.app/',
      },
      // Social Media Links
      { rel: 'me', url: 'https://x.com/nikhilsutar_' },
      { rel: 'me', url: 'https://www.linkedin.com/in/nikhil-sutar-25a7702b2' },
      { rel: 'me', url: 'https://github.com/nikhilsutar81' },
      { rel: 'me', url: 'https://www.instagram.com/nikkkhil.77' },
    ],
  },
  openGraph: {
    title: "Nikhil Sutar | Full-Stack Web Developer",
    description: `
    I'm Nikhil Sutar, a full-stack software developer passionate about building interactive, performant web apps.
    Nikhil Sutar specializes in Next.js, React, Node.js, and MongoDB—crafting pixel-perfect UI and scalable backends.
    With hands-on experience in AI/ML integration and modern DevOps pipelines, Nikhil Sutar delivers robust, elegant solutions.
  `.trim().replace(/\s+/g, ' '),
    url: "https://kineshlohar.vercel.app/",
    siteName: "Nikhil Sutar Full stack developer personal portfolio dynamic website",
    images: [
      { url: "https://kineshlohar.vercel.app/og-banner.png", width: 1200, height: 630 }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nikhilsutar_",
    creator: "@nikhilsutar_",
    title: "Nikhil Sutar | MERN Stack Developer",
    description: "Follow Nikhil Sutar for clean code, scalable web apps, and modern full-stack development using Next.js, Tailwind, and AI/ML."
  },
  keywords: [
    'Nikhil Sutar',
    'Nikhil Sutar portfolio',
    'Full-stack developer India',
    'Next.js developer',
    'React developer',
    'Node.js developer',
    'MERN stack developer',
    'MongoDB expert',
    'AI/ML web developer',
    'Freelance web developer',
    'Responsive web apps',
    'Dark mode developer',
    'TypeScript developer',
    'Web performance optimization',
    'Web developer Mumbai',
    'Cloudinary image upload',
    'SEO optimized portfolio',
    'DevOps and CI/CD developer',
    'Open Graph metadata',
    'Software engineer India',
    'Frontend and backend engineer',
  ],
  verification: {
    google: "a03BjLVPwh2y04RlnKD-GgSxWiLZKYo1DWBpD8dK6AU"
  }
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const breeserif = Bree_Serif({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-breeserif',
})

const eaglelake = Eagle_Lake({
  weight: "400",
  subsets: ['latin'],
  fallback: ['var(--font-breeserif)', 'serif'],
  variable: '--font-eaglelake'
})

const lato = Lato({
  weight: "400",
  subsets: ['latin'],
  fallback: ['var(--font-lato)', 'serif'],
  variable: '--font-lato'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning
      className={`${inter.className} ${breeserif.variable} ${eaglelake.variable} ${lato.variable}`}
    >
      <Head>
        <link rel="me" href="https://x.com/kinesh_lohar" />
        <link rel="me" href="https://www.linkedin.com/in/kineshlohar" />
        <link rel="me" href="https://github.com/kineshlohar" />
        <link rel="me" href="https://www.freecodecamp.org/fcc59cce604-c645-497c-a473-73b95c9182d1" />
        <link rel="me" href="https://www.hackerrank.com/kineshlohar" />
        <link rel="me" href="https://www.instagram.com/kinesh_malviya" />
        <link rel="me" href="https://www.snapchat.com/add/kinesh123" />
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="a03BjLVPwh2y04RlnKD-GgSxWiLZKYo1DWBpD8dK6AU" />
      </Head>
      <body
        className={cn(
          `antialiased vsc-initialized `,
          'bg-slate-50 dark:bg-black min-h-screen scroll-smooth'
        )
        }
      >
        <ThemeProvider
          attribute='class'
          defaultTheme="dark"
          enableSystem={true}
          storageKey="='discord-theme"
        >
          <ModalProvider />
          {children}
        </ThemeProvider>


        <Script
          id="jsonLd"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kinesh Lohar",
              "url": "https://kineshlohar.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/kineshlohar",
                "https://github.com/kineshlohar",
                "https://twitter.com/kineshlohar",
                "https://www.instagram.com/kinesh_malviya",
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": { "@type": "Organization", "name": "I-Pangram Digital Service LLP" },
              "address": { "@type": "PostalAddress", "addressLocality": "Mumbai", "addressCountry": "IN" }
            })
          }}
        />
      </body>
    </html>
  );
}
