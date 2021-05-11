import React, {useContext} from 'react';
import styled from 'styled-components/native';

import Title from '../../components/Title';
import Box from '../../components/Box';
import SubTitle from '../../components/SubTitle';
import Btn from '../../components/Button';

import {logOut} from '../../services';
import {storeData} from '../../utils';

import {LoginContext} from '../../context';

const Logged = ({navigation}) => {
  const {email} = useContext(LoginContext);

  const handleLogout = async () => {
    await storeData('logged', '0');
    logOut;
    navigation.navigate('Home');
  };

  return (
    <Wrapper contentContainerStyle={{alignItems: 'center'}}>
      <Box size="85%" align="left">
        <Title>Seja bem vindo, {email}!</Title>
        <SubTitle>Você esta numa área segura</SubTitle>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
          leo a quam facilisis, et sodales lacus scelerisque. Quisque lorem
          orci, porta at laoreet a, sodales in est. Fusce vestibulum, tellus sed
          aliquet ullamcorper, odio lacus placerat purus, non vulputate mauris
          orci et lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.{' '}
        </SubTitle>
        <Btn
          title="Sair"
          bgColor="#ff0000"
          color="#fff"
          onPress={handleLogout}
        />
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
