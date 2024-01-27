import React from 'react';
import { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen bg-black flex flex-col justify-between">
      <Navbar />
      <div className="mb-auto mt-5">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;