import * as S from '@/styles/Header.styles';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleTabClick = (key: string) => {
    switch (key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/movie');
        break;
      case '3':
        navigate('/about');
        break;
      default:
        navigate('*');
        break;
    }
  };
  return (
    <S.HeaderContainer>
      <S.HeaderImg src="../../../public/title.png" />
      <S.HeaderTabs type="card" size="large" onTabClick={handleTabClick}>
        <S.HeaderTabPane tab="Search" key="1"></S.HeaderTabPane>
        <S.HeaderTabPane tab="Movie" key="2"></S.HeaderTabPane>
        <S.HeaderTabPane tab="About" key="3"></S.HeaderTabPane>
      </S.HeaderTabs>
    </S.HeaderContainer>
  );
}

export default Header;