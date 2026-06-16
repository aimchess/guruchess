import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  structuredData?: object;
  canonical?: string;
}

export default function Seo({ title, description, keywords, structuredData, canonical }: SeoProps) {
  const defaultCanonical = "https://www.guruchessacademy.com";
  const finalCanonical = canonical ?? defaultCanonical;

  return (
    <Head>
      {title && <title>{title} | Guru Chess Academy</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={finalCanonical} />
      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/guru-logo.jpeg" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content="/guru-logo.jpeg" />
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
