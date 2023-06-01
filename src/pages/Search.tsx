import { useState, useEffect } from 'react';
import Content from '@/components/Content';
import Search from '@/components/Search';
import { useOptionStore } from '@/store/optionStore';
import { Helmet } from 'react-helmet-async';
import { useSearchMovie } from '@/apis';
import * as S from '@/styles/Page.styles';
import { SearchOutlined } from '@ant-design/icons';

function SearchPage() {
  const { getYear, getTitle, getCategory, getCount } = useOptionStore();
  const [searchValue, setSearchValue] = useState({
    Search: [],
    totalResults: '',
    Response: '',
    Error: '',
  });
  const { data: res, isLoading, refetch } = useSearchMovie(getTitle(), getCategory(), getYear(), getCount());
  const response = res?.data;

  useEffect(() => {
    if (response && response.Response === 'True') {
      setSearchValue(response);
    }
    if (response && response.Error === 'Movie not found!') {
      setSearchValue(response);
    }
  }, [response]);

  const handleButtonClick = () => {
    refetch();
  };

  return (
    <>
      <Helmet>
        <title>Search | MOVIEFLIX</title>
        <meta name="description" content="MOVIEFLIX에서 원하는 영화를 검색해보세요" />
      </Helmet>
      <S.SearchWrapper>
        <Search />
        <S.SearchButton style={{ width: 50 }} onClick={handleButtonClick} icon={<SearchOutlined />} />
      </S.SearchWrapper>

      <Content content={searchValue} loading={isLoading} favorite={false} />
    </>
  );
}

export default SearchPage;
