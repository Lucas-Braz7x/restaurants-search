import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;

`;

export const ContainerSearch = styled.aside`
  background: ${(props) => props.theme.colors.background};
  max-width: 360px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x:hidden;
`;

export const Search = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 16px;
  gap: 16px;

  background: #ffffff;
`;

export const Logo = styled.img`
`;

export const ContainerMap = styled.div`
  background: black;
`;

export const Carousel = styled(Slider)`
  .slick-slide{
    margin-right: 8px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;
