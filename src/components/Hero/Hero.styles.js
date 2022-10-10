import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.backgroundImage}) no-repeat top;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
`;