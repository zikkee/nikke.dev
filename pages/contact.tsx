import React from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
        <Head>
            <title>Contact | NikkeDev</title>
        </Head>
        <div className="max-w-[800px] m-auto pt-1">
            <h1 className="text-5xl font-bold text-sky-600 md:text-6xl pb-2 m-4">Contact</h1>
            <p className="text-white text-lg mb-2 m-4">
                You can find me on these services:
            </p>
            <ul className="text-white text-lg list-disc list-inside m-4">
                <li>Discord: <span className="hover:text-gray-400">@nikkedev</span></li>
                <li>Instagram: <a href="https://instagram.com/nikkedev" className="underline hover:text-gray-400">@nikkedev</a></li>
                <li>GitHub: <a href="https://github.com/zikkee" className="underline hover:text-gray-400">@zikkee</a></li>
                <li>E-Mail: <a href="mailto:nikke@nikke.dev" className="underline hover:text-gray-400">nikke@nikke.dev</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Contact;