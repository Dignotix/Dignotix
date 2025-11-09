import { Helmet } from 'react-helmet-async';

export default function MetaHead({ 
  title = "Dignotix — Empower Tomorrow's Health",
  description = "Making medical tests faster and cheaper. Portable, wearable, and smart diagnostic devices.",
  image = "/images/hero_logo_with_tagline.png",
  url = "https://dignotix.com"
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
