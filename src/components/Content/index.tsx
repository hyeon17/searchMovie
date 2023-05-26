import React from 'react';
import * as S from '@/styles/Content.styles';
import Card from '@/components/Card';
import Skeleton from '@/components/Skeleton';
import Result from '@/components/Content/result';
import Modal from '@/components/Modal';
import { useModalStore } from '@/store/modalStore';

function Content({ content, loading }: any) {
  const { isOpen, setOpen, setClose } = useModalStore();
  const openModal = () => {
    setOpen(); // 모달 열기
  };

  const closeModal = () => {
    setClose(); // 모달 닫기
  };

  return (
    <>
      <Result content={content} />
      <S.ContentWrapper>
        {content === '' ? (
          <></>
        ) : (
          <S.ContentContainer>
            {loading ? (
              <Skeleton width={270} height={300} count={9} />
            ) : (
              <>
                {content.Search.map((data: any, idx: number) => (
                  <S.CardWrapper key={idx} onClick={openModal}>
                    <Card
                      style={{ width: 270 }}
                      image={
                        data.Poster === 'N/A' ? (
                          <img src="/no_image.png" alt="no_image" />
                        ) : (
                          <img src={data.Poster} alt="poster" />
                        )
                      }
                      title={data.Title}
                      description={data.Year}
                    />
                  </S.CardWrapper>
                ))}
              </>
            )}
          </S.ContentContainer>
        )}
      </S.ContentWrapper>
      {isOpen && <Modal onClose={closeModal} />}
    </>
  );
}

export default React.memo(Content);
