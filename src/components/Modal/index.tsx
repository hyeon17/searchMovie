import React from 'react';
import * as S from '@/styles/Modal.styles';
import { useModalStore } from '@/store/modalStore';

function Modal({ onClose }: any) {
  const { isOpen, setOpen, setClose } = useModalStore();
  const closeModal = () => {
    setClose(); // 모달 닫기
  };

  // todo: 모달 구현
  return (
    <S.ModalContainer centered>
      <S.ModalContent>
        <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
        <div>Modal Content</div>
      </S.ModalContent>
    </S.ModalContainer>
  );
}

export default Modal;
