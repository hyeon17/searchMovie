import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import * as S from '@/styles/Main.styles';

function Layout() {
  return (
    <S.MainContainer>
      <Header />
      <S.MainWrapper>
        <Outlet />
      </S.MainWrapper>
    </S.MainContainer>
  );
}

export default Layout;
