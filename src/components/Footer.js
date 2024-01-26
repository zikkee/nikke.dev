import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-5 rounded-t-3xl fixed inset-x-0 bottom-0">
            <p className='text-center'>© {currentYear} NikkeDev</p>
            <p className='text-center'>All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
