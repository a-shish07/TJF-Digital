import React from 'react';

let HelmetProvider = null;
try {
  // eslint-disable-next-line global-require
  HelmetProvider = require('react-helmet-async').HelmetProvider;
} catch (e) {
  HelmetProvider = ({ children }) => <>{children}</>;
}

const SeoProvider = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default SeoProvider;