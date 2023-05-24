import React, { useState } from 'react';
import { useSearchMovie } from '@/apis';
import * as S from '@/styles/Search.styles';
import Sidebar from '@/components/Sidebar';

function Search() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, isError } = useSearchMovie(searchValue);

  if (data) {
    console.log(data);
  }
  if (isLoading) return <div>로딩중...</div>
  if (isError) return <div>에러가 발생했습니다.</div>


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <S.SearchContainer>
      <S.SearchWrapper>
        <S.SearchInput placeholder="Search for Movies, Series & more" size="large" type="text" onSearch={onSearch} />
        <S.MoreButton onClick={showDrawer}>
          <S.MenuIcon />
        </S.MoreButton>
      </S.SearchWrapper>
      <S.TagContainer>
        <S.TagItem closable>1</S.TagItem>
      </S.TagContainer>
      {/* <Sidebar onOpen={onOpen} onClose={onClose} /> */}
      <S.DrawerContainer title="Select the option you want" placement="right" onClose={onClose} open={open}>
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
    </S.SearchContainer>
  );
}

export default Search;
