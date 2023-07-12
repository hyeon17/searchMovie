import * as S from '@/styles/Content.styles';
import { theme } from '@/styles/theme.styles';

function FavoriteResult({ hasItem }: { hasItem?: boolean }) {
  const itemList = JSON.parse(localStorage.getItem('fid') || '[]');

  return (
    <>
      <S.ContentResult>
        {hasItem && itemList.length !== 0 ? (
          <S.ContentResult>
            총 <span style={{ color: theme.colors.red }}>{itemList.length}</span>개의 영화를 즐겨찾기 했습니다.
          </S.ContentResult>
        ) : (
          <S.ContentResult>
            <span>즐겨찾기에 추가된 영화가 없습니다.</span>
          </S.ContentResult>
        )}
      </S.ContentResult>
    </>
  );
}

export default FavoriteResult;
