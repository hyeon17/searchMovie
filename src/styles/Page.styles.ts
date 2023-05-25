import styled from 'styled-components';
import { Card } from 'antd';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled(Card)`
  width: 400px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardDescription = styled(Card.Meta)`
  display: flex;
  justify-content: center;
`;
