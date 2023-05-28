import React from 'react';
import { useState, useEffect } from 'react';
import Content from '@/components/Content';
import Search from '@/components/Search';
import { useSearchMovie } from '@/apis';
import { useOptionStore } from '@/store/optionStore';
import { useResponseStore } from '@/store/responseStore';

function SearchPage() {
  const { getYear, getTitle, getCategory, getCount } = useOptionStore();
  const { setValue, getValue } = useResponseStore();
  const [searchValue, setSearchValue] = useState('');
  const { data:res, isLoading } = useSearchMovie(getTitle(), getCategory(), getYear(), getCount());
  const response = res?.data;

  useEffect(() => {
    if (res && response.Response === 'True') {
      setValue(response);
      setSearchValue(response);
    }
  }, [res]);


  return (
    <>
      <Search />
      <Content content={searchValue} loading={isLoading} favorite={false} />
    </>
  );
}

export default SearchPage;
