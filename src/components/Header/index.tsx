import * as S from '@/styles/Header.styles';
import Search from '@/components/Search';
import Content from '@/components/Content';

function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderImg src="../../../public/title.png" />
      <S.HeaderTabs type="card" size="large">
        <S.HeaderTabPane tab="Search" key="1">
          <Search />
          <Content />
          <S.Overlay />
        </S.HeaderTabPane>
        <S.HeaderTabPane tab="Movie" key="2"></S.HeaderTabPane>
        <S.HeaderTabPane tab="About" key="3"></S.HeaderTabPane>
      </S.HeaderTabs>
    </S.HeaderContainer>
  );
}

export default Header;
