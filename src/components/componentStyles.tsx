import styled from "styled-components";

export const StyledCountryCard = styled.div`
  width: 320px;
  height: 500px;
  margin-top: 40px;
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 95%);
  box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
  background-color: hsl(0, 0%, 100%);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    filter: drop-shadow(0 4px 4px hsl(0, 0%, 88%));
  }
  .body {
    width: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    h3 {
      margin-bottom: 10px;
    }
  }
`;
