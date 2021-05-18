import React, { Fragment } from 'react';
import Header from '../../../components/Header';
import InfoShowcase from '../../../containers/Enterprise';
import Footer from '../../../containers/Footer';
import Head from '../../../containers/Head';
import { ContentWrapper } from '../../../containers/Home/home.style';

const Empresa = () => {
  return (
    <Fragment>
      <Head />
      <ContentWrapper>
        <Header />
        <InfoShowcase />
        <Footer />
      </ContentWrapper>
    </Fragment>
  );
};
export default Empresa;
