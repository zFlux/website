import React, { lazy, Suspense } from 'react';

const LazySvgClock = lazy(() => import('./SvgClock'));

const SvgClock = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySvgClock clockWidth={225} clockHeight={225} {...props} />
  </Suspense>
);

export default SvgClock;
