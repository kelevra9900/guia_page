import React from 'react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import FavIcon from "@assets/images/favicon.png";
import {  ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';

export default class Document extends NextDocument {
  static async getInitialProps (ctx:any){
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App:any) => (props:any) =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        })
      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content="#0d386c"
          />
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
          {/*  Global site tag (gtag.js) - Google Analytics */}

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-HYL88EVC1D`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HYL88EVC1D}');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}