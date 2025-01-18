import Head from "next/head";

const SEO = ({ title, description, image, url }) => (
  <>
    <Head>
      <title>{title} - Your Website</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://mydomain.com",
            "@type": "WebPage",
            name: title,
            description: description,
            url: url
          }),
        }}
      />
    </Head>

    
  </>
);

export default SEO;

