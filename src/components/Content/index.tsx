import * as S from '@/styles/Content.styles';
import Card from '@/components/Card';
import Skeleton from '@/components/Skeleton';
import Result from '@/components/Content/result';
import { useModalStore } from '@/store/modalStore';
import Modal from '@/components/Modal';
import { useIdStore } from '@/store/idStore';

function Content({ content, loading }: any) {
  const { setOpen, isOpen } = useModalStore();
  const { setId } = useIdStore();
  
  const handleClickCard = (imdbID: number) => {
    setId(imdbID);
    setOpen();
  };

  return (
    <>
      <Result content={content} />
      <S.ContentWrapper>
        {content === '' ? (
          <></>
        ) : (
          <S.ContentContainer>
            {loading ? (
              <Skeleton width={270} height={300} count={9} />
            ) : (
              <>
                {content.Search.map((data: any, idx: number) => (
                  <S.CardWrapper key={idx} onClick={() => handleClickCard(data.imdbID)}>
                    <Card
                      style={{ width: 270 }}
                      image={
                        data.Poster === 'N/A' ? (
                          <img src="../../../public/no_image.png" alt="no_image" />
                        ) : (
                          <img src={data.Poster} alt="poster" />
                        )
                      }
                      title={data.Title}
                      description={data.Year}
                    />
                  </S.CardWrapper>
                ))}
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
