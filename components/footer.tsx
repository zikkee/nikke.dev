import React from 'react';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-5 rounded-t-3xl">
            <p className='text-center'>© {currentYear} NikkeDev</p>
            <p className='text-center'>Source code available on <Link href="https://github.com/zikkee/nikke.dev" passHref className='underline'>GitHub</Link></p>
        </div>
    </footer>
  );
}

export default Footer;
