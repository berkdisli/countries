import styled, { css } from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 30px 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  .home-header {
    width: 100%;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > a {
    text-decoration: none;
    color: hsl(0, 0%, 0%);
    &:active {
      color: hsl(0, 0%, 0%);
    }
  }
`;

export const StyledDetailWrapper = styled(MainWrapper)`
  flex-direction: column;
  justify-content: flex-start;
  .detail-body {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    .img-wrapper {
      img {
        width: 30rem;
      }
    }
    .detail-content {
      margin-left: 2rem;
      h1 {
        margin-bottom: 2rem;
        text-align: left;
      }
      .detail-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        & > p {
          width: 45%;
          margin-bottom: 1rem;
          text-align: left;
        }
      }
      .border-countries {
        width: 100%;
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, 9rem);
        grid-gap: 5px;
        strong {
          grid-row: 1/10;
          text-align: left;
        }
        p {
          white-space: pre;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

interface TriggerProps {
  isMenuOpen: boolean;
}
export const DropdownTrigger = styled.div<TriggerProps>`
  margin-bottom: 24rem;
  width: 13rem;
  height: 70px;
  background-color: white;
  padding: 10px 20px;
  border: 1px solid hsl(0, 0%, 95%);
  box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: rgb(231, 234, 236);
  }
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;

export const DropdownOverlay = styled.div`
  margin-bottom: 39rem;
  width: 10rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  & > div {
    width: 100%;
    text-align: left;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    &:hover {
      background-color: rgb(231, 234, 236);
    }
  }
`;

export const StyledDropdown = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  & > h3 {
    color: rgb(226, 228, 230);
  }
`;
