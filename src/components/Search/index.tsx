import React, { useState } from 'react';
import { useSearchMovie } from '@/apis';
import * as S from '@/styles/Search.styles';
import {useOptionStore} from '@/store/store';

function Search() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, isError } = useSearchMovie(searchValue);
  const { setYear, setCategory, setCount } = useOptionStore();

  if (data?.Response === 'True') {
    console.log(data);
  }
  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  const generateOptions = () => {
    const currentYear = new Date().getFullYear();
    const options = [];

    for (let year = currentYear; year >= 1985; year--) {
      const option = {
        value: year,
        label: year,
      };

      options.push(option);
    }

    return options;
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
      <S.DrawerContainer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <S.SelectContainer>
          <div>YEAR</div>
          <S.DataSelect
            defaultValue="All Years"
            key="year"
            onChange={handleChange}
            options={generateOptions()}
          ></S.DataSelect>
        </S.SelectContainer>
        <S.SelectContainer>
          <div>CATEGORY</div>
          <S.DataSelect
            defaultValue="Movie"
            key="category"
            onChange={handleChange}
            options={[
              { value: 'movie', label: 'Movie' },
              { value: 'series', label: 'Series' },
              { value: 'episode', label: 'Episode' },
            ]}
          ></S.DataSelect>
        </S.SelectContainer>
        <S.SelectContainer>
          <div>VIEW</div>
          <S.DataSelect
            defaultValue="10"
            key="count"
            onChange={handleChange}
            options={[
              { value: 10, label: 10 },
              { value: 20, label: 20 },
              { value: 30, label: 30 },
            ]}
          ></S.DataSelect>
        </S.SelectContainer>
      </S.DrawerContainer>
    </S.SearchContainer>
  );
}

export default Search;
