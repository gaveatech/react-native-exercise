import React, {useState} from 'react';
import styled from 'styled-components/native';

import Box from '../../components/Box';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import Btn from '../../components/Button';
import Input from '../../components/Input';

const Home = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <Wrapper>
      <Box size="85%">
        <Title>Bem vindo</Title>
        <SubTitle>Digite seus dados abaixo para logar</SubTitle>
        <Input
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoFocus
          onChangeText={setEmail}
          value={email}
        />
        <Input
          placeholder="Digite sua senha"
          password
          onChangeText={setPass}
          value={pass}
        />
        <Btn
          title="Logar"
          size="50%"
          bgColor="#315999"
          onPress={() => navigation.navigate('Logged')}
        />
        <Btn
          title="Ainda não possui login? Clique aqui"
          size="90%"
          bgColor="#f4f4f4"
          color="#247d33"
        />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
`;

export default Home;
