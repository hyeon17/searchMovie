import React, { useState } from 'react';
import { useSearchMovie } from '@/apis';
import * as S from '@/styles/Search.styles';

function Search() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, isError } = useSearchMovie(searchValue);

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
        value: year.toString(),
        label: year.toString(),
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
          <S.DataSelect defaultValue="All Years" onChange={handleChange} options={generateOptions()}></S.DataSelect>
        </S.SelectContainer>
        <S.SelectContainer>
          <div>CATEGORY</div>
          <S.DataSelect
            defaultValue="Movie"
            onChange={handleChange}
            options={[
              { value: 'Movie', label: 'Movie' },
              { value: 'Series', label: 'Series' },
              { value: 'Episode', label: 'Episode' },
            ]}
          ></S.DataSelect>
        </S.SelectContainer>
        <S.SelectContainer>
          <div>VIEW</div>
          <S.DataSelect
            defaultValue="10"
            onChange={handleChange}
            options={[
              { value: '10', label: '10' },
              { value: '20', label: '20' },
              { value: '30', label: '30' },
            ]}
          ></S.DataSelect>
        </S.SelectContainer>
      </S.DrawerContainer>
    </S.SearchContainer>
  );
}

export default Search;
