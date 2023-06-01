import styled from 'styled-components';
import { Button } from 'antd';

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
  margin-top: 70px;
`;

export const NotFoundImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;

export const NotFoundText = styled.div`
  margin-top: 20px;
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
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
`;
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.red};
  text-align: center;
  height: 41px;
  margin-bottom: 25px;
`;
