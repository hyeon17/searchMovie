import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 100%;
  padding: 10px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 1;
`;