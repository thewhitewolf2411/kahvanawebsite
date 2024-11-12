import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Layout from "../app/components/layout"
import theme from '../app/_global/theme'
import { SidebarContext } from '../app/context/languageContext'

function MyApp({ Component, pageProps }) {

  const [language, setLanguage] = React.useState("bh")

  return (
    <SidebarContext.Provider value={{ language, setLanguage }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SidebarContext.Provider>
  );
}

export default MyApp
