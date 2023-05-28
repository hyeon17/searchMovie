import styled from 'styled-components';
import { Card, Skeleton } from 'antd';

export const CardContainer = styled(Card)`
  width: 400px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    border: 2px solid ${({ theme }) => theme.colors.red};
    z-index: 2;
  }
  .ant-card-cover {
    height: 400px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-card-body{
    padding: 12px;
  }
`;

export const CardDescription = styled(Card.Meta)`
  width: 270px;
  text-align: center;
`;

export const CardSkeleton = styled(Skeleton)`
  width: 400px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
export const CardIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 20px;
`;

export const CardHeart = styled.div`
  margin: 0 10px;
  color: ${({ theme }) => theme.colors.red};
`;
