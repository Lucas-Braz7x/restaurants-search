import React from "react";
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

import { Address, Restaurant, RestaurantInfo, RestaurantsPhoto, Title } from "./styles";

const RestaurantCard = ({ restaurant, onClick }) => {
  return(
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          value={restaurant.rating}
          edit={false}
          activeColor="#e7711c"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantsPhoto src={ restaurant.photos ? restaurant.photos[0].getUrl() : restaurante } alt="sfsd" />
    </Restaurant>
  );
};
export default RestaurantCard;
