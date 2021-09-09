import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: pointer;


  margin-top: 5px;
  padding: 16;

  background: #ffffff;
  border-left: 5px solid transparent;
  transition: background, border-left-color 1.5s;
  :hover{
    background: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-size: 16px;
line-height: 19px;
margin: 10px 0;
`;

export const RestaurantsPhoto = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 16px;
  object-fit: cover;
`;
