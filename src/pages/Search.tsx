import { useState, useEffect } from 'react';
import Content from '@/components/Content';
import Search from '@/components/Search';
import { useOptionStore } from '@/store/optionStore';
import { searchMovie } from '@/apis';
import * as S from '@/styles/Page.styles';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import MetaTag from '@/components/MetaTag';
import { useLocation } from 'react-router-dom';
import { IMovieResponse } from '@/types/searchMovie';
import { useQuery } from '@tanstack/react-query';

function SearchPage() {
  const { getYear, getTitle, getCategory, getCount } = useOptionStore();
  const [searchValue, setSearchValue] = useState<IMovieResponse>({
    Search: [],
    totalResults: '',
    Response: '',
    Error: '',
  });
  const {
    data: res,
    isLoading,
    refetch,
  } = useQuery<IMovieResponse>(['movies'], () => searchMovie(getTitle(), getCategory(), getYear(), getCount()));

  const response = res || searchValue;
  const location = useLocation();

  useEffect(() => {
    if (response && response.Response === 'True') {
      setSearchValue(response);
    }
    if (response && response.Error === 'Movie not found!') {
      setSearchValue(response);
    }
    if (response && response.Response === 'Too many results.') {
      setSearchValue(response);
    }
  }, [response]);

  const handleButtonClick = () => {
    refetch();
  };

  const metaTagProps = {
    title: 'Search | MOVIEFLIX',
    content: 'MOVIEFLIX에서 원하는 영화를 검색해보세요',
    keywords: '영화, 검색, movie, search, MOVIEFLIX',
    description: 'MOVIEFLIX에서 원하는 영화를 검색해보세요',
    url: location.pathname,
  };

  return (
    <>
      <MetaTag props={metaTagProps} />
      <S.SearchWrapper>
        <Search />
        <S.SearchButton style={{ width: 50 }} onClick={handleButtonClick} icon={<SearchOutlined />} />
      </S.SearchWrapper>
      <Content content={searchValue} loading={isLoading} favorite={false} />
    </>
  );
}

export default SearchPage;
