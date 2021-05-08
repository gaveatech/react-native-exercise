import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Box = ({size, bgColor, children}) => {
  return (
    <Wrapper size={size} bgColor={bgColor}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: ${props => props.bgColor};
  padding: 15px;
  width: ${props => props.size};
  border-radius: 15px;
`;

Box.propTypes = {
  size: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Box.defaultProps = {
  size: '100%',
  bgColor: '#fff',
};

export default Box;
