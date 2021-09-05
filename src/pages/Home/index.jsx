import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';

import {ContainerMap, ContainerSearch, Logo, Search, Wrapper } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
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
        </Search>
      </ContainerSearch>
      <ContainerMap></ContainerMap>
    </Wrapper>
  );
};

export default Home;
