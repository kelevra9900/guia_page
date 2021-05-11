import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themed } from '../base';

const ImageWrapper = styled('img')(
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  base,
  themed('Image')
);

const Image = ({ src, alt, width, height }: any) => (
  <ImageWrapper src={src} alt={alt} width={width} height={height}/>
);

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

Image.defaultProps = {
  m: 0,
};