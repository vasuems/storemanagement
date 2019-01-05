import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => {
  return (
    <ContentLoader
      height={200}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ddd"
    >
      <rect x="25" y="15" rx="4" ry="4" width="359" height="12" />
      <rect x="25" y="40" rx="4" ry="4" width="359" height="15" />
      <rect x="25" y="70" rx="4" ry="4" width="359" height="15" />
      <rect x="25" y="100" rx="4" ry="4" width="359" height="15" />
      <rect x="25" y="130" rx="4" ry="4" width="359" height="15" />
      <rect x="25" y="160" rx="4" ry="4" width="359" height="15" />
    </ContentLoader>
  );
};

export default Loader;