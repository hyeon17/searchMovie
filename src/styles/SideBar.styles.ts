import styled from 'styled-components';
import Select from 'antd/lib/select';
import Drawer from 'antd/lib/drawer';

export const DrawerContainer = styled(Drawer)``;

export const SelectContainer = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  margin-left: 20px;
  align-items: center;
  justify-content: start;
`;

export const DataSelect = styled(Select)`
  width: 150px;
  position: absolute;
  right: 80px;
`;
