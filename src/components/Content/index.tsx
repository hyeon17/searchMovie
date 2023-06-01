import * as S from '@/styles/Content.styles';
import Skeleton from '@/components/Skeleton';
import SearchResult from '@/components/Content/searchResult';
import { useModalStore } from '@/store/modalStore';
import Modal from '@/components/Modal';
import Pagination from '@/components/Pagination';
import FavoriteResult from '@/components/Content/favoriteResult';
import Container from '@/components/Content/containder';

function Content({ content, loading, favorite, item }: any) {
  const { isOpen } = useModalStore();

  return (
    <>
      {favorite ? <FavoriteResult hasItem={item} /> : <SearchResult content={content} />}
      <S.ContentWrapper>
        {content.Response === 'False' || content.Response === '' ? (
          <></>
        ) : (
          <S.ContentContainer>
            {loading ? (
              <Skeleton width={270} height={300} count={9} />
            ) : (
              <>
                <Container content={content} />
                <Pagination content={content} />
              </>
            )}
            {isOpen && <Modal />}
          </S.ContentContainer>
        )}
      </S.ContentWrapper>
    </>
  );
}

export default Content;
