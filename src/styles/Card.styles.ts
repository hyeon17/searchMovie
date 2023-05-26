import styled from 'styled-components';
import { Card, Skeleton } from 'antd';

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
  .ant-card-cover{
    height: 400px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardDescription = styled(Card.Meta)`
  width:270px;
  text-align: center;
`;

export const CardSkeleton = styled(Skeleton)`
  width: 400px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
