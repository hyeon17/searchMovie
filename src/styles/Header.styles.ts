import styled from 'styled-components';
import { Tabs } from 'antd';


export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

`;

export const HeaderTabs = styled(Tabs)`
  width: 100%;
  height: 100%;
  .ant-tabs-content-holder {
    background-image: url('../../public/main_back.png');
    background-size: cover;
    background-position: center;
  }
  .ant-tabs-tab {
    background-color: ${({ theme }) => theme.colors.white} !important;
    border-color: ${({ theme }) => theme.colors.white} !important;
  }
  .ant-tabs-tab-active {
    background-color: ${({ theme }) => theme.colors.black} !important;
    border-color: ${({ theme }) => theme.colors.blue} !important;
  }
`;
export const HeaderTabPane = styled(Tabs.TabPane)`
  width: 100%;
  height: 100%;
`;

export const HeaderImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 20px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 흐림 효과를 줄 색상과 투명도 설정 */
`;