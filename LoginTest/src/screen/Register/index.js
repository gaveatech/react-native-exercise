import React, {useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styled from 'styled-components/native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Box from '../../components/Box';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import Btn from '../../components/Button';
import Input from '../../components/Input';

import {signIn} from '../../services';

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

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
      navigation.navigate('Home');
    } else {
      console.log('nao foi');
    }
  };

  return (
    <Wrapper>
      <Box size="85%">
        <Title>Registre-se</Title>
        <SubTitle>
          Digite seus dados abaixo para poder ter acesso a área logada
        </SubTitle>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={SignupSchema}
          onSubmit={values => {
            setLoading(true);
            // setLoginState(values);
            submitHandle(signIn(values.email, values.password));
          }}>
          {({handleChange, errors, handleSubmit, values}) => (
            <>
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
                title="Criar acesso"
                size="50%"
                bgColor="#315999"
                onPress={handleSubmit}
                loading={loading}
              />
            </>
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

export default Register;
