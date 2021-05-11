import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Input = ({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  password,
  autoFocus,
  error,
}) => {
  return (
    <InputWrapper>
      <TextBox
        {...{onChangeText, value, placeholder, keyboardType, autoFocus}}
        autoCorrect={false}
        secureTextEntry={password}
        testID="input"
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};

const TextBox = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 10px 20px;
  min-width: 80%;
  font-family: 'RobotoRegular';
`;

const Error = styled.Text`
  font-size: 13px;
  font-family: 'RobotoThing';
  color: #ff0000;
  margin-left: 20px;
`;

const InputWrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 5px;
  height: 70px;
`;

TextBox.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  password: PropTypes.bool,
  autoFocus: PropTypes.bool,
  error: PropTypes.string,
};

TextBox.defaultProps = {
  value: '',
  error: '',
  placeholder: '',
  keyboardType: 'default',
  password: false,
  autoFocus: false,
  onChangeText: () => null,
};

export default Input;
