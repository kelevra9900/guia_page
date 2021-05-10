import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from '../containers/Head';

import { globalTheme } from '../theme/';

export default function Home() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Fragment>
        <Head />
        <p>HOME</p>
      </Fragment>
    </ThemeProvider>
  );
}
