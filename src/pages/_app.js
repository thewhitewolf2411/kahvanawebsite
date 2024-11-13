import React from 'react'
import "../app/_global/globals.css"
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Layout from "../app/components/layout"
import theme from '../app/_global/theme'
import { SidebarContext } from '../app/context/languageContext'
import Head from 'next/head'
import logo from '../app/_static/logo.png';

function MyApp({ Component, pageProps }) {

  const [language, setLanguage] = React.useState("en")
  const logoUrl = logo.src || '/android-chrome-512x512.png'; // Fallback if using public folder

  return (
    <SidebarContext.Provider value={{ language, setLanguage }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Layout>
          <Head>
            <title>Kahvana</title>
            <meta name="description" content="We code, we solve, we laugh. Every bug has its story." />
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Kahvana" />
            <meta property="og:description" content="We code, we solve, we laugh. Every bug has its story." />
            <meta property="og:image" content={logoUrl} />
            <meta property="og:url" content="https://www.kahvana.com" />
            <meta property="og:type" content="website" />

            {/* Twitter Card Meta Tags (optional) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Kahvana" />
            <meta name="twitter:description" content="We code, we solve, we laugh. Every bug has its story." />
            <meta name="twitter:image" content={logoUrl} />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SidebarContext.Provider>
  );
}

export default MyApp
