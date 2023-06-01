import styled from 'styled-components';
import Tag from 'antd/lib/tag';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 1000px;
  height: 100px;
  margin: 20px 15px 0 0;
  position: relative;
`;

export const SearchWrapper = styled.div`
  display: flex;
`;

export const SearchInput = styled(Input)`
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

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  margin: 10px 75px 5px 0;
`;

export const TagItem = styled(Tag)`
  display: flex;
  margin: 0 5px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
