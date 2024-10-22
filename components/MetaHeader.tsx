import React from "react";
import Head from "next/head";

export const MetaHeader = () => {
  return (
    <Head>
      <title>Laurent Balayre: Entrepreneur and Investor</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Discover the story of Laurent Balayre, a seasoned entrepreneur and investor. 34 years of innovation and investment in technology."
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Laurent Balayre - Entrepreneur and Investor" />
      <meta property="og:title" content="Laurent Balayre - 34 years of innovation and investment" />
      <meta
        property="og:description"
        content="Explore Laurent Balayre's successes and investments in the technology sector, from AS INFOR to ContentSquare."
      />
      <meta property="og:image" content="https://laurent.balayre.com/preview.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Discover Laurent Balayre's career path, from entrepreneurship to investment in innovative startups."
      />
      <meta name="twitter:image" content="https://laurent.balayre.com/preview.png" />
      <meta
        name="keywords"
        content="Laurent Balayre, Entrepreneur, Investor, Tech, Startup, Innovation, AS INFOR, ContentSquare, SaaS, Retail"
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