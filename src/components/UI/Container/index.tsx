import React from 'react';
import ContainerWrapper from './style';

interface IContainer {
    children?:any,
    className?:any,
    fullWidth?:any,
    noGutter?:any,
    mobileGutter?:any,
    width?:any,
}
const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width,
}:IContainer) => {
  // Add all classs to an array
  const addAllClasses = ['container'];
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      className={addAllClasses.join(' ')}
      fullWidth={fullWidth}
      noGutter={noGutter}
      width={width}
      mobileGutter={mobileGutter}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;