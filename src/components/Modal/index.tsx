import * as S from '@/styles/Modal.styles';
import { useModalStore } from '@/store/modalStore';
import { useSearchMovieId } from '@/apis';
import { useIdStore } from '@/store/idStore';
import { theme } from '@/styles/theme.styles';
import ModalSkeleton from '@/components/Skeleton/modal';

function Modal() {
  const { setClose, isOpen } = useModalStore();
  const { getId } = useIdStore();
  const { data: res, isLoading } = useSearchMovieId(getId());
  const response = res?.data;

  const renderValue = (value: string) =>
    value === 'N/A' ? <span style={{ color: theme.colors.red }}>데이터 없음</span> : <span>{value}</span>;

  const highImg = (data: any) => {
    return data.replace('SX300', 'SX1080');
  };

  const selectImg = (value: any) => {
    if (value === 'Internet Movie Database') {
      return <img src="../../../public/imdb.png" alt="imdb" width="auto" height={40} />;
    } else if (value === 'Rotten Tomatoes') {
      return <img src="../../../public/tomato.png" alt="rotten" width="auto" height={40} />;
    } else if (value === 'Metacritic') {
      return <img src="../../../public/metacritic.png" alt="metacritic" width="auto" height={40} />;
    }
  };

  return (
    <S.ModalContainer width={1100} title="Movie Details" open={isOpen} onOk={setClose} onCancel={setClose} centered>
      <S.ModalWrapper>
        {isLoading ? (
          <ModalSkeleton />
        ) : (
          response.Response === 'True' && (
            <S.ModalContent>
              <S.ContentImg>
                {response.Poster === 'N/A' ? (
                  <img src="../../../public/no_image.png" alt="no_image" width={300} />
                ) : (
                  <img src={highImg(response.Poster)} alt="poster" width={300} />
                )}
              </S.ContentImg>
              <S.ContentText>
                <p style={{ fontSize: '40px', fontWeight: 'bold' }}>{renderValue(response.Title)}</p>
                <S.ContentTitle>
                  <p>{renderValue(response.Rated)} ·&nbsp;</p>
                  <p>{renderValue(response.Released)} ·&nbsp;</p>
                  <p>{renderValue(response.Runtime)}</p>
                </S.ContentTitle>
                <S.CPlot>{renderValue(response.Plot)}</S.CPlot>
                <S.CDivider>Ratings</S.CDivider>
                <S.CRatings>
                  {response.Ratings.map((rating: any, index: any) => (
                    <S.CImg key={index}>
                      <S.CText>{selectImg(rating.Source)}</S.CText>
                      <S.CText style={{ marginLeft: 10 }}>{renderValue(rating.Value)}</S.CText>
                    </S.CImg>
                  ))}
                </S.CRatings>
                <S.CDivider>
                  Genre
                  <S.CText>{renderValue(response.Genre)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Director
                  <S.CText>{renderValue(response.Director)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Writer
                  <S.CText>{renderValue(response.Writer)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Actors
                  <S.CText>{renderValue(response.Actors)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Language
                  <S.CText>{renderValue(response.Language)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Production
                  <S.CText>{renderValue(response.Production)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Website
                  <S.CText>{renderValue(response.Website)}</S.CText>
                </S.CDivider>
              </S.ContentText>
            </S.ModalContent>
          )
        )}
      </S.ModalWrapper>
    </S.ModalContainer>
  );
}

export default Modal;
