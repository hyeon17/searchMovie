import * as S from '@/styles/Header.styles';
import { useNavigate } from 'react-router-dom';
import title from '@/assets/title.png';

function Header() {
  const navigate = useNavigate();
  const handleTabClick = (key: string) => {
    switch (key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/favorite');
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
      <S.HeaderImg src={title} alt="logo" />
      <S.HeaderTabs type="card" size="large" onTabClick={handleTabClick} role="tabs">
        <S.HeaderTabPane tab="Search" key="1"></S.HeaderTabPane>
        <S.HeaderTabPane tab="Favorite" key="2"></S.HeaderTabPane>
        <S.HeaderTabPane tab="About" key="3"></S.HeaderTabPane>
      </S.HeaderTabs>
    </S.HeaderContainer>
  );
}

export default Header;
