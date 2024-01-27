import Head from 'next/head';

export default function Custom404() {
  return (
    <div>
        <Head>
            <title>Page not found | Testi</title>
        </Head>
        <div className="max-w-[800px] m-auto pt-1">
          <h1 className="text-3xl font-bold text-white mb-4">
              404 - Page not found
          </h1>
          <p className="text-white">Did you write the address correctly?</p>
        </div>
    </div>
  );
  }