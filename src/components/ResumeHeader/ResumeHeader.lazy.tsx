import React, { lazy, Suspense } from 'react';

const LazyResumeHeader = lazy(() => import('./ResumeHeader'));

const ResumeHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyResumeHeader {...props} />
  </Suspense>
);

export default ResumeHeader;
