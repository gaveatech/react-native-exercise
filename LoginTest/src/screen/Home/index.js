import React, {useState, useContext} from 'react';

import styled from 'styled-components/native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Box from '../../components/Box';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import Btn from '../../components/Button';
import Input from '../../components/Input';

import {logIn} from '../../services';
import {storeData} from '../../utils';

import {LoginContext} from '../../context';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const {setEmail} = useContext(LoginContext);

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  });

  const submitHandle = async bool => {
    if (await bool) {
      setLoading(false);
      navigation.navigate('Logged');
    } else {
      console.log('nao foi');
    }
  };

  return (
    <Wrapper>
      <Box size="85%">
        <Title>Bem vindo</Title>
        <SubTitle>Digite seus dados abaixo para logar</SubTitle>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={SignupSchema}
          onSubmit={values => {
            setLoading(true);
            storeData('logged', '1');
            submitHandle(logIn(values.email, values.password));
          }}>
          {({handleChange, errors, handleSubmit, values}) => (
            <LoginContext.Provider value={setEmail(values.email)}>
              <Input
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoFocus
                onChangeText={handleChange('email')}
                value={values.email}
                error={errors.email}
              />
              <Input
                placeholder="Digite sua senha"
                password
                onChangeText={handleChange('password')}
                value={values.password}
                error={errors.password}
              />
              <Btn
                title="Logar"
                size="50%"
                bgColor="#315999"
                onPress={handleSubmit}
                loading={loading}
              />
              <Btn
                title="Ainda não possui login? Clique aqui"
                size="90%"
                bgColor="#f4f4f4"
                color="#247d33"
                onPress={() => navigation.navigate('Register')}
              />
            </LoginContext.Provider>
          )}
        </Formik>
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

const Test = styled.Text``;

export default Home;
