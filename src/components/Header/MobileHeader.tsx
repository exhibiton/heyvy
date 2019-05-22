import { Link } from 'gatsby'
import React from 'react'
import HeyvyLogo from '../../images/heyvyLogo.svg'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 50px;
  margin-top: 50px;
`

const EmailLink = styled.div`
  ${({ theme }) => theme.textStyles.links};
  text-decoration: none;
  display: flex;
  align-items: center;
`

const StyledImg = styled.img`
  width: 72px;
`

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <StyledImg src={HeyvyLogo} />
    </Link>
    <EmailLink>
      <a href="mailto:hi@theheyvy.com">hi@theheyvy.com</a>
    </EmailLink>
  </StyledHeader>
)

export default Header
