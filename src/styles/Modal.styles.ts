import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalContainer = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  height: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  object-fit: cover;
`;

export const ContentText = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ContentTitle = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.blue};
`;

export const CRatings = styled.div`
  display: flex;
`;

export const CDivider = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-weight: bold;
  margin: 5px 0;
`;

export const CText = styled.p`
  font-size: 15px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CPlot = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};
  margin: 10px 0;
`;

export const CImg = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
