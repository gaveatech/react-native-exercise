import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Btn = ({bgColor, color, size, onPress, title}) => {
  return (
    <Button testID="touch" {...{bgColor, size, onPress}}>
      <Text {...{color}}>{title}</Text>
    </Button>
  );
};

const Button = styled.Pressable`
  background-color: ${props => props.bgColor};
  border-radius: 20px;
  padding: 10px 0;
  width: ${props => props.size};
  margin-bottom: 15px;
`;

const Text = styled.Text`
  color: ${props => props.color};
  width: 100%;
  text-align: center;
  font-family: 'RobotoRegular';
  font-size: 16px;
`;

Btn.propTypes = {
  size: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
};

Btn.defaultProps = {
  size: '100%',
  bgColor: '#000',
  color: '#fff',
  onPress: () => null,
};

export default Btn;
