import React from 'react';
import * as S from '@/styles/Content.styles';
import Card from '@/components/Card';
import Skeleton from '@/components/Skeleton';
import SearchResult from '@/components/Content/searchResult';
import { useModalStore } from '@/store/modalStore';
import Modal from '@/components/Modal';
import Pagination from '@/components/Pagination';
import FavoriteResult from '@/components/Content/favoriteResult';
import noImg from '@/assets/no_image.png';

function Content({ content, loading, favorite, item }: any) {
  const { isOpen } = useModalStore();
  const highImg = (data: any) => {
    return data.replace('SX300', 'SX1080');
  };

  return (
    <>
      {favorite ? <FavoriteResult hasItem={item} /> : <SearchResult content={content} />}
      <S.ContentWrapper>
        {content === '' ? (
          <></>
        ) : (
          <S.ContentContainer>
            {loading ? (
              <Skeleton width={270} height={300} count={9} />
            ) : (
              <>
                <S.PageContainer>
                  {content.Search.map((data: any, idx: number) => (
                    <S.CardWrapper key={idx}>
                      <Card
                        style={{ width: 270 }}
                        image={
                          data.Poster === 'N/A' ? (
                            <img src={noImg} alt="NoImage" />
                          ) : (
                            <img src={highImg(data.Poster)} alt="poster" />
                          )
                        }
                        title={data.Title}
                        description={data.Year}
                        icon={true}
                        data={data}
                      />
                    </S.CardWrapper>
                  ))}
                </S.PageContainer>
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

export default React.memo(Content);
