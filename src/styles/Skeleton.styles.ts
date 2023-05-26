import styled from 'styled-components';
import { Card, Skeleton } from 'antd';

export const ContentSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 500px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
export const SkeletonTitle = styled(Skeleton.Input)`
  margin: 5px auto;
`;
export const SkeletonImg = styled(Skeleton.Image)`
  margin-bottom: 10px;
`;