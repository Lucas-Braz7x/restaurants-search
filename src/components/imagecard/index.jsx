import React from 'react';
import { Card, TitleRestaurant } from './styles';

const ImageCard =  ({ photo, title }) => {
  return(
    <Card photo={photo}>
      <TitleRestaurant>{title}</TitleRestaurant>
    </Card>
  )
}

export default ImageCard;
