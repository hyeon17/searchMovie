import React from 'react';
import * as S from '@/styles/Content.styles';
import { theme } from '@/styles/theme.styles';

function SearchResult({ content }: any) {
  return (
    <>
      {content === '' ? (
        <S.ContentResult>
          <span>보고싶은 영화의 정보를 찾아보세요</span>
        </S.ContentResult>
      ) : (
        <S.ContentResult>
          <span>
            총 <span style={{ color: theme.colors.red }}>{content.totalResults}</span>개의 영화가 검색되었습니다.
          </span>
        </S.ContentResult>
      )}
    </>
  );
}

export default React.memo(SearchResult);
