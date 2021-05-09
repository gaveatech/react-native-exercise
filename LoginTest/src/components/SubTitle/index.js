import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const SubTitle = ({children}) => {
  return <Text>{children}</Text>;
};

const Text = styled.Text`
  font-family: 'RobotoLight';
  font-size: 16px;
  margin-bottom: 20px;
`;

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubTitle;
