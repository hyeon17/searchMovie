import React from 'react';
import * as S from '@/styles/Content.styles';
import { useSearchMovie } from '@/apis';
import { useOptionStore } from '@/store/optionStore';
import { useResponseStore } from '@/store/responseStore';

function Pagination({ content }: any) {
  const { getYear, getTitle, getCategory, getCount } = useOptionStore();
  // const { data, isLoading, isError } = useSearchMovie(getTitle(), getCategory(), getYear(), 1);
const { setValue, getValue } = useResponseStore();
  const handlePageChange = (newPage: number) => {
    // Fetch data for the selected page
    useSearchMovie(getTitle(), getCategory(), getYear(), newPage);
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error occurred while fetching data</div>;
  // }

  const totalResults = content?.totalResults ?? 0;
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <>
      <S.StyledPagination
        defaultCurrent={1}
        // onChange={handlePageChange}
        showTotal={(total: any, range: any) => `${range[0]}-${range[1]} of ${total} items`}
        defaultPageSize={10}
        showSizeChanger ={false}
        total={totalResults}
        hideOnSinglePage={totalPages <= 1} // Hide pagination when there is only one page
      />
    </>
  );
}

export default React.memo(Pagination);

