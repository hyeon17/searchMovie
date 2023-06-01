import styled from 'styled-components';
import Skeleton from 'antd/lib/skeleton';

export const ContentSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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

export const SModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 750px;
`;

export const SModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: -50px;
`;

export const SModalImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 750px;
`;

export const SModalText = styled.div`
  margin-top: 80px;
  width: 580px;
  height: 750px;
  padding-left: 20px;
`;
