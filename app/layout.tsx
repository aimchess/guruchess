// app/layout.tsx
import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Guru Chess Academy - Turning Interest into Passion | Top Coaching in Indirapuram',
    template: '%s | Guru Chess Academy',
  },
  description:
    'Master chess at Guru Chess Academy, the premier Chess Academy. Professional coaching in Indirapuram, Ghaziabad and online, led by expert mentors for all skill levels.',
  keywords: [
    'Guru Chess Academy',
    'Chess Academy',
    'Chess Coaching Indirapuram',
    'Chess Classes Ghaziabad',
    'Best Chess Academy Delhi NCR',
    'Pradeep Pathak Chess',
    'Learn Chess Online',
    'FIDE Rated Coaches',
    'Tournament Preparation',
    'Chess for Kids Indirapuram',
  ],
  metadataBase: new URL('https://www.guruchessacademy.com'),
  alternates: {
    canonical: 'https://www.guruchessacademy.com',
  },
  authors: [{ name: 'Guru Chess Academy', url: 'https://www.guruchessacademy.com' }],
  creator: 'Guru Chess Academy',
  publisher: 'Guru Chess Academy',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Guru Chess Academy - Turning Interest into Passion',
    description: 'World-class chess training academy in Indirapuram, Ghaziabad led by expert mentors.',
    url: 'https://www.guruchessacademy.com',
    siteName: 'Guru Chess Academy',
    images: [
      {
        url: 'https://www.guruchessacademy.com/guru-logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Guru Chess Academy Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guru Chess Academy | Professional Chess Mentorship',
    description: 'Elite chess training for beginners and competitive players.',
    images: ['https://www.guruchessacademy.com/guru-logo.jpeg'],
  },
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        
        {/* Brand Theme Color - Deep Blue */}
        <meta name="theme-color" content="#2B5292" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'EducationalOrganization',
                name: 'Guru Chess Academy',
                url: 'https://www.guruchessacademy.com',
                logo: 'https://www.guruchessacademy.com/guru-logo.jpeg',
                description: 'Professional chess training academy providing FIDE-standard coaching for students of all ages.',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Sunrise School, near gate number 2, Shipra Sun City, Indirapuram',
                  addressLocality: 'Ghaziabad',
                  addressRegion: 'Uttar Pradesh',
                  postalCode: '201014',
                  addressCountry: 'IN',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+91-9911289767',
                  email: 'guruchessacademy@gmail.com',
                  contactType: 'Customer Service'
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '210',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Mr. Pradeep Pathak',
                jobTitle: 'Founder & Chief Mentor',
                affiliation: {
                  '@type': 'Organization',
                  name: 'Guru Chess Academy'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Where is Guru Chess Academy located?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Guru Chess Academy is located at Sunrise School, Shipra Sun City, Indirapuram, Ghaziabad, Uttar Pradesh.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What levels of chess do you teach?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We offer structured courses for all levels: Beginner (Pawn), Intermediate (Knight), Advanced (Rook), and Master (King) levels.'
                    }
                  }
                ]
              }
            ]),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}