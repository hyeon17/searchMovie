import React from 'react';
import Content from '@/components/Content';

function FavoritePage() {
  return (
    <>
      <div>즐겨찾기</div>
      <Content content={''} loading={false} />
    </>
  );
}

export default React.memo(FavoritePage);
