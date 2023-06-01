import * as S from '@/styles/Skeleton.styles';

function Skeleton({ width, height, count }: { width: number; height: number; count: number }) {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <S.ContentSkeleton key={i}>
            <S.SkeletonImg active style={{ width: width, height: height }} />
            <S.SkeletonTitle active />
            <S.SkeletonTitle active />
          </S.ContentSkeleton>
        ))}
    </>
  );
}

export default Skeleton;
