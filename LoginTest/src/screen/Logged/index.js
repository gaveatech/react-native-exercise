import React from 'react';
import styled from 'styled-components/native';

import Title from '../../components/Title';
import Box from '../../components/Box';
import SubTitle from '../../components/SubTitle';

const Logged = ({navigation}) => {
  return (
    <Wrapper contentContainerStyle={{alignItems: 'center'}}>
      <Box size="85%" align="left">
        <Title>Seja bem vindo, Fulano!</Title>
        <SubTitle>Você esta numa área segura</SubTitle>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #274370;
  padding-top: 20px;
`;

export default Logged;
