import React from "react"
import { ThemeProvider } from 'styled-components'

import Theme from './Theme'

const StyleProvider = ({ children }) => (
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>
)

export default StyleProvider
