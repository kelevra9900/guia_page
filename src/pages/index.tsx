import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from '../containers/Head';

import { globalTheme } from '../theme/';
import { ResetCSS } from '../assets/css/CreateGlobalStyle';
import { GlobalStyle, Wrapper, ContentWrapper } from '../containers/Home/home.style';
import Header from '../components/Header';
import Banner from '../containers/Banner';
import CategorySection from '../containers/CategorySection';
import Testimonials from '../containers/Testimonials';
import Footer from '../containers/Footer';

export default function Home() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Fragment>
        <Head />
        <ResetCSS />
        <GlobalStyle />

        <Wrapper>
          <Header />

          {/* Body  */}
          <ContentWrapper>
            <Banner />
            <CategorySection />
            <Testimonials />
          </ContentWrapper>
          <Footer />
        </Wrapper>
      </Fragment>
    </ThemeProvider>
  );
}
