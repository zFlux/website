import React, { lazy, Suspense } from 'react';

const LazySkillsBlock = lazy(() => import('./SkillsBlock'));

const SkillsBlock = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySkillsBlock {...props} />
  </Suspense>
);

export default SkillsBlock;
