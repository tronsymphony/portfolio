import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import '../styles/hubspot.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
        <GoogleAnalytics trackPageViews gaMeasurementId="UA-80037917-1" />
        <Component {...pageProps} />
    </div>
  );
}
