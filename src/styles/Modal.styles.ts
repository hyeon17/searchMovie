import styled from 'styled-components';
import { Modal } from 'antd';


export const ModalContainer = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 900px;
  height: 100%;

`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentImg = styled.div`
  width: 300px;
  height: 100%;
  object-fit: cover;
  display: flex;
`;

export const ContentText = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  font-size: 16px;
  font-weight:bold;
  color: ${({ theme }) => theme.colors.gray};
`;