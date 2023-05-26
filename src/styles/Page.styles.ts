import styled from 'styled-components';
import { Button} from 'antd';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:70px;
`;

export const NotFoundImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  z-index: 1;
`;

export const NotFoundText = styled.div`
  margin-top: 20px;
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

export const NotFoundButton = styled(Button)`
  margin-top: 30px;
  width: 200px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.red};
  text-align: center;
  z-index: 1;
`;
