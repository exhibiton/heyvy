import { Link } from 'gatsby'
import React from 'react'
import HeyvyLogo from '../../images/heyvyLogo.svg'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  position: absolute;
  margin-left: 4.167vw;
  margin-top: 3.611vw;
`

const EmailLink = styled.div`
  margin-left: 17.361vw;
  margin-top: 4.167vw;
  ${({ theme }) => theme.textStyles.links};
  text-decoration: none;
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
`

const StyledImg = styled.img`
  width: 72px;
`

const Header = () => (
  <StyledHeader>
    <HeaderDiv>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <StyledImg src={HeyvyLogo} />
        </Link>
      </h1>
    </HeaderDiv>
    <EmailLink>
      <a href="mailto:hey@heyvy.co">hey@heyvy.co</a>
    </EmailLink>
  </StyledHeader>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
