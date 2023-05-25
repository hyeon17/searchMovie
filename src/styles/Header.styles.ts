import styled from 'styled-components';
import { Tabs } from 'antd';


export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;

`;

export const HeaderTabs = styled(Tabs)`
  width: 100%;
  height: 100%;
  z-index: 1;
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
  margin: -10px 20px 0 20px;
  z-index: 1;
`;

