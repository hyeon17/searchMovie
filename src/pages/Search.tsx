import { useState, useEffect } from 'react';
import Content from '@/components/Content';
import Search from '@/components/Search';
import { useOptionStore } from '@/store/optionStore';
import { Helmet } from 'react-helmet-async';
import { useSearchMovie } from '@/apis';

function SearchPage() {
  const { getYear, getTitle, getCategory, getCount } = useOptionStore();
  const [searchValue, setSearchValue] = useState('');

  const { data: res, isLoading } = useSearchMovie(getTitle(), getCategory(), getYear(), getCount());
  const response = res?.data;

  useEffect(() => {
    if (response && response.Response === 'True') {
      setSearchValue(response);
    }
  }, [response]);

  return (
    <>
      <Helmet>
        <title>Search | MOVIEFLIX</title>
        <meta name="description" content="MOVIEFLIX에서 원하는 영화를 검색해보세요" />
      </Helmet>
      <Search />
      <Content content={searchValue} loading={isLoading} favorite={false} />
    </>
  );
}

export default SearchPage;
