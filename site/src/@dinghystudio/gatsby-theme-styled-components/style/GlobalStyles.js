import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";

    background-color: ${({ theme }) => theme.colors.background};
  }
`

export default GlobalStyle
