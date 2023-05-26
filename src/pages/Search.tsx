import { useState, useEffect } from 'react';
import Content from '@/components/Content';
import Search from '@/components/Search';
import { useSearchMovie } from '@/apis';
import { useOptionStore } from '@/store/optionStore';

function SearchPage() {
  const { getYear, getTitle, getCategory, getCount } = useOptionStore();
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, isError } = useSearchMovie(getTitle(), getCategory(), getYear(), getCount());

  useEffect(() => {
    if (data?.Response === 'True') {
      setSearchValue(data);
    }
  }, [data]);

  return (
    <>
      <Search />
      <Content content={searchValue} loading={isLoading} />
    </>
  );
}

export default SearchPage;
