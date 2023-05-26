import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  margin: 30px auto;
  background-color: ${({ theme }) => theme.colors.white};
  position:relative;
  z-index: 1;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  z-index: 1;
`;