import React from "react";
import ReactStars from "react-rating-stars-component";

import restaurants from '../../assets/restaurante-fake.png';

import { Address, Restaurant, RestaurantInfo, RestaurantsPhoto, Title } from "./styles";

const RestaurantCard = () => {
  return(
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do restaurant</Title>
        <ReactStars
          count={5}
          isHalf
          value={3.5}
          edit={false}
          activeColor="#e7711c"
        />
        <Address>Endereço</Address>
      </RestaurantInfo>
      <RestaurantsPhoto src={restaurants} alt="" />

    </Restaurant>
  );
};
export default RestaurantCard;
