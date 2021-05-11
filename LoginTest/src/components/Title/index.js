import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Title = ({children, color}) => {
  return <Text {...{color}}>{children}</Text>;
};

const Text = styled.Text`
  font-family: 'RobotoBold';
  font-size: 24px;
  margin-bottom: 5px;
  color: ${props => props.color};
`;

Title.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  color: '#000',
};

export default Title;
