import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
        <Head>
            <title>Home | NikkeDev</title>
        </Head>
        <div className="flex items-center justify-center mt-[25vh] text-center">
          <div>
            <h1 className="text-5xl font-bold text-sky-600 md:text-7xl pb-2">NikkeDev</h1>
            <p className="text-white text-xl pr-2 pl-2">teen who enjoys system administration and coding</p>
          </div>
        </div>
    </div>
  );
}

export default Home;