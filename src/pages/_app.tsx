
import NextApp from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import '../../styles/globals.css'

const theme = {
  primary: 'green',
}

export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
// function MyApp({ Component, pageProps }:any) {
//   return <Component {...pageProps} />
// }

// export default MyApp
