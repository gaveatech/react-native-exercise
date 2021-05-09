import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Box = ({size, bgColor, align, children}) => {
  return <Wrapper {...{size, bgColor, align}}>{children}</Wrapper>;
};

const Wrapper = styled.View`
  background-color: ${props => props.bgColor};
  padding: 15px;
  width: ${props => props.size};
  border-radius: 15px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  align-items: ${props =>
    props.align === 'center'
      ? 'center'
      : props.align === 'left'
      ? 'flex-start'
      : 'flex-end'};
`;

Box.propTypes = {
  size: PropTypes.string,
  bgColor: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Box.defaultProps = {
  size: '100%',
  align: 'center',
  bgColor: '#fff',
};

export default Box;
