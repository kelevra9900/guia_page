import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import Head from '../containers/Head';

import { globalTheme } from '../theme/';
import { ResetCSS } from '../assets/css/CreateGlobalStyle';
import { GlobalStyle, Wrapper, ContentWrapper } from '../containers/Home/home.style';
import Header from '../components/Header';

export default function Home() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Fragment>
        <Head />
        <ResetCSS />
        <GlobalStyle />

        <Wrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <Header />
            </Sticky>
          {/* Body  */}
          <ContentWrapper>

          </ContentWrapper>
        </Wrapper>
      </Fragment>
    </ThemeProvider>
  );
}
