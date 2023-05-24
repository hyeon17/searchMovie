import styled from 'styled-components';
import { Input, Button, Drawer, Tag, Select } from 'antd';
import MenuOutlined from '@ant-design/icons/MenuOutlined';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  position: relative;
  z-index: 1;
`;

export const SearchWrapper = styled.div`
  display: flex;
`;

export const SearchInput = styled(Input.Search)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 100%;
  margin-right: 20px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const MoreButton = styled(Button)`
  width: 50px;
  height: 40px;
`;

export const MenuIcon = styled(MenuOutlined)`
  font-size: 16px;
`;

export const DrawerContainer = styled(Drawer)``;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  margin: 10px 80px 5px 0;
`;


export const TagItem = styled(Tag)`
  display: flex;
  margin: 0 5px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const SelectContainer = styled.div`
  display: flex;
  width:300px;
  height: 100px;
  margin-left: 20px;
  align-items: center;
  justify-content: start;

`;
export const DataSelect = styled(Select)`
  width: 150px;
  position:absolute;
  right: 80px;
`;