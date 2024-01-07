import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  padding: 40px;
  grid-row-gap: 20px;
`;
