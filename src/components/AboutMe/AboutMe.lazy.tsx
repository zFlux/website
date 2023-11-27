import React, { lazy, Suspense } from 'react';

const LazyAboutMe = lazy(() => import('./AboutMe'));

const AboutMe = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAboutMe {...props} />
  </Suspense>
);

export default AboutMe;
