import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect
      x='39'
      y='180'
      rx='3'
      ry='3'
      width='52'
      height='6'
    />
    <rect
      x='0'
      y='279'
      rx='3'
      ry='3'
      width='280'
      height='90'
    />
    <rect
      x='0'
      y='389'
      rx='3'
      ry='3'
      width='90'
      height='30'
    />
    <circle
      cx='133'
      cy='120'
      r='120'
    />
    <rect
      x='1'
      y='248'
      rx='20'
      ry='20'
      width='280'
      height='17'
    />
    <rect
      x='125'
      y='378'
      rx='3'
      ry='3'
      width='152'
      height='45'
    />
  </ContentLoader>
);

export default Skeleton;
