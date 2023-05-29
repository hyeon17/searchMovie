import * as S from '@/styles/Page.styles';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFound() {
   const navigate = useNavigate();
  return (
    <S.NotFoundWrapper>
      <Helmet>
        <title>NotFound | MOVIEFLIX</title>
      </Helmet>
      <S.NotFoundImg src="../../public/movie.png" />
      <S.NotFoundText>요청하신 페이지가 존재하지 않습니다</S.NotFoundText>
      <S.NotFoundButton onClick={() => navigate('/')}>홈으로</S.NotFoundButton>
    </S.NotFoundWrapper>
  );
}

export default NotFound