import React, { lazy, Suspense } from 'react';

const LazyTable = lazy(() => import('./Table'));

const Table = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTable data={[
  {date:'2019-10-20', race:'Toronto Waterfront Marathon', km:'42.2', time: '4:17:17'}]} {...props} />
  </Suspense>
);

export default Table;
