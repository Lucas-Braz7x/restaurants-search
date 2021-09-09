import styled from 'styled-components';

export const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background: url(${(props) => props.photo});
  background-size: cover;
`;

export const TitleRestaurant = styled.span`
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
  margin: 10px 0 0 10px;
`
