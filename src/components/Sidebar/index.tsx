import React, { useState } from 'react';
import * as S from '@/styles/Search.styles';

function Sidebar({ props }: any) {
  const { onOpen, onClose } = props;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const Close = () => {
    setOpen(false);
  };

  return (
    <>
      <S.DrawerContainer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <S.SelectContainer>
          <div>YEAR</div>
          <S.DataSelect></S.DataSelect>
        </S.SelectContainer>
        <S.SelectContainer>
          <div>CATEGORY</div>
          <S.DataSelect></S.DataSelect>
        </S.SelectContainer>
        <S.SelectContainer>
          <div>VIEW</div>
          <S.DataSelect></S.DataSelect>
        </S.SelectContainer>
      </S.DrawerContainer>
    </>
  );
}

export default Sidebar;
