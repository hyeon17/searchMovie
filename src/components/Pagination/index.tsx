import { useState, useEffect } from 'react';
import * as S from '@/styles/Content.styles';
import { useOptionStore } from '@/store/optionStore';
import { useSearchMovie } from '@/apis';

function Pagination({ content }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const { getTitle, getCategory, getYear } = useOptionStore();
  const { refetch } = useSearchMovie(getTitle(), getCategory(), getYear(), currentPage);
  const totalResults = content.totalResults || 0;
  const totalPages = Math.ceil(totalResults / 10);

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  return (
    <>
      <S.StyledPagination
        defaultCurrent={1}
        current={currentPage}
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

export default Pagination;
