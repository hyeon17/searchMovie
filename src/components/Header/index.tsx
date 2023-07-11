import * as S from '@/styles/Header.styles';
import { useNavigate } from 'react-router-dom';
import title from '@/assets/title.png';
import { useState } from 'react';

function Header() {
  const [activeTab, setActiveTab] = useState('1');
  const navigate = useNavigate();
  const handleTabClick = (key: string) => {
    setActiveTab(key);
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

  const handleLogoClick = () => {
    setActiveTab('1');
    navigate('/');
  };

  return (
    <S.HeaderContainer>
      <S.HeaderImg src={title} alt="logo" onClick={handleLogoClick} />
      <S.HeaderTabs type="card" size="large" activeKey={activeTab} onTabClick={handleTabClick} role="tabs">
        <S.HeaderTabPane tab="Search" key="1"></S.HeaderTabPane>
        <S.HeaderTabPane tab="Favorite" key="2"></S.HeaderTabPane>
        <S.HeaderTabPane tab="About" key="3"></S.HeaderTabPane>
      </S.HeaderTabs>
    </S.HeaderContainer>
  );
}

export default Header;
