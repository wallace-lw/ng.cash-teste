import styled from "styled-components";

export const Container = styled.header`
  background: #000000;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  img {
    width: 200px;
    height: 100px;
  }
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #000;
    background: #ffffff;
    font-weight: 600;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    margin-right: 60px;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;