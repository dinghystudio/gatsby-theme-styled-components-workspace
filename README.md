# Gatsby Theme Styled Components


## Theme Usage

Install this theme in a gatsby page setup:

```shell
mkdir my-site
cd my-site
npm init
# install gatsby-theme-styled-components and it's dependencies
npm install gatsby react react-dom @dinghystudio/gatsby-theme-styled-components
touch gatsby-config.js
```

Then add the theme to your `gatsby-config.js`. We'll use the long form
here for education purposes.

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [`@dinghystudio/gatsby-theme-styled-components`],
}
```

Add `"develop": "gatsby develop"` to `package.json`’s scripts section.
That's it, you can now run your gatsby site using

```shell
npm run develop
```


## Usage of styled-components

After installation you should be able to make use of styled-components right away:

```jsx
// src/pages/index.js
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
```

Use [shadowing](https://www.gatsbyjs.org/docs/theme-api/#shadowing) to overwrite `Theme` and `GlobalStyles` which are injected into the side using `wrapRootElement` and `wrapPageElement` respectively.

```js
// src/@dinghystudio/gatsby-theme-styled-components/style/Theme.js
const Theme = {
  colors: {
    primary: 'blue',
    background: 'azure',
    foreground: 'darkblue',
  },
}

export default Theme
```

```js
// src/@dinghystudio/gatsby-theme-styled-components/style/GlobalStyles.js
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
```


## Developement

Use _yarn_ to make use of workspaces:

```shell
#!/bin/bash
yarn workspace gatsby-theme-develop
yarn workspace site
```

Running the example setup in `/site` by using yarn workspaces:

```shell
#!/bin/bash
yarn workspace site develop
```


## Publish

For full descriptions, see [GitHub help](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages).

```shell
#!/bin/bash

# Change into package directory:
cd gatsby-theme-tests-setup/

# And publish via:
NPM_TOKEN="[TOKEN]" NPM_OWNER="[OWNER]" npm publish
```

Where `TOKEN` can be generated in your [personal profile settings](https://github.com/settings/tokens) and `OWNER` is the organization name **without** the leading _@_ sign.
