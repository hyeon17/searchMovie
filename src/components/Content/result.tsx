import * as S from '@/styles/Content.styles';
import { theme } from '@/styles/theme.styles';

function Result({ content }:any) {
  return (
    <>
      {content === '' ? (
        <S.ContentResult>
          <span style={{ zIndex: 1 }}>보고싶은 영화의 정보를 찾아보세요</span>
        </S.ContentResult>
      ) : (
        <S.ContentResult>
          <span style={{ zIndex: 1 }}>
            총 <span style={{ color: theme.colors.red }}>{content.totalResults}</span>개의 영화가 검색되었습니다.
          </span>
        </S.ContentResult>
      )}
    </>
  );
}

export default Result;