import React from 'react';
import { useState, useEffect } from 'react';
import Content from '@/components/Content';
import Search from '@/components/Search';
import { useSearchMovie } from '@/apis';
import { useOptionStore } from '@/store/optionStore';
import { Helmet } from 'react-helmet-async';

function SearchPage() {
  const { getYear, getTitle, getCategory, getCount } = useOptionStore();

  const {
    data: res,
    isLoading,
    isSuccess,
    isFetching,
  } = useSearchMovie(getTitle(), getCategory(), getYear(), getCount());
  const [searchValue, setSearchValue] = useState('');
  const response = res?.data;

  useEffect(() => {
    if (res && response.Response === 'True') {
      setSearchValue(response);
    }
  }, [response]);

  // console.log('response', response);
  // if (response) {
  //   console.log('res', response.Response);
  // }
  // console.log('loading',isLoading);
  // console.log('success', isSuccess);
  // console.log('fetching', isFetching);

  // useEffect(() => {
  // if (isSuccess) {
  //   setSearchValue(response);
  // }
  // }, [response]);

  return (
    <>
      <Helmet>
        <title>Search | MOVIEFLIX</title>
      </Helmet>
      <Search />
      <Content content={searchValue} loading={isLoading} favorite={false} />
    </>
  );
}

export default SearchPage;
