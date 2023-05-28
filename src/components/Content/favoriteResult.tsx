import React from 'react';
import * as S from '@/styles/Content.styles';
import { theme } from '@/styles/theme.styles';

function FavoriteResult({hasItem}: any) {
  return (
    <>
      <S.ContentResult>
        {hasItem ? (
          <>
            총 <span style={{ color: theme.colors.red }}>10</span>개의 영화를 즐겨찾기 했습니다.
          </>
        ) : (
          <span>즐겨찾기에 추가된 영화가 없습니다.</span>
        )}
      </S.ContentResult>
    </>
  );
}

export default React.memo(FavoriteResult);
