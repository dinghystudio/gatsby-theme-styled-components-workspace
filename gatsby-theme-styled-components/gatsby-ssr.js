import React from "react"
import Provider from "./src/style"
import GlobalStyles from "./src/style/GlobalStyles"

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
)

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>
