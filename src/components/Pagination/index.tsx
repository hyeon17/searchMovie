import React from 'react';
import * as S from '@/styles/Content.styles';
import { useOptionStore } from '@/store/optionStore';

function Pagination({ content }: any) {
  const { setCount } = useOptionStore();
  const totalResults = content.totalResults || 0;
  const totalPages = Math.ceil(totalResults / 10); // Assuming 10 items per page
  const handlePageChange = (page: number) => {
    setCount(page);
  };

  return (
    <>
      <S.StyledPagination
        defaultCurrent={1}
        onChange={handlePageChange}
        showTotal={(total: any, range: any) => `${range[0]}-${range[1]} of ${total} items`}
        defaultPageSize={10}
        showSizeChanger={false}
        total={totalResults}
        hideOnSinglePage={totalPages <= 1}
      />
    </>
  );
}

export default React.memo(Pagination);

