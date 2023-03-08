import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import React from "react";

import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});




export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <Component {...pageProps} />
      <AnimatedCursor
      innerSize={12}
      outerSize={14}
      color='255, 255, 255'
      outerAlpha={0.1}
      innerScale={0.7}
      outerScale={1.2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}
