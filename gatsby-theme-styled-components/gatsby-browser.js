import React from "react"
import Provider from "./src/style"

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>
