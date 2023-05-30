import React from 'react';
import { useState } from 'react';
import * as S from '@/styles/Search.styles';
import SideBar from '@/components/SideBar';
import { useSideBarStore } from '@/store/sideBarStore';
import { useOptionStore } from '@/store/optionStore';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const { setOpen } = useSideBarStore();
  const { getYear, getCategory, setTitle } = useOptionStore();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  const onSearch = (value: string) => {
    setTitle(value);
  };

  return (
    <S.SearchContainer>
      <S.SearchWrapper>
        <S.SearchInput
          placeholder="Search for Movies, Series & more"
          size="large"
          type="text"
          onSearch={onSearch}
          onChange={(e: any) => setSearchValue(e.target.value)}
          onPressEnter={handleKeyPress}
        />
        <S.MoreButton onClick={setOpen}>
          <S.MenuIcon />
        </S.MoreButton>
      </S.SearchWrapper>
      <S.TagContainer>
        <S.TagItem>{getYear() === '' ? 'All Years' : getYear()}</S.TagItem>
        <S.TagItem>{getCategory() === '' ? 'All Category' : getCategory()}</S.TagItem>
      </S.TagContainer>
      <SideBar />
    </S.SearchContainer>
  );
}

export default React.memo(Search);