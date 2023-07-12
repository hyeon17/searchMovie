import * as S from '@/styles/Page.styles';
import { useNavigate } from 'react-router-dom';
import movie from '@/assets/movie.png';
import MetaTag from '@/components/MetaTag';
import { useLocation } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const metaTagProps = {
    title: 'NotFound | MOVIEFLIX',
    content: '존재하지 않는 페이지입니다',
    keywords: '영화, 검색, movie, search, MOVIEFLIX',
    description: '존재하지 않는 페이지입니다',
    url: location.pathname,
  };

  return (
    <S.NotFoundWrapper>
      <MetaTag props={metaTagProps} />
      <S.NotFoundImg src={movie} />
      <S.NotFoundText>요청하신 페이지가 존재하지 않습니다</S.NotFoundText>
      <S.NotFoundButton onClick={() => navigate('/')}>홈으로</S.NotFoundButton>
    </S.NotFoundWrapper>
  );
}

export default NotFound;
