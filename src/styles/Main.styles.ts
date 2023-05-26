import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 1200px;
  height: 100vh;
`;

export const MainWrapper = styled.main`
  background-image: url('../../public/main_back.png');
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 60px;
  width: 1200px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 흐림 효과를 줄 색상과 투명도 설정 */
`;