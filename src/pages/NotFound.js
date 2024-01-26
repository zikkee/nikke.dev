import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div>
        <Helmet>
            <title>Page not found | Testi</title>
        </Helmet>
        <div className="m-3">
          <h1 className="text-3xl font-bold text-white mb-4">
              404 - Page not found
          </h1>
          <p className="text-white">Did you write the address correctly?</p>
        </div>
    </div>
  );
}

export default NotFound;