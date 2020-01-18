import React from "react"
import styled from "styled-components"

const Headline = styled.h1`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`

export default () => <div>
  <Headline>Hello!</Headline>
  Homepage in a user's site
</div>
