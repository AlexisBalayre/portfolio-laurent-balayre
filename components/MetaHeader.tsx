import React from "react";
import Head from "next/head";

export const MetaHeader = () => {
  return (
    <Head>
      <title>Laurent Balayre: Investisseur</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Find out more about Laurent Balayre's career. Explore his projects and skills today."
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Laurent Balayre - ISEP Engineer" />
      <meta property="og:title" content="Laurent Balayre - ISEP Engineer" />
      <meta
        property="og:description"
        content="Find out more about Laurent Balayre's career. Explore his projects and skills today."
      />
      <meta property="og:image" content="https://Laurent.balayre.com/preview.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Find out more about Laurent Balayre's career. Explore his projects and skills today."
      />
      <meta name="twitter:image" content="https://Laurent.balayre.com/preview.png" />
      <meta
        name="keywords"
        content="Laurent Balayre, French, ISEP, Paris"
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
