import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles';
import FavIcon from "../assets/images/favicon.png";

class MyDocument extends Document {
  static async getInitialProps (ctx:any) {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App:any) => (props:any) => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />))
          })
        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <React.Fragment>
              {initialProps.styles}
              {materialSheets.getStyleElement()}
              {styledComponentsSheet.getStyleElement()}
            </React.Fragment>
          )
        }
      } finally {
        styledComponentsSheet.seal()
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

export default MyDocument;