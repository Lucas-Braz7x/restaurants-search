import React, { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from "react-slick";

import logo from '../../assets/logo.svg';
import restaurants from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Wrapper, ContainerSearch, Logo, Search, CarouselTitle, Carousel, ContainerMap } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  let settings = {
    dots: false,
    infinite: true,
    speed: 350,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
  return (
    <Wrapper>
      <ContainerSearch>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            onTrailingIconSelect={() => this.setState({values: ""})}
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value) }
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurants} title="Meu restaurante pika" />
            <Card photo={restaurants} title="Meu restaurante pika"/>
            <Card photo={restaurants} title="Meu restaurante pika"/>
            <Card photo={restaurants} title="Meu restaurante pika"/>
            <Card photo={restaurants} title="Meu restaurante pika"/>
            <Card photo={restaurants} title="Meu restaurante pika"/>
            <Card photo={restaurants} title="Meu restaurante pika"/>
          </Carousel>
        </Search>
        <RestaurantCard />
      </ContainerSearch>
      <Map />
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(!modalOpened)}
      />
    </Wrapper>
  );
};

export default Home;
