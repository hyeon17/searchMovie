import * as S from '@/styles/Skeleton.styles';

function ModalSkeleton() {
  return (
    <S.SModalWrapper>
      <S.SModalContent>
        <S.SModalImg>
          <S.SkeletonImg active style={{ width: 280, height: 450 }} />
        </S.SModalImg>
        <S.SModalText>
          <S.SkeletonTitle active />
          <br />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
          <S.SkeletonTitle active style={{ width: 400 }} />
        </S.SModalText>
      </S.SModalContent>
    </S.SModalWrapper>
  );
}

export default ModalSkeleton;