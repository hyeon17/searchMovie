import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalContainer = styled(Modal)`
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
`;