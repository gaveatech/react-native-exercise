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
}) => {
  return (
    <TextBox
      {...{onChangeText, value, placeholder, keyboardType, autoFocus}}
      autoCorrect={false}
      secureTextEntry={password}
      testID="input"
    />
  );
};

const TextBox = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 25px;
  margin-bottom: 10px;
  padding: 10px 20px;
  min-width: 80%;
  font-family: 'RobotoRegular';
`;

TextBox.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  password: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

TextBox.defaultProps = {
  value: '',
  placeholder: '',
  keyboardType: 'default',
  password: false,
  autoFocus: false,
  onChangeText: () => null,
};

export default Input;
