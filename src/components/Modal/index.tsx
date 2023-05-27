import * as S from '@/styles/Modal.styles';
import { useModalStore } from '@/store/modalStore';
import { useSearchMovieId } from '@/apis';
import { useIdStore } from '@/store/idStore';
import { theme } from '@/styles/theme.styles';
import dayjs from 'dayjs';

function Modal() {
  const { setClose, isOpen } = useModalStore();
  const { getId } = useIdStore();
  const { data, error, isLoading } = useSearchMovieId(getId());

  const renderValue = (value: string) =>
    value === 'N/A' ? (
      <span style={{ color: theme.colors.red }}>데이터 없음</span>
    ) : (
      <span style={{ color: theme.colors.black }}>{value}</span>
    );

  return (
    <S.ModalContainer title="Movie Details" open={isOpen} onOk={setClose} onCancel={setClose}>
      <S.ModalWrapper>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.Response === 'True' && (
            <S.ModalContent>
              <S.ContentImg>
                {data.Poster === 'N/A' ? (
                  <img src="../../../public/no_image.png" alt="no_image" />
                ) : (
                  <img src={data.Poster} alt="poster" />
                )}
              </S.ContentImg>
              <S.ContentText>
                <p style={{ fontSize: '30px' }}>{renderValue(data.Title)}</p>
                <p>영화 개봉연도: {renderValue(data.Year)}</p>
                <p>영화 등급: {renderValue(data.Rated)}</p>
                <p>영화 개봉일: {renderValue(data.Released)}</p>
                <p>영화 상영시간: {renderValue(data.Runtime)}</p>
                <p>영화 장르: {renderValue(data.Genre)}</p>
                <p>영화 감독: {renderValue(data.Director)}</p>
                <p>영화 작가: {renderValue(data.Writer)}</p>
                <p>영화 출연진: {renderValue(data.Actors)}</p>
                <p>영화 줄거리: {renderValue(data.Plot)}</p>
                <p>영화 언어: {renderValue(data.Language)}</p>
                <p>영화 제작 국가: {renderValue(data.Country)}</p>
                <p>영화 수상 내역: {renderValue(data.Awards)}</p>
                <p>영화 메타스코어: {renderValue(data.Metascore)}</p>
                <p>영화 IMDB 평점: {renderValue(data.imdbRating)}</p>
                <p>영화 타입: {renderValue(data.Type)}</p>
                <p>영화 DVD 출시일: {renderValue(dayjs(data.DVD).format('YYYY년-MM월-DD일'))}</p>
                <p>영화 제작사: {renderValue(data.Production)}</p>
                <p>영화 공식 웹사이트: {renderValue(data.Website)}</p>
                {data.Ratings.map((rating: any, index: any) => (
                  <div key={index}>
                    <p>평점 제공 사이트: {renderValue(rating.Source)}</p>
                    <p>평점: {renderValue(rating.Value)}</p>
                  </div>
                ))}
              </S.ContentText>
            </S.ModalContent>
          )
        )}
      </S.ModalWrapper>
    </S.ModalContainer>
  );
}

export default Modal;
