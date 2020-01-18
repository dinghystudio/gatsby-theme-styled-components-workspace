import React from "react"
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './GlobalStyles'
import Theme from './Theme'

const StyleProvider = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default StyleProvider
