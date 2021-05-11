import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import Head from '../containers/Head';

import { globalTheme } from '../theme/';
import { ResetCSS } from '../assets/css/CreateGlobalStyle';
import { GlobalStyle, Wrapper, ContentWrapper } from '../containers/Home/home.style';
import Header from '../components/Header';
import Banner from '../containers/Banner';
import CategorySection from '../containers/CategorySection';

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
          </ContentWrapper>
        </Wrapper>
      </Fragment>
    </ThemeProvider>
  );
}
