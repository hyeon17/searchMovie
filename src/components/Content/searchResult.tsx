import { useOptionStore } from '@/store/optionStore';
import * as S from '@/styles/Content.styles';
import { theme } from '@/styles/theme.styles';

function SearchResult({ content }: any) {
  const { getTitle } = useOptionStore();
  return (
    <>
      {content.Response === '' ? (
        <S.ContentResult>
          <span>보고싶은 영화의 정보를 찾아보세요</span>
        </S.ContentResult>
      ) : content.Error === 'Movie not found!' ? (
        <S.ContentResult>
          <span style={{ color: theme.colors.red }}>{getTitle()}</span>에 대한 검색결과가 없습니다
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

export default SearchResult;
