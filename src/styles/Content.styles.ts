import styled from 'styled-components';
import { Pagination } from 'antd';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  margin: 30px auto;
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  cursor: pointer;
  height: 500px;
`;

export const ContentResult = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  .ant-pagination-item a {
    color: ${({ theme }) => theme.colors.white};
  }
  .ant-pagination-item-active {
    border-color: ${({ theme }) => theme.colors.red};
    a {
      color: ${({ theme }) => theme.colors.red};
    }
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    button {
      color: ${({ theme }) => theme.colors.red};
    }
  }
  .ant-pagination-item-container .ant-pagination-item-ellipsis {
    color: ${({ theme }) => theme.colors.white};
  }
`;
