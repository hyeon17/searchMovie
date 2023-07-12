import * as S from '@/styles/Modal.styles';
import { useModalStore } from '@/store/modalStore';
import { searchMovieId } from '@/apis';
import { useIdStore } from '@/store/idStore';
import { theme } from '@/styles/theme.styles';
import ModalSkeleton from '@/components/Skeleton/modal';
import Imdb from '@/assets/imdb.png';
import Tomato from '@/assets/tomato.png';
import Metacritic from '@/assets/Metacritic.png';
import noImg from '@/assets/no_image.png';
import { useQuery } from '@tanstack/react-query';
import { IDetailMovie, Rating } from '@/types/searchMovieId';

function Modal() {
  const { setClose, isOpen } = useModalStore();
  const { getId } = useIdStore();
  const { data: res, isLoading } = useQuery<IDetailMovie>(['movieId'], () => searchMovieId(getId()));

  const renderValue = (value: string) =>
    value === 'N/A' ? <span style={{ color: theme.colors.red }}>데이터 없음</span> : <span>{value}</span>;

  const highImg = (data: string) => {
    return data.replace('SX300', 'SX1080');
  };

  const selectImg = (value: string) => {
    if (value === 'Internet Movie Database') {
      return <img src={Imdb} alt="imdb" width="auto" height={40} />;
    } else if (value === 'Rotten Tomatoes') {
      return <img src={Tomato} alt="rotten" width="auto" height={40} />;
    } else if (value === 'Metacritic') {
      return <img src={Metacritic} alt="metacritic" width="auto" height={40} />;
    }
  };

  return (
    <S.ModalContainer width={1100} title="Movie Details" open={isOpen} onOk={setClose} onCancel={setClose} centered>
      <S.ModalWrapper>
        {isLoading ? (
          <ModalSkeleton />
        ) : (
          res &&
          res.Response === 'True' && (
            <S.ModalContent>
              <S.ContentImg>
                {res.Poster === 'N/A' ? (
                  <img src={noImg} alt="no_image" width={300} />
                ) : (
                  <img src={highImg(res.Poster)} alt="poster" width={300} />
                )}
              </S.ContentImg>
              <S.ContentText>
                <p style={{ fontSize: '40px', fontWeight: 'bold' }}>{renderValue(res.Title)}</p>
                <S.ContentTitle>
                  <p>{renderValue(res.Rated)} ·&nbsp;</p>
                  <p>{renderValue(res.Released)} ·&nbsp;</p>
                  <p>{renderValue(res.Runtime)}</p>
                </S.ContentTitle>
                <S.CPlot>{renderValue(res.Plot)}</S.CPlot>
                <S.CDivider>Ratings</S.CDivider>
                <S.CRatings>
                  {res.Ratings.map((rating: Rating, index: number) => (
                    <S.CImg key={index}>
                      <S.CText>{selectImg(rating.Source)}</S.CText>
                      <S.CText style={{ marginLeft: 10 }}>{renderValue(rating.Value)}</S.CText>
                    </S.CImg>
                  ))}
                </S.CRatings>
                <S.CDivider>
                  Genre
                  <S.CText>{renderValue(res.Genre)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Director
                  <S.CText>{renderValue(res.Director)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Writer
                  <S.CText>{renderValue(res.Writer)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Actors
                  <S.CText>{renderValue(res.Actors)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Language
                  <S.CText>{renderValue(res.Language)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Production
                  <S.CText>{renderValue(res.Production)}</S.CText>
                </S.CDivider>
                <S.CDivider>
                  Website
                  <S.CText>{renderValue(res.Website)}</S.CText>
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
