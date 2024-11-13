import React from 'react'
import "../app/_global/globals.css"
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Layout from "../app/components/layout"
import theme from '../app/_global/theme'
import { SidebarContext } from '../app/context/languageContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  const [language, setLanguage] = React.useState("en")

  return (
    <SidebarContext.Provider value={{ language, setLanguage }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Layout>
          <Head>
            <title>Kahvana</title>
            <meta name="description" content="We code, we solve, we laugh. Every bug has its story." />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SidebarContext.Provider>
  );
}

export default MyApp
