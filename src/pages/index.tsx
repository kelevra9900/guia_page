import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { globalTheme } from '../theme/';

export default function Home() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Fragment>
        <Head>
          <title>Guía de Seguridad</title>
          <meta name="theme-color" content="#171717" />
          <meta name="description" content="Guía de Seguridad" />
          <meta
            name="keywords"
            content="Guía de Seguridad, Seguridad en América"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <p>HOME</p>
      </Fragment>
    </ThemeProvider>
  );
}
