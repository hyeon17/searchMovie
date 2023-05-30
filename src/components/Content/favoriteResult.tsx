import * as S from '@/styles/Content.styles';
import { theme } from '@/styles/theme.styles';

function FavoriteResult({ hasItem }: any) {
  const itemList = JSON.parse(localStorage.getItem('fid') || '[]');

  return (
    <>
      <S.ContentResult>
        {hasItem ? (
          <>
            총 <span style={{ color: theme.colors.red }}>{itemList.length}</span>개의 영화를 즐겨찾기 했습니다.
          </>
        ) : (
          <span>즐겨찾기에 추가된 영화가 없습니다.</span>
        )}
      </S.ContentResult>
    </>
  );
}

export default FavoriteResult;
