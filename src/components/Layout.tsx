/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React, { PropsWithChildren } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import './styles/layout.css'
import { theme } from 'theme/globalStyle'

const StyledMain = styled.main`
  position: relative;
  width: 80vw;
`

const DesktopLayout = ({ children }: PropsWithChildren<{}>) => (
  <StaticQuery
    query={graphql`
      query DesktopSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <ThemeProvider theme={theme}>
        <StyledMain>{children}</StyledMain>
      </ThemeProvider>
    )}
  />
)

export default DesktopLayout
