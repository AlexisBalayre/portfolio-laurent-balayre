import React from "react";
import Head from "next/head";

export const MetaHeader = () => {
  return (
    <Head>
      <title>Laurent Balayre: Entrepreneur et Investisseur</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Découvrez le parcours de Laurent Balayre, entrepreneur et investisseur chevronné. 34 ans d'innovation et d'investissements dans le domaine technologique."
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Laurent Balayre - Entrepreneur et Investisseur" />
      <meta property="og:title" content="Laurent Balayre - 34 ans d'innovation et d'investissement" />
      <meta
        property="og:description"
        content="Explorez les succès et les investissements de Laurent Balayre dans le secteur technologique, de AS INFOR à ContentSquare."
      />
      <meta property="og:image" content="https://laurent.balayre.com/preview.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Découvrez le parcours de Laurent Balayre, de l'entrepreneuriat à l'investissement dans des startups innovantes."
      />
      <meta name="twitter:image" content="https://laurent.balayre.com/preview.png" />
      <meta
        name="keywords"
        content="Laurent Balayre, Entrepreneur, Investisseur, Tech, Startup, Innovation, AS INFOR, ContentSquare, SaaS, Retail"
      />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};