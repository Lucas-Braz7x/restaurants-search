import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;

`;

export const ContainerSearch = styled.aside`
  background: ${(props) => props.theme.colors.background};
  width: 360px;
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
    margin-right: 20px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;

  letter-spacing: 0.11px;
  line-height: 29px;
  font-size: 24px;
  font-weight: 700;

  text-transform: none;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const ModalContent = styled.p`
  ${ModalTitle}; /* Pegando('estendendo') as propriedades do ModalTitle */

  text-transform: none;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  margin-bottom: 10px;
  letter-spacing: 0.11px;

  line-height: 19px;
  font-size: 16px;
  font-weight: 400;
`;
