import React, { lazy, Suspense } from 'react';

const LazyRunningTable = lazy(() => import('./RunningTable'));

const RunningTable = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRunningTable {...props} />
  </Suspense>
);

export default RunningTable;
